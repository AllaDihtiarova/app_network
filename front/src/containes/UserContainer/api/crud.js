import { apiClient } from "../../../config/axios"

export const getUserById = async (id) => {
  return apiClient.get(`/users/${id}`)
}

export const updateUserById = async (id, data) => {
  return apiClient.put(`/users/${id}`, data)
}