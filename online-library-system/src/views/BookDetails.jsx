import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);
  const book = books.find((b) => b.id === parseInt(id));
  const navigate = useNavigate();

  if (!book) {
    return <h2>Book not found!</h2>;
  }

  return (
    <div className="details-container">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p><strong>Description:</strong> {book.description}</p>
      
      <Link to={`/books/${book.category}`} className="back-link">
        Back to Browse
      </Link>
    </div>
  );
}

export default BookDetails;