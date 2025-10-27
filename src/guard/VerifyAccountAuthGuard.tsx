import { Navigate, Outlet, useLocation } from "react-router"

export const VerifyAccountAuthGuard = () => {
	const location = useLocation()

	if (!location.search || !location.search.endsWith("@gmail.com")) return <Navigate to={"/auth/signin"} replace />

	return <Outlet />
}
