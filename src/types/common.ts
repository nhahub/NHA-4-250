export type ApiStatus = 'idle' | 'loading' | 'success' | 'error'

export type SelectOption<TValue extends string = string> = {
  label: string
  value: TValue
}

export type PaginatedResult<TItem> = {
  items: TItem[]
  page: number
  pageSize: number
  total: number
}
