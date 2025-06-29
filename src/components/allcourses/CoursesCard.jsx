import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import "./courses.css"

const placeholderImg = "https://cdn-icons-png.flaticon.com/512/3135/3135768.png"

// Helper to infer topic from course name
function getTopic(name) {
  const n = name.toLowerCase()
  if (n.includes("ai") || n.includes("artificial intelligence") || n.includes("machine learning")) return "AI"
  if (n.includes("data")) return "Data"
  if (n.includes("design")) return "Design"
  if (n.includes("business") || n.includes("management") || n.includes("finance") || n.includes("accounting")) return "Business"
  if (n.includes("cloud") || n.includes("aws") || n.includes("azure") || n.includes("googlecloud")) return "Cloud"
  if (n.includes("programming") || n.includes("python") || n.includes("java") || n.includes("javascript") || n.includes("code")) return "Programming"
  if (n.includes("health") || n.includes("medical") || n.includes("bio")) return "Health"
  if (n.includes("marketing") || n.includes("market")) return "Marketing"
  return "Other"
}

const CoursesCard = ({ courses, isApi }) => {
  const history = useHistory()
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  // Initialize state with localStorage data
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem("bookmarks")
    return saved ? JSON.parse(saved) : []
  })
  const [ratings, setRatings] = useState(() => {
    const saved = localStorage.getItem("ratings")
    return saved ? JSON.parse(saved) : {}
  })

  // Search and filter states
  const [search, setSearch] = useState("")
  const [showBookmarked, setShowBookmarked] = useState(false)
  const [courseType, setCourseType] = useState("all")
  const [topic, setTopic] = useState("all")
  const [filteredCourses, setFilteredCourses] = useState(courses)

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
  }, [bookmarks])

  useEffect(() => {
    localStorage.setItem("ratings", JSON.stringify(ratings))
  }, [ratings])

  useEffect(() => {
    let filtered = [...courses]
    if (showBookmarked) {
      filtered = filtered.filter(course => bookmarks.includes(isApi ? course.id : course.id))
    }
    if (search) {
      filtered = filtered.filter(course =>
        (isApi ? course.name : course.coursesName).toLowerCase().includes(search.toLowerCase())
      )
    }
    if (courseType !== "all") {
      filtered = filtered.filter(course => (isApi ? course.courseType : "") === courseType)
    }
    if (topic !== "all") {
      filtered = filtered.filter(course => getTopic(isApi ? course.name : course.coursesName) === topic)
    }
    setFilteredCourses(filtered)
  }, [courses, search, bookmarks, showBookmarked, isApi, courseType, topic])

  const toggleBookmark = (id) => {
    if (!currentUser) {
      alert("Please login to bookmark courses.")
      history.push("/login")
      return
    }
    setBookmarks(prev =>
      prev.includes(id) ? prev.filter(bid => bid !== id) : [...prev, id]
    )
  }

  const handleRating = (id, value) => {
    if (!currentUser) {
      alert("Please login to rate courses.")
      history.push("/login")
      return
    }
    setRatings(prev => ({
      ...prev,
      [id]: value,
    }))
  }

  const bookmarkedCount = courses.filter(course => bookmarks.includes(isApi ? course.id : course.id)).length

  // Get unique course types for filter dropdown
  const courseTypes = isApi ? [
    ...new Set(courses.map(c => c.courseType).filter(Boolean))
  ] : []

  // Get unique topics for filter dropdown
  const topics = isApi ? [
    ...new Set(courses.map(c => getTopic(c.name)).filter(Boolean))
  ] : []

  return (
    <section className='coursesCard'>
      <div className='container'>
        {/* Search, Type Filter, Topic Filter, and Bookmark Section */}
        <div className="search-filters" style={{ 
          marginBottom: "2.5rem",
          padding: "2rem 2.5rem",
          background: "#fff",
          borderRadius: "18px",
          boxShadow: "0 4px 24px -8px rgba(30,178,166,0.10)",
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '1.5rem',
          justifyContent: 'space-between'
        }}>
          <h3 style={{ marginBottom: 0, color: "#1eb2a6", fontSize: '1.4rem', fontWeight: 700, letterSpacing: 1 }}>Search & Filters</h3>
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "0.9rem 1.2rem",
              borderRadius: "10px",
              border: "1.5px solid #1eb2a6",
              width: "260px",
              fontSize: '1.1rem',
              fontFamily: 'Montserrat, Roboto, Arial, sans-serif'
            }}
          />
          <select
            value={courseType}
            onChange={e => setCourseType(e.target.value)}
            style={{
              padding: "0.9rem 1.2rem",
              borderRadius: "10px",
              border: "1.5px solid #1eb2a6",
              minWidth: "140px",
              fontSize: '1.1rem',
              fontFamily: 'Montserrat, Roboto, Arial, sans-serif'
            }}
          >
            <option value="all">All Types</option>
            {courseTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <select
            value={topic}
            onChange={e => setTopic(e.target.value)}
            style={{
              padding: "0.9rem 1.2rem",
              borderRadius: "10px",
              border: "1.5px solid #1eb2a6",
              minWidth: "140px",
              fontSize: '1.1rem',
              fontFamily: 'Montserrat, Roboto, Arial, sans-serif'
            }}
          >
            <option value="all">All Topics</option>
            {topics.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <label style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "0.5rem",
            whiteSpace: "nowrap",
            color: "#1eb2a6",
            cursor: "pointer", 
            fontSize: '1.1rem',
            fontFamily: 'Montserrat, Roboto, Arial, sans-serif'
          }}>
            <input
              type="checkbox"
              checked={showBookmarked}
              onChange={(e) => setShowBookmarked(e.target.checked)}
              style={{ cursor: "pointer" }}
            />
            Bookmarked ({bookmarkedCount})
          </label>
        </div>
        {/* Course Grid */}
        <div className='grid' style={{gap: '2.5rem'}}>
          {filteredCourses.map((val) => (
            <div className='items' key={isApi ? val.id : val.id} style={{
              background: '#fff',
              borderRadius: '18px',
              boxShadow: '0 4px 24px -8px rgba(30,178,166,0.13)',
              padding: '2rem 1.5rem',
              transition: 'transform 0.18s, box-shadow 0.18s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: '320px',
              position: 'relative',
              cursor: 'pointer',
              border: '1.5px solid #e6f0f3',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px) scale(1.025)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            >
              <div className='content flex' style={{flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                <div className='left' style={{marginBottom: '1.2rem'}}>
                  <div className='img' style={{width: '90px', height: '90px', borderRadius: '50%', overflow: 'hidden', background: '#f8f8f8', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(30,178,166,0.07)'}}>
                    <img src={placeholderImg} alt='' style={{width: '70%', height: '70%', objectFit: 'contain'}} />
                  </div>
                </div>
                <div className='text' style={{textAlign: 'center', width: '100%'}}>
                  <h1 style={{fontSize: '1.18rem', fontWeight: 700, color: '#1eb2a6', marginBottom: '0.5rem', fontFamily: 'Montserrat, Roboto, Arial, sans-serif'}}>{isApi ? val.name : val.coursesName}</h1>
                  {isApi && val.slug && (
                    <a href={`https://www.coursera.org/learn/${val.slug}`} target="_blank" rel="noopener noreferrer" style={{color: '#17a2b8', fontWeight: 600, fontSize: '1rem', textDecoration: 'underline'}}>View on Coursera</a>
                  )}
                  {isApi && (
                    <div style={{fontSize: '0.98rem', color: '#888', marginTop: '0.7rem', fontWeight: 500}}>Topic: {getTopic(val.name)}</div>
                  )}
                  {/* Rating Feature */}
                  <div style={{marginTop: '0.7rem'}}>
                    {[1,2,3,4,5].map(star => (
                      <span
                        key={star}
                        onClick={() => handleRating(val.id, star)}
                        style={{
                          cursor: currentUser ? 'pointer' : 'not-allowed',
                          color: (ratings[val.id] || 0) >= star ? '#ffd700' : '#ccc',
                          fontSize: '1.3rem',
                          marginRight: 2
                        }}
                        title={currentUser ? `Rate ${star} star${star > 1 ? 's' : ''}` : 'Login to rate'}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price' style={{marginTop: '1.5rem', width: '100%', display: 'flex', justifyContent: 'center'}}>
                <button 
                  className={`outline-btn ${bookmarks.includes(val.id) ? 'bookmarked' : ''}`}
                  onClick={() => toggleBookmark(val.id)}
                  style={{
                    background: bookmarks.includes(val.id) ? '#1eb2a6' : '#fff',
                    color: bookmarks.includes(val.id) ? '#fff' : '#1eb2a6',
                    border: '1.5px solid #1eb2a6',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    padding: '0.7rem 1.5rem',
                    boxShadow: '0 2px 8px rgba(30,178,166,0.07)',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                >
                  {bookmarks.includes(val.id) ? 'Bookmarked' : 'Bookmark'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoursesCard
        