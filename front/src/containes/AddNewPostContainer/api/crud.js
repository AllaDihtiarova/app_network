import { apiClient } from "../../../config/axios"

export const addPost = async (data) => {
  return apiClient.post('/posts', data)
}