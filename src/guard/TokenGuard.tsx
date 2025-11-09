import { Navigate, Outlet, useSearchParams } from 'react-router';

export const TokenGuard = () => {
	const [searchParams] = useSearchParams();

	if (!searchParams.get('token')) return <Navigate to={'/auth/signin'} replace />;

	return <Outlet />;
};
