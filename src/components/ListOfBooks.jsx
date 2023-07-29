import { useBooks } from '../hooks/useBooks'
import { useFilters } from '../hooks/useFilters'

export function ListOfBooks () {
  const { filterBooks } = useFilters()
  const { list, addReadingList } = useBooks()

  const filteredBooks = filterBooks(list)
  const hasBooksInList = filteredBooks?.length > 0
  const booksAvailable = `${filteredBooks.length} Libros disponibles`

  return (
    <div>
      <h2>{booksAvailable}</h2>
      <section className='library-list'>
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
                    <li key={ISBN} className='card-item' onClick={() => addReadingList(ISBN)}>
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
      </section>
    </div>
  )
}
