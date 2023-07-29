import { useContext, useEffect } from 'react'
import { ListContext } from '../context/list'

export function useBooks () {
  const { list, readingList, addReadingList, removeReadingList, cleanReadingList, updateList } = useContext(ListContext)

  if (!list && !readingList && !addReadingList && !removeReadingList && !cleanReadingList && !updateList) {
    throw new Error('useBooks must be used within a ContextProvider')
  }

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'listOfBooks') {
        updateList(JSON.parse(e.newValue))
      }
    }

    // Agregar el evento al montar el componente
    window.addEventListener('storage', handleStorageChange)

    // Remover el evento al desmontar el componente
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return { list, readingList, addReadingList, removeReadingList, cleanReadingList, updateList }
}
