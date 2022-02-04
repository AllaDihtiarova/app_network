import { apiClient } from "../../../config/axios"

export const getPosts = async (id) => {
  return apiClient.get(`/posts/${id}`)
}

export const updatePostById = async (id, data) => {
  return apiClient.put(`/posts/${id}`, data)
}