import { Navigate } from 'react-router-dom'
import { useAuth } from '@/context'

type GuestRouteProps = {
  children: React.ReactNode
}

export function GuestRoute({ children }: GuestRouteProps) {
  const { isAuthenticated, roleHome } = useAuth()

  if (isAuthenticated && roleHome) {
    return <Navigate replace to={roleHome} />
  }

  return children
}
