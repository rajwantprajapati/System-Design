import mongoose from "mongoose";

const PageConfigSchema = new mongoose.Schema(
  {
    page: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    sections: [
      {
        type: {
          type: String,
          required: true,
          enum: ["hero", "grid", "list", "banner", "carousel"],
        },
        title: {
          type: String,
          trim: true,
        },
        data: mongoose.Schema.Types.Mixed,
      },
    ],
  },
  {
    timestamps: true,
  },
);

// Index for faster queries
PageConfigSchema.index({ page: 1, updatedAt: -1 });

const PageConfig = mongoose.model("PageConfig", PageConfigSchema);

export default PageConfig;
