import { Route, Routes } from 'react-router'
import './App.css'
import MovieList from './pages/movies/MovieList'
import NotFound from './pages/NotFound'
import MovieDetail from './pages/movies/MovieDetail'
import PopularMovies from './pages/movies/PopularMovies'
import TopRatedMovies from './pages/movies/TopRatedMovies'
import UpcommingMovies from './pages/movies/UpcommingMovies'
import AiringToday from './pages/seriesTv/AiringToday'
import SeriesTvDetail from './pages/seriesTv/SeriesTvDetail'
import AiringSoon from './pages/seriesTv/AiringSoon'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MovieList />} />
        <Route path='/movie/popular' element={<PopularMovies />} />
        <Route path='/movie/top-rated' element={<TopRatedMovies />} />
        <Route path='/movie/upcomming' element={<UpcommingMovies />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
        <Route path='/series-tv/airing-today' element={<AiringToday />} />
        <Route path='/series-tv/airing-soon' element={<AiringSoon />} />
        <Route path='/series-tv/detail/:id' element={<SeriesTvDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
