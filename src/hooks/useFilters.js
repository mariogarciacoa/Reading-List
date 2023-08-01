import { useContext, useEffect } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters () {
  const { filter, setFilter } = useContext(FiltersContext)

  const filterBooks = (list) => {
    return list.filter(item => {
      return (

        (item.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(filter.search.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()) && item.pages >= filter.minPages) &&
          (
            filter.selected === 'All' ||
            item.genre === filter.selected
          )
      )
    })
  }

  const handleRange = e => {
    const value = e.target.value
    const newFilter = { ...filter, minPages: value, status: true }
    window.localStorage.setItem('filter', JSON.stringify(newFilter))
    setFilter(newFilter)
  }

  const handleSelect = e => {
    const value = e.target.value
    const newFilter = { ...filter, selected: value, status: true }
    window.localStorage.setItem('filter', JSON.stringify(newFilter))
    setFilter(newFilter)
  }

  const resetFilters = () => {
    const newFilter = { ...filter, minPages: 0, selected: 'All', status: false }
    window.localStorage.setItem('filter', JSON.stringify(newFilter))
    setFilter(newFilter)
  }

  const handleSearch = (e) => {
    if (e.target.value === ' ') return

    const newFilter = { ...filter, search: e.target.value }
    window.localStorage.setItem('filter', JSON.stringify(newFilter))
    setFilter(newFilter)
  }

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'filter') {
        setFilter(JSON.parse(e.newValue))
      }
    }

    // Agregar el evento al montar el componente
    window.addEventListener('storage', handleStorageChange)

    // Remover el evento al desmontar el componente
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return { filter, setFilter, filterBooks, resetFilters, handleRange, handleSelect, handleSearch }
}
