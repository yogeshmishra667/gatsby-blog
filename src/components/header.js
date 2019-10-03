import React from 'react'
import { Link } from "gatsby";


const header = () => {
    return (
      <div>
        <nav>
        <h1>Yogesh mishra</h1>
          <li>
            <Link to="/">home</Link>
          </li>

          <li>
            <Link to="/about">about</Link>
          </li>

          <li>
            <Link to="/Blog">blog</Link>
          </li>
          
          <li>
            <Link to="/contect">contect</Link>
          </li>
        </nav>
      </div>
    )
}

export default header ;