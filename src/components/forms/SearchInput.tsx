import type { InputHTMLAttributes } from 'react'
import { Search } from 'lucide-react'
import { Input } from './Input'

export function SearchInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Input
      leftIcon={<Search aria-hidden="true" className="h-4 w-4" />}
      placeholder="Search"
      type="search"
      {...props}
    />
  )
}
