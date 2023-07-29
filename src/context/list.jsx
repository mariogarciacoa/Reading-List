import { createContext, useReducer } from 'react'
import { initialStage, listReducer } from '../reducers/list'

export const ListContext = createContext()

export function ListProvider ({ children }) {
  const [state, dispatch] = useReducer(listReducer, initialStage)

  const addReadingList = (id) => {
    dispatch({ type: 'ADD_READING_LIST', payload: id })
  }

  const removeReadingList = (id) => {
    dispatch({
      type: 'REMOVE_READING_LIST',
      payload: id
    })
  }

  const cleanReadingList = () => {
    dispatch({ type: 'CLEAN_READING_LIST' })
  }

  const updateList = (list) => {
    console.log('update list', list)
    dispatch({ type: 'UPDATE_LIST', payload: list })
  }

  return (
    <ListContext.Provider value={{ state, list: state.list, readingList: state.readingList, addReadingList, removeReadingList, cleanReadingList, updateList }}>
      {children}
    </ListContext.Provider>
  )
}
