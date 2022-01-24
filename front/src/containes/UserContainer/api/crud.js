import { apiClient } from "../../../config/axios"

export const getUserById = async (id) => {
  return apiClient.get(`/users/${id}`)
}
