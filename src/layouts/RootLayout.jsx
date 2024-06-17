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
          <l1>
            <NavLink to="about">About</NavLink>
          </l1>
          <l1>
            <NavLink to="my-courses">My Courses</NavLink>
          </l1>
          <l1>
            <NavLink to="login">Login</NavLink>
          </l1>
          <l1>
            <NavLink to="register">Register</NavLink>
          </l1>
        </ul>
      </nav>
      <Outlet />
    </main>
  );
}

export default RootLayout;
