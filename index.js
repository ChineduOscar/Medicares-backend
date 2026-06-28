import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import subscriptionRoute from "./routes/subscription.routes.js";
import contactRoute from "./routes/contact.routes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGO_URI;

// Routes
app.use("/subscribe", subscriptionRoute);
app.use("/", contactRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is running",
  });
});

const start = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database is running...");

    app.listen(PORT, () => {
      console.log(`server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
