import { Component, type ErrorInfo, type ReactNode } from 'react'
import { AlertTriangle } from 'lucide-react'
import { Button, Card } from '@/components/common'

type ErrorBoundaryProps = {
  children: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Application error boundary caught an error', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="grid min-h-screen place-items-center bg-slate-50 p-6">
          <Card className="max-w-lg p-6 text-center" glass>
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-red-50 text-red-600">
              <AlertTriangle aria-hidden="true" className="h-6 w-6" />
            </div>
            <h1 className="mt-4 text-2xl font-semibold text-slate-950">
              Something went wrong
            </h1>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Please refresh the page. If the issue continues, contact clinic support.
            </p>
            <Button className="mt-5" onClick={() => window.location.reload()}>
              Refresh page
            </Button>
          </Card>
        </main>
      )
    }

    return this.props.children
  }
}
