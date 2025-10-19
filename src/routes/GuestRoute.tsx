import { Navigate, Outlet, useLocation } from 'react-router'

const GuestRoute = () => {
  const location = useLocation()
  console.log({location})

  if (location.pathname === "/") return <Navigate to={"/auth/signin"} replace />

  return <Outlet />
}

export default GuestRoute
