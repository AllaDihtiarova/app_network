import { apiClient } from "../../../config/axios"

export const getLogins = async (id) => {
  return apiClient.get(`/logins/${id}`)
}

export const updateLoginById = async (id, data) => {
  return apiClient.put(`/logins/${id}`, data)
}