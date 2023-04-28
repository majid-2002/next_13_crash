"use client";
import React, { useState, useEffect } from "react";
import Loading from "./loading";
import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      const response = await fetch("/api/courses");
      const data = await response.json();
      setCourses(data);
      setLoading(false);
    }
    fetchCourses();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Welcome to HomePage</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </div>
  );
};

export default Home;
