import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/context'
import logo from '../../assets/images/videos.svg'
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext()

  return (
    <Wrapper>
      <div className="container">
        <img src={logo} alt="videos" />
        <form className="search-form" onSubmit={e => e.preventDefault()}>
          <h2>Movie Database</h2>
          <input
            type="text"
            className="form-input"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {error.show && <div className="error">{error.msg}</div>}
        </form>
      </div>
    </Wrapper>
  )
}

export default SearchForm

const Wrapper = styled.div`
  .container {
    text-align: center;
  }
  img {
    max-height: 15rem;
  }
  .search-form {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
  .form-input {
    width: 100%;
    border: transparent;
    max-width: 600px;
    background: var(--clr-white);
    padding: 1rem;
    font-size: 1rem;
    border-radius: var(--radius);
    color: var(--clr-grey-3);
    letter-spacing: var(--spacing);
    margin-top: 1rem;
  }
  .error {
    color: var(--clr-red-dark);
    text-transform: capitalize;
    padding-top: 0.5rem;
    letter-spacing: var(--spacing);
  }
`
