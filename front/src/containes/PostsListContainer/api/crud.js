import { apiClient } from "../../../config/axios"

export const getPost = async () => {
  return apiClient.get('/posts')
}