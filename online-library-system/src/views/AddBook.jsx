import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: 'Fiction',
    description: '',
    rating: ''
  });
  const [errors, setErrors] = useState({});
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.author) newErrors.author = "Author is required";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.rating || formData.rating < 0 || formData.rating > 5) 
      newErrors.rating = "Rating must be between 0 and 5";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newBook = { ...formData, id: Date.now(), rating: Number(formData.rating) };
    dispatch(addBook(newBook)); // Add to Redux
    navigate(`/books/${formData.category}`); // Redirect [cite: 24]
  };

  return (
    <div className="form-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            placeholder="Title" 
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Author" 
            value={formData.author}
            onChange={(e) => setFormData({...formData, author: e.target.value})}
          />
          {errors.author && <span className="error">{errors.author}</span>}
        </div>
        <div>
          <select 
            value={formData.category} 
            onChange={(e) => setFormData({...formData, category: e.target.value})}
          >
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Mystery">Mystery</option>
          </select>
        </div>
        <div>
          <textarea 
            placeholder="Description" 
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
          {errors.description && <span className="error">{errors.description}</span>}
        </div>
        <div>
          <input 
            type="number" 
            placeholder="Rating (0-5)" 
            value={formData.rating}
            onChange={(e) => setFormData({...formData, rating: e.target.value})}
          />
          {errors.rating && <span className="error">{errors.rating}</span>}
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;