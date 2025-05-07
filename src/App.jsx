import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router';
import paths from './paths/paths';
import Details from './pages/Details/Details';
import Favorites from './pages/Favorites/Favorites';
import NotFound from './pages/NotFound/NotFound';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.details} element={<Details />} />
        <Route path={paths.favorites} element={<Favorites />} />
        <Route path={paths.notFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
