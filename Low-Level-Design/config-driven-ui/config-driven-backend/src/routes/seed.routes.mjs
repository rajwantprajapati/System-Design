import express from "express";
import Product from "../models/Product.model.mjs";
import PageConfig from "../models/PageConfig.model.mjs";
// import { PRODUCTS } from "../constants/products";

const router = express.Router();

/**
 * POST /api/seed
 * Seed entire database with sample data
 */
router.post("/", async (req, res) => {
  try {
    // Clear existing data
    await Product.deleteMany({});
    await PageConfig.deleteMany({});

    // Insert Products
    const products = await Product.insertMany([
      {
        name: "Premium Laptop",
        description: "High-performance laptop for professionals",
        image: "💻",
        price: 1299,
        category: "electronics",
        featured: true,
      },
      {
        name: "Smartphone Pro",
        description: "Latest flagship smartphone",
        image: "📱",
        price: 899,
        category: "electronics",
        featured: true,
      },
      {
        name: "Wireless Headphones",
        description: "Noise-cancelling headphones",
        image: "🎧",
        price: 249,
        category: "electronics",
        featured: false,
      },
      {
        name: "Smart Watch Ultra",
        description: "Fitness tracking smartwatch",
        image: "⌚",
        price: 399,
        category: "electronics",
        featured: true,
      },
      {
        name: "Tablet Device Pro",
        description: "Portable tablet for work and play",
        image: "📱",
        price: 649,
        category: "electronics",
        featured: false,
      },
      {
        name: "Digital Camera",
        description: "Professional DSLR camera",
        image: "📷",
        price: 1499,
        category: "electronics",
        featured: true,
      },
    ]);

    // Insert home page configurations
    const homeConfig = await PageConfig.create({
      page: "home",
      sections: [
        {
          type: "hero",
          title: "Welcome to ConfigUI Store",
          data: {
            subtitle: "Dynamic UI powered by backend configuration",
            buttonText: "Shop Now",
            backgroundColor: "#1f2937",
          },
        },
        {
          type: "grid",
          title: "Featured Products",
          data: {
            columns: 3,
            backgroundColor: "#ffffff",
          },
        },
        {
          type: "list",
          title: "Latest Arrivals",
          data: {
            limit: 4,
            backgroundColor: "#f3f4f6",
          },
        },
      ],
    });

    res.json({
      message: "Database seeded successfully",
      data: {
        productsCreated: products.length,
        configCreated: 1,
      },
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error: "Failed to seed data",
    });
  }
});

export default router;
