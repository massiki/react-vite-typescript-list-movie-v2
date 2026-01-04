import { Route, Routes } from 'react-router'
import './App.css'
import MovieList from './pages/MovieList'
import NotFound from './pages/NotFound'
import MovieDetail from './pages/MovieDetail'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MovieList />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
