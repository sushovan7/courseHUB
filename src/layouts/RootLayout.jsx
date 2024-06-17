import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <main>
      <nav>
        <h1 className="logo">
          <NavLink to="/">CourseHub</NavLink>
        </h1>
        <ul>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="my-courses">My Courses</NavLink>
          </li>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
          <li>
            <NavLink to="register">Register</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </main>
  );
}

export default RootLayout;
