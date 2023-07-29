import { library } from '../../books.json'

export const initialStage = JSON.parse(window.localStorage.getItem('listOfBooks')) || {
  list: library,
  readingList: []
}

export const listReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_READING_LIST':
    {
      const book = state.list.find(item => item.book.ISBN === payload)
      const newList = state.list.filter(item => item !== book)
      const newReadingList = [...state.readingList, book]
      const newState = { list: newList, readingList: newReadingList }
      window.localStorage.setItem('listOfBooks', JSON.stringify(newState))
      return newState
    }
    case 'REMOVE_READING_LIST':
    {
      const book = state.readingList.find(item => item.book.ISBN === payload)
      const newList = [...state.list, book]
      const newReadingList = state.readingList.filter(item => item !== book)
      const newState = { list: newList, readingList: newReadingList }
      window.localStorage.setItem('listOfBooks', JSON.stringify(newState))
      return newState
    }
    case 'CLEAN_READING_LIST':
      window.localStorage.setItem('listOfBooks', JSON.stringify({ list: library, readingList: [] }))
      return { list: library, readingList: [] }

    case 'UPDATE_LIST':
      return payload
  }
  return state
}
