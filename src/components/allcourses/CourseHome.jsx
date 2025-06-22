import React, { useEffect, useState } from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
// import { coursesCard } from "../../dummydata"
import "./courses.css"

const CourseHome = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true)
      try {
        const res = await fetch('https://api.allorigins.win/raw?url=https://api.coursera.org/api/courses.v1')
        const data = await res.json()
        setCourses(data.elements || [])
      } catch (err) {
        setCourses([])
      }
      setLoading(false)
    }
    fetchCourses()
  }, [])

  return (
    <>
      <Back title='Explore Courses' />
      {loading ? (
        <div style={{textAlign: 'center', fontSize: '1.5rem', color: '#1eb2a6', margin: '2rem 0'}}>Loading courses...</div>
      ) : (
        <CoursesCard courses={courses} isApi={true} />
      )}
      <OnlineCourses />
    </>
  )
}

export default CourseHome