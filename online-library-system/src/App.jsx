import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import BrowseBooks from './views/BrowseBooks';
import BookDetails from './views/BookDetails';
import AddBook from './views/AddBook';
import NotFound from './views/NotFound';
import './App.css';

// Layout wrapper for pages that need the Navbar
const Layout = () => (
  <>
    <Navbar />
    <div className="main-content">
      <Outlet />
    </div>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with Navbar */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* Dynamic route for categories  */}
          <Route path="/books/:category" element={<BrowseBooks />} />
          {/* Dynamic route for details [cite: 17] */}
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/add-book" element={<AddBook />} />
        </Route>

        {/* 404 Route without Navbar  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;