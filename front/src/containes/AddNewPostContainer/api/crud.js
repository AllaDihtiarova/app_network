import { apiClient } from "../../../config/axios"

export const addPost = async (userId, title, contentPost, createDate) => {
  return apiClient.post('/posts', userId, title, contentPost, createDate)
}