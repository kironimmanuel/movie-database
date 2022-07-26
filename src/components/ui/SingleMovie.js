import React from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import useFetch from '../../hooks/useFetch'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const SingleMovie = () => {
  const { id } = useParams()
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`)

  if (isLoading) {
    return <div className="loading"></div>
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    )
  }

  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie

  return (
    <Wrapper>
      <section className="single-movie">
        <img src={poster === 'N/A' ? url : poster} alt={title} />
        <div className="single-movie-info">
          <h2>{title}</h2>
          <p>{plot}</p>
          <h4>{year}</h4>
          <Link to="/" className="btn">
            back to movies
          </Link>
        </div>
      </section>
    </Wrapper>
  )
}

export default SingleMovie

const Wrapper = styled.div`
  .single-movie {
    width: 90vw;
    max-width: var(--max-width);
    margin: 4rem auto;
    display: grid;
    gap: 2rem;
  }
  .single-movie img {
    width: 100%;
    display: block;
  }
  .single-movie p {
    max-width: 35em;
    font-size: 1.2rem;
    margin-top: 1.5rem;
    line-height: 1.8;
    color: var(--clr-grey-10);
  }

  @media screen and (min-width: 992px) {
    .single-movie {
      grid-template-columns: 1fr 2fr;
    }
  }
  .loading {
    width: 6rem;
    height: 6rem;
    margin: 0 auto;
    margin-top: 10rem;
    border-radius: 50%;
    border: 3px solid #ccc;
    border-top-color: var(--clr-primary-5);
    animation: spinner 0.6s linear infinite;
  }
`
