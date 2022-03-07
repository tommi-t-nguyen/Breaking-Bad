import React from 'react';
import "./Error.css";
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error">
				<h1>We're Experiencing Technical Difficulties</h1>
				<p>Sorry for any inconvenience. Please try again.</p>
				<Link to="/">Back to Home</Link>
		</div>
  )
}

export default Error
