import React, { useState } from 'react';
import { BookDetails, BlogDetails, CourseDetails, books, courses, blogs } from './Blogger';
import './App.css';

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  // We define element variables to show one way of conditional rendering
  const bookdet = showBooks ? <BookDetails books={books} /> : null;
  const content = showBlogs ? <BlogDetails blogs={blogs} /> : null;
  const coursedet = showCourses ? <CourseDetails courses={courses} /> : null;

  return (
    <div>
      <div className="controls">
        <h3>Toggle Columns (Conditional Rendering):</h3>
        <button onClick={() => setShowCourses(!showCourses)} className={showCourses ? "active" : ""}>
          {showCourses ? "Hide" : "Show"} Course Details
        </button>
        <button onClick={() => setShowBooks(!showBooks)} className={showBooks ? "active" : ""}>
          {showBooks ? "Hide" : "Show"} Book Details
        </button>
        <button onClick={() => setShowBlogs(!showBlogs)} className={showBlogs ? "active" : ""}>
          {showBlogs ? "Hide" : "Show"} Blog Details
        </button>
      </div>

      <hr />

      <div className="container">
        {/* Conditional rendering style 1: logical && operator */}
        {showCourses && (
          <div className="mystyle1">
            <h1>Course Details</h1>
            {coursedet}
          </div>
        )}

        {/* Conditional rendering style 2: ternary operator */}
        {showBooks ? (
          <div className="v2">
            <h1>Book Details</h1>
            {bookdet}
          </div>
        ) : null}

        {/* Conditional rendering style 3: element variables */}
        {showBlogs && (
          <div className="v1">
            <h1>Blog Details</h1>
            {content}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

