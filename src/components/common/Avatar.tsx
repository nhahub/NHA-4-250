import type { HTMLAttributes } from 'react'
import { UserRound } from 'lucide-react'
import { cn } from '@/utils'

type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  name: string
  src?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-14 w-14 text-base',
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part.at(0))
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function Avatar({ className, name, size = 'md', src, ...props }: AvatarProps) {
  return (
    <div
      aria-label={name}
      className={cn(
        'inline-grid shrink-0 place-items-center overflow-hidden rounded-full bg-blue-50 font-semibold text-blue-700 ring-1 ring-blue-100',
        sizes[size],
        className,
      )}
      role="img"
      {...props}
    >
      {src ? (
        <img alt="" className="h-full w-full object-cover" src={src} />
      ) : name ? (
        getInitials(name)
      ) : (
        <UserRound aria-hidden="true" className="h-5 w-5" />
      )}
    </div>
  )
}
