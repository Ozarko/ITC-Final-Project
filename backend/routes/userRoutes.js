import express from 'express';
import { userCtrl } from "../controllers/userController.js";
import authAdmin from '../middleware/authAdminMiddleware.js';
import auth from '../middleware/authMiddleware.js'

const router = express.Router();

router.post('/register', userCtrl.register);
router.post('/activation', userCtrl.activateEmail);
router.post('/login', userCtrl.login);
router.post("/refresh_token", userCtrl.getAccessToken);
router.post("/forgot", userCtrl.forgotPassword);
router.post("/reset", auth,userCtrl.resetPassword);
router.get("/infor", auth,userCtrl.getUserInfor);
router.get("/all_infor",auth, authAdmin, userCtrl.getUsersAllInfor);
router.get("/logout", userCtrl.logout);

export default router