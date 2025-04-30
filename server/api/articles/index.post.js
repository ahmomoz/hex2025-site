import { connectDB } from '~/server/utils/mongoose'
import { Article } from '~/server/models/Article'

export default defineEventHandler(async (event) => {
  try {
    await connectDB()
    const body = await readBody(event)
    
    // 驗證必填欄位
    if (!body.title || !body.content || !body.thumbnailUrl) {
      return {
        status: 'error',
        statusCode: 400,
        data: null,
        error: '請填寫必要欄位：標題、內容、縮圖'
      }
    }
    
    // 處理標籤，確保格式正確
    const tags = Array.isArray(body.tags) 
      ? body.tags 
      : (body.tags ? body.tags.split('#').filter(Boolean).map(tag => tag.trim()) : [])
    
    // 生成預覽文字（如果沒有提供）
    const preview = body.preview || (body.content.length > 150 
      ? `${body.content.substring(0, 150)}...` 
      : body.content)
    
    // 生成當前日期字串
    const currentDate = new Date()
    const dateString = `${currentDate.getFullYear()}/${String(currentDate.getMonth() + 1).padStart(2, '0')}/${String(currentDate.getDate()).padStart(2, '0')}`
    
    // 建立文章物件，category 可為空
    const newArticle = new Article({
      title: body.title,
      preview: preview,
      content: body.content,
      thumbnailUrl: body.thumbnailUrl,
      tags: tags,
      category: body.category ?? null, // 若沒傳就存 null
      date: dateString
    })
    
    await newArticle.save()
    
    // 設定回應狀態碼為 201 Created
    event.node.res.statusCode = 201
    
    // 設定 Location 標頭（新資源的 URI）
    setResponseHeader(event, 'Location', `/api/articles/${newArticle._id}`)
    
    // 回傳標準格式響應
    return {
      status: 'success',
      statusCode: 201,
      data: {
        article: newArticle
      },
      error: null
    }
    
  } catch (error) {
    // 標準化錯誤回應
    const statusCode = error.statusCode || 500
    
    event.node.res.statusCode = statusCode
    
    return {
      status: 'error',
      statusCode: statusCode,
      data: null,
      error: error.message || '創建文章失敗'
    }
  }
})
