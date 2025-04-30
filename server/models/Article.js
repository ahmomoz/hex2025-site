import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // 文章標題
    preview: { type: String, required: true }, // 預覽內文（卡片簡介）
    content: { type: String, required: true }, // 完整內文
    thumbnailUrl: { type: String, required: true }, // 縮圖
    tags: { type: [String], default: [] }, // 標籤陣列
    category: { type: String, default: null }, // 分類
  },
  {
    timestamps: true,
  }
);

export const Article =
  mongoose.models.Article || mongoose.model("Article", ArticleSchema);
