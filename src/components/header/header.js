import React from "react";
import { Button } from "react-bootstrap";
import "./header.scss";
import Input from "../input";
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="https://picsum.photos/20/20" />
        </div>
        <form className="search-bar">
          <input type="text" placeholder="enter text" />
        </form>
        <ul className="navlinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </div>
    </>
  );
}
