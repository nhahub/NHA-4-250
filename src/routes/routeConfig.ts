import { lazy } from 'react'
import { ROUTES, USER_ROLES } from '@/constants'
import type { AppRoute } from './types'

export const publicRoutes: AppRoute[] = [
  {
    path: ROUTES.home,
    title: 'Home',
    element: lazy(() => import('@/pages/public/HomePage')),
  },
  {
    path: ROUTES.about,
    title: 'About',
    element: lazy(() => import('@/pages/public/AboutPage')),
  },
  {
    path: ROUTES.services,
    title: 'Services',
    element: lazy(() => import('@/pages/public/ServicesPage')),
  },
  {
    path: ROUTES.departments,
    title: 'Departments',
    element: lazy(() => import('@/pages/public/DepartmentsPage')),
  },
  {
    path: ROUTES.doctors,
    title: 'Doctors',
    element: lazy(() => import('@/pages/public/DoctorsPage')),
  },
  {
    path: ROUTES.doctorDetails,
    title: 'Doctor Details',
    element: lazy(() => import('@/pages/public/DoctorDetailsPage')),
  },
  {
    path: ROUTES.contact,
    title: 'Contact',
    element: lazy(() => import('@/pages/public/ContactPage')),
  },
  {
    path: ROUTES.faq,
    title: 'FAQ',
    element: lazy(() => import('@/pages/public/FaqPage')),
  },
]

export const guestRoutes: AppRoute[] = [
  {
    path: ROUTES.login,
    title: 'Login',
    access: 'guest',
    element: lazy(() => import('@/pages/auth/LoginPage')),
  },
  {
    path: ROUTES.register,
    title: 'Register',
    access: 'guest',
    element: lazy(() => import('@/pages/auth/RegisterPage')),
  },
  {
    path: ROUTES.forgotPassword,
    title: 'Forgot Password',
    access: 'guest',
    element: lazy(() => import('@/pages/auth/ForgotPasswordPage')),
  },
]

export const protectedRoutes: AppRoute[] = [
  {
    path: ROUTES.booking,
    title: 'Booking',
    access: 'protected',
    roles: [USER_ROLES.patient],
    element: lazy(() => import('@/pages/booking/BookingPage')),
  },
  {
    path: ROUTES.bookingSuccess,
    title: 'Booking Success',
    access: 'protected',
    roles: [USER_ROLES.patient],
    element: lazy(() => import('@/pages/booking/BookingSuccessPage')),
  },
  {
    path: ROUTES.patientDashboard,
    title: 'Patient Dashboard',
    access: 'protected',
    roles: [USER_ROLES.patient],
    element: lazy(() => import('@/pages/patient/PatientDashboardPage')),
  },
  {
    path: ROUTES.doctorDashboard,
    title: 'Doctor Dashboard',
    access: 'protected',
    roles: [USER_ROLES.doctor],
    element: lazy(() => import('@/pages/doctor/DoctorDashboardPage')),
  },
  {
    path: ROUTES.doctorSchedule,
    title: 'Doctor Schedule',
    access: 'protected',
    roles: [USER_ROLES.doctor],
    element: lazy(() => import('@/pages/doctor/DoctorSchedulePage')),
  },
  {
    path: ROUTES.adminDashboard,
    title: 'Admin Dashboard',
    access: 'protected',
    roles: [USER_ROLES.admin],
    element: lazy(() => import('@/pages/admin/AdminDashboardPage')),
  },
  {
    path: ROUTES.statistics,
    title: 'Statistics',
    access: 'protected',
    roles: [USER_ROLES.admin],
    element: lazy(() => import('@/pages/admin/StatisticsPage')),
  },
  {
    path: ROUTES.appointmentHistory,
    title: 'Appointment History',
    access: 'protected',
    roles: [USER_ROLES.patient, USER_ROLES.doctor, USER_ROLES.admin],
    element: lazy(() => import('@/pages/shared/AppointmentHistoryPage')),
  },
  {
    path: ROUTES.medicalRecords,
    title: 'Medical Records',
    access: 'protected',
    roles: [USER_ROLES.patient, USER_ROLES.doctor, USER_ROLES.admin],
    element: lazy(() => import('@/pages/shared/MedicalRecordsPage')),
  },
  {
    path: ROUTES.notifications,
    title: 'Notifications',
    access: 'protected',
    roles: [USER_ROLES.patient, USER_ROLES.doctor, USER_ROLES.admin],
    element: lazy(() => import('@/pages/shared/NotificationsPage')),
  },
  {
    path: ROUTES.profile,
    title: 'Profile',
    access: 'protected',
    roles: [USER_ROLES.patient, USER_ROLES.doctor, USER_ROLES.admin],
    element: lazy(() => import('@/pages/shared/ProfilePage')),
  },
  {
    path: ROUTES.settings,
    title: 'Settings',
    access: 'protected',
    roles: [USER_ROLES.patient, USER_ROLES.doctor, USER_ROLES.admin],
    element: lazy(() => import('@/pages/shared/SettingsPage')),
  },
]

export const appRoutes = [...publicRoutes, ...guestRoutes, ...protectedRoutes]
