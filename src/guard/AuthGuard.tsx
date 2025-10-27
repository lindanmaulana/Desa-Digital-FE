import { Navigate, Outlet } from 'react-router';

export const AuthGuard = () => {
	const sessionUser = sessionStorage.getItem("session-user")

	if (sessionUser) return <Navigate to={"/dashboard"} replace />

	return <Outlet />;
};
