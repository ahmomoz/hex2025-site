import { connectDB } from '~/server/utils/mongoose'
import { Article } from '~/server/models/Article'

export default defineEventHandler(async (event) => {
  await connectDB()
  const { id } = event.context.params
  const body = await readBody(event)
  const updatedArticle = await Article.findByIdAndUpdate(id, body, { new: true })
  if (!updatedArticle) {
    throw createError({ statusCode: 404, statusMessage: '找不到要更新的文章' })
  }
  return updatedArticle
})

