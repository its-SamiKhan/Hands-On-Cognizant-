import React from 'react';

export function BookDetails({ books }) {
  return (
    <ul>
      {books.map((book) => (
        <div key={book.id} style={{ marginBottom: '15px' }}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );
}

export function BlogDetails({ blogs }) {
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id} style={{ marginBottom: '15px' }}>
          <h3>{blog.title}</h3>
          <p><strong>{blog.author}</strong></p>
          <p>{blog.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function CourseDetails({ courses }) {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id} style={{ marginBottom: '15px' }}>
          <h3>{course.cname}</h3>
          <h4>{course.date}</h4>
        </div>
      ))}
    </div>
  );
}

export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 }
];

export const courses = [
  { id: 201, cname: 'Angular', date: '4/5/2021' },
  { id: 202, cname: 'React', date: '6/5/2021' }
];

export const blogs = [
  { id: 301, title: 'React Learning', author: 'Stephen Biz', desc: 'Welcome to learning React!' },
  { id: 302, title: 'Installation', author: 'Scheschen', desc: 'You can install React from npm.' }
];
