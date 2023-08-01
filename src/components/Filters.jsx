import { useId } from 'react'
import { allGenre, max } from '../constants/inputs'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filter, handleRange, handleSelect, resetFilters, handleSearch } = useFilters()

  const minPagesId = useId()
  const genreId = useId()

  return (
    <section className='filters'>
      <input
        type='text'
        name='search'
        placeholder='Buscar libro'
        className='search-input'
        autoComplete='on'
        onChange={handleSearch}
        value={filter.search}
      />
      <div className='filters-pg-ctg'>
        <div>
          <label htmlFor={minPagesId}>Filtrar por Paginas</label>
          <input type='range' name='minPages' id={minPagesId} min='0' max={max} onChange={handleRange} value={filter.minPages} step='50' />
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
        {filter.status && <button className='filter-btn-reset' onClick={resetFilters}>Limpiar Filtros</button>}
      </div>
    </section>
  )
}
