import express from "express";
import PageConfig from "../models/PageConfig.model.mjs";

const router = express.Router();

/**
 * GET /api/config/:page
 * Get page configuration by page name
 */
router.get("/:page", async (req, res, next) => {
  try {
    const { page } = req.params;

    const config = await PageConfig.findOne({ page });

    if (!config) {
      return res.status(404).json({ message: "Page Config not found" });
    }

    res.json({config});
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch page config", message: error.message });
  }
});

/**
 * POST /api/config
 * Create new page configuration
 */
router.post("/", async (req, res) => {
  try {
    const config = new PageConfig(req.body);

    await config.save();

    res.status(201).json(config);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create page config", message: error.message });
  }
});

export default router;
