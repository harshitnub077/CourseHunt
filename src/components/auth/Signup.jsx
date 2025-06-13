import React, { useState } from "react"
import { useHistory, Link } from "react-router-dom"

const Signup = ({ setUser }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (!name || !email || !password) {
      setError("Please fill all fields")
      return
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]")
    if (users.find(u => u.email === email)) {
      setError("Email already registered")
      return
    }

    const newUser = { name, email, password }
    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))
    localStorage.setItem("currentUser", JSON.stringify(newUser))
    setUser(newUser)
    history.push("/courses")
  }

  return (
    <div className="auth-container" style={{
      maxWidth: 350,
      margin: "3rem auto",
      padding: "2rem",
      borderRadius: "20px",
      boxShadow: "0 2px 16px rgba(30,178,166,0.15)",
      background: "#fff"
    }}>
      <h2 style={{ color: "#1eb2a6", textAlign: "center" }}>Sign Up</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "0.7rem 1rem", borderRadius: "10px", border: "1px solid #1eb2a6" }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "0.7rem 1rem", borderRadius: "10px", border: "1px solid #1eb2a6" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "0.7rem 1rem", borderRadius: "10px", border: "1px solid #1eb2a6" }}
        />
        {error && <div style={{ color: "red", textAlign: "center" }}>{error}</div>}
        <button
          type="submit"
          style={{
            background: "#1eb2a6",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            padding: "0.7rem 1rem",
            fontWeight: 600,
            cursor: "pointer"
          }}
        >
          Sign Up
        </button>
        <p style={{ textAlign: "center" }}>
          Already have an account? <Link to="/login" style={{ color: "#1eb2a6" }}>Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Signup