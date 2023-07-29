import { useId } from 'react'
import { allGenre, max } from '../constants/inputs'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filter, handleRange, handleSelect, resetFilters } = useFilters()

  const minPagesId = useId()
  const genreId = useId()

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPagesId}>Filtrar por Paginas</label>
        <input type='range' name='minPages' id={minPagesId} min='0' max={max} onChange={handleRange} value={filter.minPages} />
        <span>{filter.minPages}</span>
      </div>
      <div>
        <label htmlFor={genreId}>Filtrar por genero</label>
        <select name='genre' id={genreId} onChange={handleSelect} value={filter.selected}>
          {
              allGenre.map(genre => (
                <option value={genre} key={genre}>{genre}</option>
              ))
            }
        </select>
      </div>
      {filter.status && <button onClick={resetFilters}>Limpiar Filtros</button>}
    </section>
  )
}
