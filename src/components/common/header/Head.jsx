// filepath: /Users/harshitkudhial/Documents/GitHub/CourseHunt/src/components/common/header/Head.jsx
import React from "react"
import { Link, useHistory } from "react-router-dom"

const Head = ({ user, setUser }) => {
  const history = useHistory()

  const handleLogout = () => {
    localStorage.removeItem("currentUser")
    setUser(null)
    history.push("/")
  }

  return (
    <section className='head'>
      <div className='container flexSB'>
        <div className='logo'>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <h1>COURSE HUNT</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </Link>
        </div>

        <div className='social'>
          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span>Welcome, {user.name}!</span>
              <Link 
                to="/"
                onClick={handleLogout}
                style={{
                  background: "#1eb2a6",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "10px",
                  padding: "0.5rem 1rem",
                  fontWeight: 600
                }}
              >
                Logout
              </Link>
            </div>
          ) : (
            <div style={{ display: "flex", gap: "10px" }}>
              <Link 
                to="/login"
                style={{
                  background: "#1eb2a6",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "10px",
                  padding: "0.5rem 1rem",
                  fontWeight: 600
                }}
              >
                Login
              </Link>
              <Link 
                to="/signup"
                style={{
                  background: "#1eb2a6",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "10px",
                  padding: "0.5rem 1rem",
                  fontWeight: 600
                }}
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Head