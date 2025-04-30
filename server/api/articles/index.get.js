import { connectDB } from "~/server/utils/mongoose";
import { Article } from "~/server/models/Article";

/*
獲取最新一筆文章：/api/articles?latest=true
正常分頁查詢：/api/articles?page=1&pageSize=10 
*/

export default defineEventHandler(async (event) => {
  await connectDB();

  // 取得查詢參數
  const query = getQuery(event);

  // 檢查是否要獲取最新一筆資料
  const getLatest = query.latest === "true";

  if (getLatest) {
    // 獲取最新一筆資料
    const latestArticle = await Article.findOne(
      {},
      {},
      { sort: { createdAt: -1 } }
    );

    return {
      status: 200,
      message: "success",
      data: latestArticle,
      pagination: null,
    };
  } else {
    // 原本的分頁邏輯
    const page = parseInt(query.page) > 0 ? parseInt(query.page) : 1;
    const pageSize =
      parseInt(query.pageSize) > 0 ? parseInt(query.pageSize) : 10;

    // 計算總數
    const total = await Article.countDocuments();
    const totalPages = Math.ceil(total / pageSize);

    // 查詢分頁資料
    const articles = await Article.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    // 回傳標準格式
    return {
      status: 200,
      message: "success",
      data: articles,
      pagination: {
        page,
        pageSize,
        total,
        totalPages,
      },
    };
  }
});
