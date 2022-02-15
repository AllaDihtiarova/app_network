import { apiClient } from "../../../config/axios"

export const getAllAccess = async () => {
  return apiClient.get('/posts/access')
}