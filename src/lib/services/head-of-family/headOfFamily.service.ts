import { api } from "@/lib/axios-instance"
import { errorHandler } from "@/lib/helpers"
import type { CreateHeadOfFamilyRequest } from "@/types/head-of-family/head-of-family.types"

export const headOfFamilyService = {
  getAll: async (params: string) => {
    try {
      const response = await api.get(`/admin/head-of-family?${params}`)

      return response.data
    } catch (err) {
      const errorMessage = errorHandler(err)
      throw new Error(errorMessage)
    }
  },

  create: async (req: CreateHeadOfFamilyRequest) => {
    try {
      const response = await api.post('/admin/users/head-of-family/register', req)

      return response.data
    } catch (err) {
      const errorMessage = errorHandler(err)
      throw new Error(errorMessage)
    }
  }
}
