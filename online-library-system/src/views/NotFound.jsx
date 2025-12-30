import { Link, useLocation } from 'react-router-dom';

function NotFound() {
  const location = useLocation();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      {/* Display invalid URL  */}
      <p>Invalid URL: <code>{location.pathname}</code></p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default NotFound;