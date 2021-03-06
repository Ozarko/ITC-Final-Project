import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendEmail from "./sendEmail.js";
import dotenv from "dotenv";
import googleapis from "googleapis";

dotenv.config();

const {OAuth2} = googleapis.google.auth
const client = new OAuth2(process.env.MAINLING_SERVICE_CLIENT_ID);

const { CLIENT_URL } = process.env;

const userCtrl = {
  register: async (req, res) => {
    try {
      const { firstName, lastName, phone, email, password } = req.body;

      const user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ msg: "Цей email уже використовується !" });
      }

      const passwordHash = await bcrypt.hash(password, 12);

      const newUser = {
        firstName,
        lastName,
        phone,
        email,
        password: passwordHash,
      };

      const activation_token = createActivationToken(newUser);

      const url = `${CLIENT_URL}/users/activate/${activation_token}`;

      sendEmail(email, url, "Підтвердіть адресу вашої електронної пошти");

      res.json({
        msg:
          "Регістрація пройшла успішно! Вам на пошту прийшов лист, будь-ласка активуйте ваш email !",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  activateEmail: async (req, res) => {
    try {
      const { activation_token } = req.body;
      const user = jwt.verify(
        activation_token,
        process.env.ACTIVATION_TOKEN_SECRET
      );

      const { firstName, lastName, phone, email, password } = user;

      const check = await User.findOne({ email });
      if (check)
        return res
          .status(400)
          .json({ msg: "Даний email, уже зареєстрований !" });

      const newUser = new User({
        firstName,
        lastName,
        phone,
        email,
        password,
      });

      await newUser.save();

      res.json({ msg: "Ваш акаунт активовано" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user)
        return res.status(400).json({ msg: "Ваш пароль або емейл не вірний" });
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ msg: "Ваш пароль або емейл не вірний" });

      const refresh_token = createRefreshToken({ id: user._id });

      res.cookie("refreshtoken", refresh_token, {
        httpOnly: true,
        path: "/users/refresh_token",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.json({ msg: "Ви успішно ввійшли" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getAccessToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;

      if (!rf_token) return res.status(400).json({ msg: "Please login now!" });

      jwt.verify(
        rf_token,
        process.env.REFRESH_TOKEN_SECRET,

        (err, user) => {
          if (err) return res.status(400).json({ msg: "Please login now!" });
          const access_token = createAccessToken({ id: user.id });
          res.json({ access_token });
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  forgotPassword: async (req, res) => {
    try {
      const { email } = req.body;
      const user = await User.findOne({ email });
      if (!user)
        return res
          .status(400)
          .json({ msg: "Такого email не знайдено. Перевірте введення !" });

      const access_token = createAccessToken({ id: user._id });
      const url = `${CLIENT_URL}/user/reset/${access_token}`;

      sendEmail(email, url, "Скинути ваш пароль !");
      res.json({
        msg: "Ваш пароль було скинуто. Будь ласка перевірте вашу пошту !",
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  resetPassword: async (req, res) => {
    try {
      const { password } = req.body;

      const passwordHash = await bcrypt.hash(password, 12);

      await User.findOneAndUpdate(
        { _id: req.user.id },
        {
          password: passwordHash,
        }
      );

      res.json({ msg: "Пароль було успішно змінено" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getUserInfor: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("-password");
      res.json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getUsersAllInfor: async (req, res) => {
    try {
      const users = await User.find().select("-password");

      res.json(users);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/user/refresh_token" });
      return res.json({ msg: "Logged out." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const { firstName, lastName, phone, email } = req.body;

      const user = await User.findById(req.user.id);

      if (email) {
        const userWithThisEmail = await User.findOne({ email });
        if (userWithThisEmail && email !== user.email) {
          res.status(400);
          return res.json({
            msg: "Користувач з вказаним email уже зареєстрований !",
          });
        }
      }

      if (phone) {
        const userWithThisPhone = await User.findOne({ phone });
        if (userWithThisPhone && phone !== user.phone) {
          res.status(400);
          return res.json({
            msg: "Користувач з вказаним номером телефону уже зареєстрований !",
          });
        }
      }

      const updatedUser = {
        firstName: firstName ? firstName : user.firstName,
        lastName: lastName ? lastName : user.lastName,
        phone: phone ? phone : user.phone,
        email: email ? email.toLowerCase() : user.email,
      };

      await User.updateOne({ _id: req.user.id }, updatedUser);

      res.json({ msg: "Update Success!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateUsersRole: async (req, res) => {
    try {
      const { isAdmin } = req.body;

      await User.findOneAndUpdate(
        { _id: req.params.id },
        {
          isAdmin,
        }
      );

      res.json({ msg: "Update Success!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);

      res.json({ msg: "Deleted Success!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  googleLogin: async (req, res) => {
    try {
      const { tokenId } = req.body;
      const verify = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.MAILING_SERVICE_CLIENT_ID,
      });

      const { email_verified, email, name } = verify.payload;

      const password = email + process.env.GOOGLE_SECRET;

      const passwordHash = await bcrypt.hash(password, 12);

      if (!email_verified)
        return res
          .status(400)
          .json({ msg: "Верифікація email була відхилена!" });

      const user = await User.findOne({ email });

      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch)
          return res.status(400).json({ msg: "Ваш пароль Google для цього сайту невірний." });

        const refresh_token = createRefreshToken({ id: user._id });
        res.cookie("refreshtoken", refresh_token, {
          httpOnly: true,
          path: "/users/refresh_token",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.json({ msg: "Ласкаво просимо в наш магазин!" });
      } else {
        const newUser = new User({
          firstName: name.split(" ")[0],
          lastName: name.split(" ")[1],
          email,
          password: passwordHash,
        });

        await newUser.save();

        const refresh_token = createRefreshToken({ id: newUser._id });
        res.cookie("refreshtoken", refresh_token, {
          httpOnly: true,
          path: "/user/refresh_token",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.json({ msg: "Ласкаво просимо в наш магазин!" });
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  facebookLogin: async (req, res) => {
    try {
      const { accessToken, userID } = req.body;

      const URL = `https://graph.facebook.com/v2.9/${userID}/?fields=id,name,email,picture&access_token=${accessToken}`;

      const data = await fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          return res;
        });

      const { email, name } = data;

      const password = email + process.env.FACEBOOK_SECRET;

      const passwordHash = await bcrypt.hash(password, 12);

      const user = await User.findOne({ email });

      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(400).json({ msg: "Ваш пароль не вірний" });

        const refresh_token = createRefreshToken({ id: user._id });
        res.cookie("refreshtoken", refresh_token, {
          httpOnly: true,
          path: "/users/refresh_token",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.json({ msg: "Login success!" });
      } else {
        const newUser = new User({
          firstName: name.split(" ")[0],
          lastName: name.split(" ")[1],
          email,
          password: passwordHash,
        });

        await newUser.save();

        const refresh_token = createRefreshToken({ id: newUser._id });
        res.cookie("refreshtoken", refresh_token, {
          httpOnly: true,
          path: "/users/refresh_token",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.json({ msg: "Ви успішно увійшли в акаунт" });
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {
    expiresIn: "5m",
  });
};

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

export { userCtrl };
