import { Route, Routes } from 'react-router'
import './App.css'
import MovieList from './pages/MovieList'
import NotFound from './pages/NotFound'
import MovieDetail from './pages/MovieDetail'
import PopularMovies from './pages/movies/PopularMovies'
import TopRatedMovies from './pages/movies/TopRatedMovies'
import UpcommingMovies from './pages/movies/UpcommingMovies'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MovieList />} />
        <Route path='/movie/popular' element={<PopularMovies />} />
        <Route path='/movie/top-rated' element={<TopRatedMovies />} />
        <Route path='/movie/upcomming' element={<UpcommingMovies />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
