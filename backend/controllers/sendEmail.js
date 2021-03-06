import nodemailer from 'nodemailer';
import googleapis from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const {OAuth2} = googleapis.google.auth;

const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground'

const {
  MAINLING_SERVICE_CLIENT_ID,
  MAINLING_SERVICE_CLIENT_SECRET,
  MAINLING_SERVICE_REFRESH_TOKEN,
  SENDER_EMAIL_ADDRESS,
} = process.env;

const oauth2Client = new OAuth2(
  MAINLING_SERVICE_CLIENT_ID,
  MAINLING_SERVICE_CLIENT_SECRET,
  MAINLING_SERVICE_REFRESH_TOKEN,
  OAUTH_PLAYGROUND
);

const sendEmail = (to, url, msg) => {
  oauth2Client.setCredentials({
    refresh_token: MAINLING_SERVICE_REFRESH_TOKEN,
  });

  const accessToken = oauth2Client.getAccessToken()

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: SENDER_EMAIL_ADDRESS,
      clientId: MAINLING_SERVICE_CLIENT_ID,
      clientSecret: MAINLING_SERVICE_CLIENT_SECRET,
      refreshToken: MAINLING_SERVICE_REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  const mailOptions = {
    from: SENDER_EMAIL_ADDRESS,
    to: to,
    subject: "SocksGlamour",
    html: `
            <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
            <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to SocksGlamour.</h2>
            <p>Congratulations! You're almost set to start using SocksGlamour.
                Just click the button below to validate your email address.
            </p>
            
            <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${msg}</a>
        
            <p>If the button doesn't work for any reason, you can also click on the link below:</p>
        
            <div>${url}</div>
            </div>
        `,
  };
  smtpTransport.sendMail(mailOptions, (err, infor)=> {
    if(err) return err;
    return infor
  })
}



export default sendEmail;