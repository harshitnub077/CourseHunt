import React from "react"
import { Link } from "react-router-dom" // Add this import

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <h1>COURSE HUNT</h1>
            </Link>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-facebook-f icon'></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-instagram icon'></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-twitter icon'></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-youtube icon'></i>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head