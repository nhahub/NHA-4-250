import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RouteLoading } from '@/pages/shared'
import NotFoundPage from '@/pages/shared/NotFoundPage'
import { GuestRoute } from './GuestRoute'
import { ProtectedRoute } from './ProtectedRoute'
import { appRoutes } from './routeConfig'
import type { AppRoute } from './types'

function renderRoute(route: AppRoute) {
  const Page = route.element
  const element =
    route.access === 'guest' ? (
      <GuestRoute>
        <Page />
      </GuestRoute>
    ) : route.access === 'protected' ? (
      <ProtectedRoute roles={route.roles}>
        <Page />
      </ProtectedRoute>
    ) : (
      <Page />
    )

  return <Route element={element} key={route.path} path={route.path} />
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteLoading />}>
        <Routes>
          {appRoutes.map(renderRoute)}
          <Route element={<NotFoundPage />} path="*" />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
