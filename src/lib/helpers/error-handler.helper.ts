import { AxiosError } from "axios"

export const errorHandler = (err: unknown): string => {
    let errorMessage = "Anunexpected error occurred!"

    if (err instanceof Error) {
      errorMessage = err.message
    }

    if (err instanceof AxiosError) {
      errorMessage = err.response?.data.errors
    }

    return errorMessage
}
