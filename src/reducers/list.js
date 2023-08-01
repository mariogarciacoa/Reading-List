import { mappedBooks } from '../constants/mappedBooks'

export const initialStage = JSON.parse(window.localStorage.getItem('listOfBooks')) || {
  list: mappedBooks,
  readingList: []
}

export const listReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_READING_LIST':
    {
      const book = state.list.find(item => item.id === payload)
      const newList = state.list.filter(item => item !== book)
      const newReadingList = [...state.readingList, book]
      const newState = { list: newList, readingList: newReadingList }
      window.localStorage.setItem('listOfBooks', JSON.stringify(newState))
      return newState
    }
    case 'REMOVE_READING_LIST':
    {
      const book = state.readingList.find(item => item.id === payload)
      const newList = [...state.list, book]
      const newReadingList = state.readingList.filter(item => item !== book)
      const newState = { list: newList, readingList: newReadingList }
      window.localStorage.setItem('listOfBooks', JSON.stringify(newState))
      return newState
    }
    case 'CLEAN_READING_LIST':
      window.localStorage.setItem('listOfBooks', JSON.stringify({ list: mappedBooks, readingList: [] }))
      return { list: mappedBooks, readingList: [] }

    case 'UPDATE_LIST':
      return payload
  }
  return state
}
