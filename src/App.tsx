import { Route, Routes } from 'react-router'
import './App.css'
import MovieList from './pages/MovieList'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MovieList />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
