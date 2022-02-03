import { apiClient } from "../../../config/axios"

export const getPosts = async (id) => {
  return apiClient.get(`/posts/${id}`)
}