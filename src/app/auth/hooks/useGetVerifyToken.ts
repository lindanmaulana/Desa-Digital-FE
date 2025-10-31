import { useSearchParams } from "react-router"

export const useGetVerifyToken = () => {
  const [searchParams] = useSearchParams()

  const token = searchParams.get("token")

	if (token) {
    const tokenUser = token.toString()

		return tokenUser
	}

	return null
}
