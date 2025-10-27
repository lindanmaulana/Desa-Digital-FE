import { useSession } from "@/hooks/useSession"
import { Navigate, Outlet } from "react-router"

export const DashboardGuard = () => {
	const session = useSession()

	if (!session) return <Navigate to={"/auth/signin"} replace />

	if (session) {
		if ( !session.is_active ) return <Navigate to={`/auth/verify-otp?${session.email}`} replace />
	}

	return <Outlet />
}
