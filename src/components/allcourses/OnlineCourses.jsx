import React from "react"
import { useHistory } from "react-router-dom"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"

const OnlineCourses = () => {
  const history = useHistory()

  const handleCategoryClick = (category) => {
    // Store the selected category in localStorage
    localStorage.setItem("selectedCategory", category)
    // Navigate to courses page
    history.push("/courses")
  }

  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' title='Browse Our Online Courses' />
          <div className='content grid3'>
            {online.map((val, index) => (
              <div 
                className='box' 
                key={index}
                onClick={() => handleCategoryClick(val.courseName)}
                style={{ cursor: 'pointer' }}
              >
                <div className='img'>
                  <img src={val.cover} alt="" />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses