import React from "react";
import "./Intro.css";
import photo from "../../assets/photo.png";
export default function Intro() {
  return (
    <section className="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="name">Mithilesh</span>
          <br />
          ---- Web Developer
        </span>
        <p className="introPara">
          I'm a budding web developer fueled by a passion for problem-solving,
          and I'm on a mission to bring digital ideas to life.
        </p>
      </div>
      <img src={photo} alt="my image" className="backgroundImg" />
    </section>
  );
}
