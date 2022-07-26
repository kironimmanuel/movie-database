import { Routes, Route } from 'react-router-dom'
import Movie from './components/ui/SingleMovie'
import Error from './components/ui/Error'
import Home from './components/ui/Home'
import React from 'react'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movies/:id" element={<Movie />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
