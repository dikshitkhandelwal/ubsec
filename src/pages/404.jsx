import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

function Page404(props) {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>We're sorry, the page you requested could not be found. Please go back to the homepage or contact us if the problem persists.</p>
            <div>
                <Link to="/" style={{ marginRight: '10px' }}>Go to Homepage</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </div>
    );
}

export default Page404;
