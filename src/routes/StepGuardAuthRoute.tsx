import { Navigate, Outlet } from "react-router"

interface StepGuardAuthRouteProps {
	requiredCondition: boolean
	redirectPath: string
}

export const StepGuardAuthRoute = ({requiredCondition, redirectPath}: StepGuardAuthRouteProps) => {

	if (!requiredCondition) return <Navigate to={redirectPath} replace />

	return <Outlet />
}
