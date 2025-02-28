import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./libs/db.js";
import cookieParser from "cookie-parser";
import   authRoutes  from "./routes/authRoutes.js";
import {auctionRoutes} from "./routes/auctionRoutes.js";
dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT;

//middleware
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/auction", auctionRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
