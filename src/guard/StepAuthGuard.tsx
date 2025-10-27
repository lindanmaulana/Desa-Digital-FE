import { Navigate, Outlet } from "react-router"

interface StepAuthGuardProps {
	requiredCondition: boolean
	redirectPath: string
}

export const StepAuthGuard = ({requiredCondition, redirectPath}: StepAuthGuardProps) => {

	if (!requiredCondition) return <Navigate to={redirectPath} replace />

	return <Outlet />
}
