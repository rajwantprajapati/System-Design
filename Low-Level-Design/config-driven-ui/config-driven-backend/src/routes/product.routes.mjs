import express from "express";
import Product from "../models/Product.model.mjs";
import { PRODUCTS } from "../constants/products.js";

const router = express.Router();

/**
 * GET /api/products
 * Get all products with optional filters
 */
router.get("/", async (req, res) => {
  try {
    const { featured, category, limit = 50 } = req.query;

    // Build query
    const query = {};

    if (featured) {
      query.featured = featured === "true";
    }

    if (category) {
      query.category = category;
    }

    // Fetch products based on query
    const products = await Product.find(query)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit));

    res.json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message, error: "Failed to fetch products" });
  }
});

/**
 * POST /api/products/seed
 * Seed database with sample products
 */
router.post("/seed", async (req, res) => {
  try {
    // Clear existing items
    await Product.deleteMany({});

    // Insert sample products
    const products = await Product.insertMany(PRODUCTS);

    res.json({
      message: "Products seeded successfully",
      products,
      count: products.length,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message, error: "Failed to seed products" });
  }
});

export default router;
