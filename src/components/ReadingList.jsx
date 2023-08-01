import { useBooks } from '../hooks/useBooks'
import { useFilters } from '../hooks/useFilters'

export function ReadingList () {
  const { filterBooks } = useFilters()
  const { readingList, removeReadingList, cleanReadingList } = useBooks()

  const filteredBooks = filterBooks(readingList)

  const hasBooksInList = filteredBooks?.length > 0
  const booksAvailable = `${filteredBooks.length} en la lista de lectura`

  return (
    <div className='reading-list'>
      <h2>{booksAvailable}</h2>
      <ul className='card-list'>
        {hasBooksInList
          ? (
              filteredBooks.map((list) => {
                const {
                  cover,
                  id,
                  title,
                  author
                } = list

                return (
                  <li key={id} className='card-item' onClick={() => removeReadingList(id)}>
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
      {hasBooksInList && <button className='card-item-btn' onClick={cleanReadingList}>Vaciar Lista</button>}
    </div>
  )
}
