import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, unique: true, index: true },
    icon: String,
    image: String,
    count: { type: Number, default: 0 },
    description: String,
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Category", CategorySchema);
