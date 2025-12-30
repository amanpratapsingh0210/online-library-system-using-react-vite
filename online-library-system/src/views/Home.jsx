import { Link } from 'react-router-dom';

function Home() {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery"];

  return (
    <div className="home-container">
      <h1>Welcome to the Online Library</h1>
      
      <h2>Book Categories</h2>
      <div className="category-list">
        {categories.map((cat) => (
          <Link key={cat} to={`/books/${cat}`} className="category-card">
            {cat}
          </Link>
        ))}
      </div>

      <h2>Popular Books</h2>
      <div className="popular-books">
        <div className="book-card">
           <h3>The Great Gatsby</h3>
           <Link to="/book/1">View Details</Link>
        </div>
        <div className="book-card">
           <h3>Dune</h3>
           <Link to="/book/2">View Details</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;