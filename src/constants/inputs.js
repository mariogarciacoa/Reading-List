import { mappedBooks } from './mappedBooks'

// obtener los valores para los filtros

const max = Math.max(...mappedBooks.map(item => item.pages))
const allGenre = ['All', ...new Set(mappedBooks.map(item => item.genre))]

export { max, allGenre }
