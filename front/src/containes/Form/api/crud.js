import { apiClient } from "../../../config/axios"

export const getLogins = async (id) => {
  return apiClient.get(`/logins/${id}`)
}