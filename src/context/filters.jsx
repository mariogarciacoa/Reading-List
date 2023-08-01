import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export function FiltersProvider ({ children }) {
  const [filter, setFilter] = useState(JSON.parse(window.localStorage.getItem('filter')) || {
    selected: 'All',
    minPages: '0',
    search: '',
    status: false
  })

  return (
    <FiltersContext.Provider
      value={
        {
          filter,
          setFilter
        }
      }
    >
      {children}
    </FiltersContext.Provider>
  )
}
