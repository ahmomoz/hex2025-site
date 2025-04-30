import { connectDB } from '~/server/utils/mongoose'
import { Article } from '~/server/models/Article'

export default defineEventHandler(async (event) => {
  await connectDB()
  const { id } = event.context.params
  const article = await Article.findById(id)
  if (!article) {
    throw createError({ statusCode: 404, statusMessage: '找不到文章' })
  }
  return article
})
