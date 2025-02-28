import express from "express";
import { addAuctionProduct } from "../controllers/addController.js";

const router = express.Router();

router.post("/", addAuctionProduct);

export {router as auctionRoutes}