import { ErrorBoundary, ToastProvider } from '@/components'
import { AuthProvider } from '@/context'
import { AppRouter } from '@/routes'

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <AppRouter />
        <ToastProvider />
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
