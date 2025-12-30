import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter by Category first, then by Search Term
  const filteredBooks = books.filter((book) => 
    book.category === category && 
    (book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="browse-container">
      <h2>{category} Books</h2>
      
      <input 
        type="text" 
        placeholder="Search by title or author..." 
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <Link to={`/book/${book.id}`}>View Details</Link>
            </div>
          ))
        ) : (
          <p>No books found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;