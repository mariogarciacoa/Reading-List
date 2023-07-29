import { useBooks } from '../hooks/useBooks'
import { useFilters } from '../hooks/useFilters'

export function ReadingList () {
  const { filterBooks } = useFilters()
  const { readingList, removeReadingList, cleanReadingList } = useBooks()

  const filteredBooks = filterBooks(readingList)

  const hasBooksInList = filteredBooks?.length > 0
  const booksAvailable = `${filteredBooks.length} en la lista de lectura`

  return (
    <div>
      <h2>{booksAvailable}</h2>
      <section className='reading-list'>
        <ul className='card-list'>
          {hasBooksInList
            ? (
                filteredBooks.map((list) => {
                  const {
                    cover,
                    ISBN,
                    title,
                    author: { name: authorName }
                  } = list.book

                  return (
                    <li key={ISBN} className='card-item' onClick={() => removeReadingList(ISBN)}>
                      <img src={cover} alt='Portada del Libro' className='card-item-cover' />
                      <div className='card-item-info'>
                        <p className='title'>{title}</p>
                        <p className='author'>{authorName}</p>
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
        {hasBooksInList && <button onClick={cleanReadingList}>Vaciar Lista</button>}
      </section>
    </div>
  )
}
