import { useBooks } from '../hooks/useBooks'
import { useFilters } from '../hooks/useFilters'

export function ListOfBooks () {
  const { filterBooks } = useFilters()
  const { list, addReadingList } = useBooks()

  const filteredBooks = filterBooks(list)
  const hasBooksInList = filteredBooks?.length > 0
  const booksAvailable = `${filteredBooks.length} Libros disponibles`

  return (
    <div className='library-list'>
      <h2>{booksAvailable}</h2>
      <ul className='card-list'>
        {hasBooksInList
          ? (
              filteredBooks.map(list => {
                const {
                  cover,
                  id,
                  title,
                  author
                } = list

                return (
                  <li key={id} className='card-item' onClick={() => addReadingList(id)}>
                    <img src={cover} alt='Portada del Libro' className='card-item-cover' />
                    <div className='card-item-info'>
                      <p className='title'>{title}</p>
                      <p className='author'>{author}</p>
                    </div>
                  </li>
                )
              })
            )
          : (
            <div>
              <span role='img' aria-label=''>
                No hay Libros😢
              </span>
            </div>
            )}
      </ul>
    </div>
  )
}
