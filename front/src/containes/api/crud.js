import { apiClient } from "../../config/axios"

export const getPost = async () => {
  return apiClient.get('/posts')
}

export const getUser = async () => {
  return apiClient.get('/users')
}

export const getUserById = async (id) => {
  return apiClient.get(`/users/${id}`)
}
