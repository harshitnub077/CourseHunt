import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { useHistory } from "react-router-dom"

const Hero = () => {
  const history = useHistory()

  const handleGetStarted = () => {
    history.push('/courses')
  }

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO COURSE HUNT' title='Best Online Education Expertise' />
            <p style={{ fontSize: '1.2rem', fontWeight: 500, marginBottom: '1.5rem' }}>
              Get personalized course recommendations, new updates, and top learning tips straight to your inbox.
            </p>
            <p style={{ fontSize: '1.2rem', fontWeight: 500, marginBottom: '1.5rem' }}>
              Learn new job skills in online courses from industry leaders like Google, IBM, & Meta.
            </p>
            
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
} 

export default Hero
 