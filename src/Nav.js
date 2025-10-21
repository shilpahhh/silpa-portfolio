import React from 'react';
import { Link } from 'react-scroll';
import './Nav_style.css';

function Nav() {
  return (
    <div id="navbar_titles">
      <Link to="home" smooth={true} duration={700} className="nav">
        <p className="title_p">HOME</p>
      </Link>
      <Link to="about" smooth={true} duration={700} className="nav">
        <p className="title_p">ABOUT</p>
      </Link>
      <Link to="education" smooth={true} duration={700} className="nav">
        <p className="title_p">EDUCATION</p>
      </Link>
      <Link to="skills" smooth={true} duration={700} className="nav">
        <p className="title_p">SKILLS</p>
      </Link>
      <Link to="connect" smooth={true} duration={700} className="nav">
        <p className="title_p">CONNECT</p>
      </Link>
    </div>
  );
}

export default Nav;
