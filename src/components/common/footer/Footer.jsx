import React from "react"
// import { blog } from "../../../dummydata"
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

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                203 Fake St. Mountain View, San Francisco, California, USA
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

