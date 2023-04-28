"use client";
import { useState, useEffect } from "react";

const CourseSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/courses/search?query=${query}`);
    const courses = await res.json();
    getSearchResults(courses);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search Courses..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        ></input>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default CourseSearch;
