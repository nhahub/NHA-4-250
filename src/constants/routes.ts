export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  departments: '/departments',
  doctors: '/doctors',
  doctorDetails: '/doctors/:doctorId',
  contact: '/contact',
  faq: '/faq',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  booking: '/booking',
  bookingSuccess: '/booking/success',
  appointmentHistory: '/appointments',
  medicalRecords: '/medical-records',
  notifications: '/notifications',
  patientDashboard: '/patient/dashboard',
  doctorDashboard: '/doctor/dashboard',
  doctorSchedule: '/doctor/schedule',
  adminDashboard: '/admin/dashboard',
  statistics: '/admin/statistics',
  profile: '/profile',
  settings: '/settings',
} as const

export const routeToDoctorDetails = (doctorId: string) =>
  `/doctors/${doctorId}` as const
