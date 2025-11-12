import { api } from "@/lib/axios-instance"
import { errorHandler } from "@/lib/helpers"

export const headOfFamilyService = {
  getAll: async (params: string) => {
    try {
      const response = await api.get(`/admin/head-of-family?${params}`)

      return response.data
    } catch (err) {
      const errorMessage = errorHandler(err)

      throw new Error(errorMessage)
    }
  }
}
