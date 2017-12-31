import React from 'react';
import { Link } from 'react-router-dom';

export const Home = ({ blogs }) => {
  return blogs !== null ? (
    <section className="bloglist">
      <u><p> Blog List</p></u>

      {/* map through blogs and render all titles */}

      {blogs.map((blog, index) => (
        <p key={index}><Link ownid={blog.id} to={`/${blog.id}`}>{blog.title}</Link></p>
      ))}
    </section>

  ) : (

    <p>Loading...</p>

  );
};
