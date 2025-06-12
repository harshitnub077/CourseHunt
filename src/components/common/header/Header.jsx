// filepath: /Users/harshitkudhial/Documents/GitHub/CourseHunt/src/components/common/header/Header.jsx
import React from "react"
import Head from "./Head"
import "./header.css"

const Header = ({ user, setUser }) => {
  return (
    <>
      <Head user={user} setUser={setUser} />
      <header>
        <nav className="flexSB">
          <ul className="flexSB">
            <li><a href="/">Home</a></li>
            <li><a href="/courses">All Courses</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/journal">Journal</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header