import type { InputHTMLAttributes } from 'react'
import { CalendarDays } from 'lucide-react'
import { Input } from './Input'

type CalendarPickerProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

export function CalendarPicker(props: CalendarPickerProps) {
  return (
    <Input
      leftIcon={<CalendarDays aria-hidden="true" className="h-4 w-4" />}
      type="date"
      {...props}
    />
  )
}
