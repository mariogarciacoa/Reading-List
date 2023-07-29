import { library } from '../../books.json'

// obtener los valores para los filtros

const max = Math.max(...library.map(item => item.book.pages))
const allGenre = ['All', ...new Set(library.map(item => item.book.genre))]

export { max, allGenre }
