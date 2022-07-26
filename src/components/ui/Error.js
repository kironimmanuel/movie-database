import { Link } from 'react-router-dom'
import styled from 'styled-components'
import React from 'react'

export default function Error() {
  return (
    <Wrapper>
      <section className="error-page section">
        <div className="error-container">
          <h1>oops! it's a dead end</h1>
          <Link to="/" className="btn btn-primary">
            back home
          </Link>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .page-error {
    text-align: center;
    padding: 2rem;
  }
  .error-page {
    display: flex;
    justify-content: center;
  }
  .error-container {
    text-align: center;
    text-transform: capitalize;
  }
`
