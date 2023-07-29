import './App.css'
import { Header } from './components/Header'
import { ListContainer } from './components/ListContainer'
import { ListProvider } from './context/list'

function App () {
  return (
    <ListProvider>
      <Header />
      <ListContainer />
    </ListProvider>
  )
}

export default App
