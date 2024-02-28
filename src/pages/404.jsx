import React from 'react';
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 Page Not Found</h1>
      <p>We're sorry, the page you requested could not be found.</p>
      <p>Please go back to the homepage or contact us if the problem persists.</p>
      <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>Go to Homepage</Link>
    </div>
  );
}

export default Page404;
