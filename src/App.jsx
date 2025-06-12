import React, { useState } from "react"
import "./App.css"
import Header from "./components/common/header/Header"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import { Switch, Route } from "react-router-dom"

function App() {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("currentUser")) || null
    } catch {
      return null
    }
  })

  return (
    <div>
      <Header user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/courses" component={CourseHome} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/journal" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" render={props => <Login {...props} setUser={setUser} />} />
        <Route exact path="/signup" render={props => <Signup {...props} setUser={setUser} />} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App