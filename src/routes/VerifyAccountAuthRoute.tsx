import { Navigate, Outlet, useLocation } from "react-router"

export const VerifyAccountAuthRoute = () => {
	const location = useLocation()

	if (!location.search) return <Navigate to={"/auth/signin"} replace />

	return <Outlet />
}
