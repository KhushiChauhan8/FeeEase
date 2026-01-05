import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import feesRoutes from './routes/fees.routes.js'

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/fees", feesRoutes);

mongoose
.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
}) 
.catch ((err) => {
  console.log("DB Error", err)
});