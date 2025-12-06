import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

// Import routes
import configRoutes from "./src/routes/config.routes.mjs";
import productRoutes from "./src/routes/product.routes.mjs";
import seedRoutes from "./src/routes/seed.routes.mjs";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Method to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/config-driven-ui",
    );

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

connectDB();

// MongoDB connection events
mongoose.connection.on("disconnected", () => {
  console.log("⚠️  MongoDB disconnected");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB error:", err);
});

// ROUTES
app.use("/api/config", configRoutes);
app.use("/api/products", productRoutes);
app.use("/api/seed", seedRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

// Root endpoints
app.get("/", (req, res) => {
  res.json({
    message: "Config-Driven UI API",
    version: "1.0.0",
    endpoints: {
      health: "/api/health",
      config: "/api/config/:page",
      items: "/api/products",
      seed: "/api/seed",
    },
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
