import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose';
import colors from "colors";
import cors from 'cors'
import cookieParser from 'cookie-parser'
import fileUpload from 'express-fileupload'
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();

const app = express();

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
  useTempFiles: true
}))

// ROUTES
app.use("/users", userRoutes);
app.use("/api/products", productRoutes);

const URI = process.env.MONGO_URI;

mongoose.connect(URI, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
}, error => {
  if(error) {
    throw error
  }
  console.log(`MongoDB Connected`.cyan.underline);
})

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
