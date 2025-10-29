import { useSearchParams } from "react-router"

export const useGetUsermail = () => {
  const [searchParams] = useSearchParams()

  const email = searchParams.get("account")

	if (email) {
    const emailUser = email.toString()

		return emailUser
	}

	return null
}
