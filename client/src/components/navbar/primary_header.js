import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const PrimaryHeader = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <hr />
      </div>
    </Router>
  )
}

export default PrimaryHeader;
