import React from "react";
import language from "../../assets/c++.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/JS.png";
import react from "../../assets/React.png";
import mongodb from "../../assets/MongoDB.png";
import "./Skills.css";
export default function Skills() {
  return (
    <section id="skills">
      <h2 className="skillstitle">My Skills</h2>
      <span className="skillDesc">
        I find satisfaction in mastering the intricacies of web development and
        programming, where even the smallest skills shine as integral pieces in
        the grand mosaic of my expertise.
      </span>
      <div className="skillsImgs">
        <img src={language} alt="" className="skillImg" />
        <img src={html} alt="" className="skillImg" />
        <img src={css} alt="" className="skillImg" />
        <img src={js} alt="" className="skillImg" />
        <img src={react} alt="" className="skillImg" />
        <img src={mongodb} alt="" className="skillImg" />
      </div>
    </section>
  );
}
