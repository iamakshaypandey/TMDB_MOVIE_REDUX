import './App.css';
// import { Footer } from './Component/Footer/Footer';
import { Header } from './Component/Header/Header';
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './Container/Main';
import { Route, Routes } from 'react-router-dom';
import  PopulerMovies  from './Container/PopulerMovies';
import TopRatedMovies from './Container/TopRatedMovies';
import  MovieDetails  from './Container/MovieDetails';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/PopulerMovies' element={<PopulerMovies/>}/>
          <Route path='/TopRatedMovies' element={<TopRatedMovies/>}/>
          <Route path='/MovieDetails/:id' element={<MovieDetails/>}/>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
