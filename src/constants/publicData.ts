import {
  Activity,
  Baby,
  Bone,
  Brain,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from 'lucide-react'

export const services = [
  {
    title: 'Primary care',
    description:
      'Routine checkups, prevention plans, chronic condition follow-up, and coordinated referrals.',
    icon: Stethoscope,
  },
  {
    title: 'Digital appointments',
    description:
      'Book, reschedule, cancel, and receive visit reminders through one connected experience.',
    icon: Activity,
  },
  {
    title: 'Medical records',
    description:
      'Secure access to visit summaries, prescriptions, lab reports, and clinical notes.',
    icon: ShieldCheck,
  },
  {
    title: 'Specialist care',
    description:
      'Find the right specialist by department, availability, language, and patient rating.',
    icon: HeartPulse,
  },
] as const

export const departments = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    description: 'Heart health, blood pressure, rhythm concerns, and preventive cardiac care.',
    icon: HeartPulse,
    doctors: 12,
  },
  {
    id: 'neurology',
    name: 'Neurology',
    description: 'Headache, seizure, nerve, memory, sleep, and movement disorder care.',
    icon: Brain,
    doctors: 8,
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    description: 'Bone, joint, spine, sports injury, and mobility-focused treatment plans.',
    icon: Bone,
    doctors: 10,
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    description: 'Child wellness, vaccinations, growth tracking, and family-centered care.',
    icon: Baby,
    doctors: 9,
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    description: 'Skin, hair, allergy, acne, and cosmetic dermatology consultations.',
    icon: Sparkles,
    doctors: 6,
  },
] as const

export const doctors = [
  {
    id: 'amina-hassan',
    name: 'Dr. Amina Hassan',
    specialty: 'Cardiologist',
    department: 'Cardiology',
    rating: 4.9,
    reviews: 184,
    experience: '14 years',
    location: 'Main Clinic',
    nextAvailable: 'Today, 4:30 PM',
    languages: ['English', 'Arabic'],
    bio: 'Focused on preventive cardiac care, hypertension management, and patient-friendly treatment planning.',
  },
  {
    id: 'omar-salem',
    name: 'Dr. Omar Salem',
    specialty: 'Neurologist',
    department: 'Neurology',
    rating: 4.8,
    reviews: 151,
    experience: '11 years',
    location: 'North Wing',
    nextAvailable: 'Tomorrow, 11:00 AM',
    languages: ['English', 'Arabic', 'French'],
    bio: 'Specializes in headache disorders, neuropathy, sleep concerns, and long-term neurological follow-up.',
  },
  {
    id: 'laila-mansour',
    name: 'Dr. Laila Mansour',
    specialty: 'Pediatrician',
    department: 'Pediatrics',
    rating: 4.9,
    reviews: 203,
    experience: '12 years',
    location: 'Family Center',
    nextAvailable: 'Today, 6:00 PM',
    languages: ['English', 'Arabic'],
    bio: 'Provides calm, family-centered care for newborns, children, and adolescents.',
  },
  {
    id: 'youssef-karim',
    name: 'Dr. Youssef Karim',
    specialty: 'Orthopedic Surgeon',
    department: 'Orthopedics',
    rating: 4.7,
    reviews: 129,
    experience: '16 years',
    location: 'Sports Medicine Unit',
    nextAvailable: 'Wed, 1:00 PM',
    languages: ['English', 'Arabic'],
    bio: 'Treats joint pain, sports injuries, back concerns, and recovery plans after orthopedic procedures.',
  },
] as const

export const faqs = [
  {
    question: 'Can I reschedule an appointment online?',
    answer:
      'Yes. Patients can reschedule upcoming appointments from appointment history when the clinic policy allows changes.',
  },
  {
    question: 'Who can access my medical records?',
    answer:
      'Only authorized patients, assigned doctors, and approved clinic administrators can access records based on role permissions.',
  },
  {
    question: 'How do I choose a doctor?',
    answer:
      'Use department filters, availability, doctor profiles, languages, and ratings to choose the right clinician.',
  },
  {
    question: 'Do doctors manage their own schedules?',
    answer:
      'Doctors can manage availability, working hours, breaks, and visit capacity from the doctor dashboard.',
  },
] as const
