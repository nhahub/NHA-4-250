import type { ComponentType, LazyExoticComponent } from 'react'
import type { UserRole } from '@/types'

export type RouteAccess = 'public' | 'guest' | 'protected'

export type AppRoute = {
  path: string
  title: string
  element: LazyExoticComponent<ComponentType>
  access?: RouteAccess
  roles?: UserRole[]
}
