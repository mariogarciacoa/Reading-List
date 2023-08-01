import { useBooks } from '../hooks/useBooks'
import { useFilters } from '../hooks/useFilters'
import { ListOfBooks } from './ListOfBooks'
import { ReadingList } from './ReadingList'

export function ListContainer () {
  const { filterBooks } = useFilters()
  const { list, readingList } = useBooks()

  const hasBooksInList = filterBooks(list)?.length > 0

  const hasBooksInReadingList = filterBooks(readingList)?.length > 0

  return (
    <section className='container'>
      {hasBooksInList && <ListOfBooks />}
      {hasBooksInReadingList && <ReadingList />}
    </section>
  )
}
