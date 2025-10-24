import { useLocation } from "react-router"

export const useGetUsermail = () => {
	const location = useLocation()

	if (location.search) {
		const params = new URLSearchParams(location.search)

		let emailUser: string = params && decodeURIComponent(params.toString())

		if (emailUser.endsWith("=")) emailUser = emailUser.slice(0, -1)

		return emailUser
	}

	return null
}
