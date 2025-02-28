import { AuctionProduct } from "../models/auctionProductModel.js";

export const addAuctionProduct = async (req, res) => {
    try {
        const { name, description, startingPrice, auctionEndTime, images } = req.body;

        // Ensure required fields are present
        if (!name || !description || !startingPrice || !auctionEndTime) {
            return res.status(400).json({ message: "All required fields must be provided." });
        }

        // Create new auction product
        const auctionProduct = new AuctionProduct({
            name,
            description,
            startingPrice,
            auctionEndTime,
            seller: req.user.id,  // Assuming req.user is set from authentication middleware
            images
        });

        // Save to database
        await auctionProduct.save();
        res.status(201).json({ message: "Auction product added successfully!", auctionProduct });

    } catch (error) {
        console.error("Error adding auction product:", error);
        res.status(500).json({ message: "Server error, please try again later." });
    }
};


