import React from "react"
import { Link } from "react-router-dom"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>COURSE HUNT</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>Get personalized course recommendations, new updates, and top learning tips straight to your inbox.</p>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className='fab fa-facebook-f icon'></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className='fab fa-twitter icon'></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className='fab fa-instagram icon'></i></a>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/journal">Blog</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                4th Floor, Tower B, DLF Cyber City, Phase 2, Gurugram, Haryana 122002, India
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 7678410891
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                harshitkudhial@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer

