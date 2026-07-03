import { Toaster } from 'react-hot-toast'

export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        className: 'text-sm',
        duration: 3500,
        style: {
          border: '1px solid #E2E8F0',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(15, 23, 42, 0.12)',
          color: '#0F172A',
        },
      }}
    />
  )
}
