import { ListOfBooks } from './ListOfBooks'
import { ReadingList } from './ReadingList'

export function ListContainer () {
  return (
    <div className='container'>
      <ListOfBooks />
      <ReadingList />
    </div>
  )
}
