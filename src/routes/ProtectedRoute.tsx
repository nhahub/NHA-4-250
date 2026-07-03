import { Navigate, useLocation } from 'react-router-dom'
import { ROUTES } from '@/constants'
import { useAuth } from '@/context'
import { RouteLoading } from '@/pages/shared'
import type { UserRole } from '@/types'

type ProtectedRouteProps = {
  children: React.ReactNode
  roles?: UserRole[]
}

export function ProtectedRoute({ children, roles }: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate replace state={{ from: location }} to={ROUTES.login} />
  }

  if (roles?.length && user && !roles.includes(user.role)) {
    return <Navigate replace to={ROUTES.home} />
  }

  return children
}
