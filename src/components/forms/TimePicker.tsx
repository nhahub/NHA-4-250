import type { InputHTMLAttributes } from 'react'
import { Clock } from 'lucide-react'
import { Input } from './Input'

type TimePickerProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

export function TimePicker(props: TimePickerProps) {
  return (
    <Input
      leftIcon={<Clock aria-hidden="true" className="h-4 w-4" />}
      type="time"
      {...props}
    />
  )
}
