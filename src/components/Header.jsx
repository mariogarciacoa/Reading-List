import { useBooks } from '../hooks/useBooks'
import { useFilters } from '../hooks/useFilters'
import { Filters } from './Filters'

export function Header () {
  const { list, readingList } = useBooks()
  const { filter, filterBooks } = useFilters()

  const foundBooks = filterBooks(list).length + filterBooks(readingList).length

  return (
    <section className='header'>
      <h1 className='title-page'>BOOKS.</h1>
      {/* <h2 className='subtitle-page'>List Of Books</h2> */}
      <Filters />
      {filter.status && <h2>Resultados: {foundBooks}</h2>}
    </section>
  )
}
