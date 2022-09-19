import { Routes, Route } from 'react-router-dom';
import { Footer, Header, Home, MovieDetails, PageNotFound } from './components';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
