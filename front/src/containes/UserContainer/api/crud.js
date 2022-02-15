import { apiClient } from "../../../config/axios"

export const getUserById = async (id) => {
  return apiClient.get(`/users/${id}`)
}

export const updateUserById = async (id, data) => {
  return apiClient.put(`/users/${id}`, data)
}

export const addAvatarByUserId = async (id, data) => {
  return apiClient.post(`/users/${id}/avatar`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}