import { useGlobalContext } from '../../context/context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import React from 'react'

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const { movies, isLoading } = useGlobalContext()

  if (isLoading) {
    return <div className="loading"></div>
  }

  return (
    <Wrapper>
      <section className="movies">
        {movies.map(movie => {
          const { imdbID: id, Poster: poster, Title: title, Year: year } = movie
          return (
            <Link to={`/movies/${id}`} key={id} className="movie">
              <article>
                <img src={poster === 'N/A' ? url : poster} alt={title} />
                <div className="movie-info">
                  <h4 className="title">{title}</h4>
                  <p>{year}</p>
                </div>
              </article>
            </Link>
          )
        })}
      </section>
    </Wrapper>
  )
}

export default Movies

const Wrapper = styled.div`
  .movies {
    width: 90vw;
    max-width: var(--max-width);
    display: grid;
    gap: 2rem;
    margin: 0 auto;
    padding-bottom: 5rem;
    padding-top: 3rem;
  }
  .movie {
    position: relative;
    overflow: hidden;
  }
  .movie img {
    width: 100%;
    height: 400px;
    display: block;
    object-fit: cover;
  }
  .movie-info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.5rem 1rem;
    background: rgba(0, 0, 0, 0.6);
    transform: translateY(100%);
    transition: var(--transition);
  }
  .movie:hover .movie-info {
    transform: translateY(0);
  }
  .movie-info h4 {
    color: var(--clr-white);
    margin-bottom: 0.25rem;
  }
  .movie-info p {
    margin-bottom: 0;
    color: var(--clr-white);
  }
  @media screen and (min-width: 576px) {
    .movies {
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    }
  }
`
