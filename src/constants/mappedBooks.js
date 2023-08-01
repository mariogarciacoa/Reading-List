import { library } from '../../books.json'

export const mappedBooks = library?.map(item => {
  const { ISBN, cover, title, pages, genre, author: { name } } = item.book

  return ({
    id: ISBN,
    cover,
    title,
    author: name,
    pages,
    genre
  })
})
