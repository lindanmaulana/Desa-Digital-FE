import { Navigate, Outlet, useLocation } from 'react-router'

export const GuestRoute = () => {
  const location = useLocation()
  console.log({location})

  if (location.pathname === "/") return <Navigate to={"/auth/signin"} replace />

  return <Outlet />
}
