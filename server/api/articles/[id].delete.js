import { connectDB } from '~/server/utils/mongoose'
import { Article } from '~/server/models/Article'

export default defineEventHandler(async (event) => {
  await connectDB()
  const { id } = event.context.params
  const deletedArticle = await Article.findByIdAndDelete(id)
  if (!deletedArticle) {
    throw createError({ statusCode: 404, statusMessage: '找不到要刪除的文章' })
  }
  return { message: '刪除成功' }
})
