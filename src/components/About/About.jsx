import React from "react";
import "./About.css";
import code from "../../assets/code.png";
import web from "../../assets/web.png";
export default function About() {
  return (
    <section id="about">
      <span className="aboutTitle">What i Do</span>
      <span className="aboutDescription">
        Hello, I'm <span className="name">Mithilesh</span>, an aspiring web
        developer in the making.My journey is defined by a relentless passion
        for problem solving. With a knack for breaking down complex challenges
        and a deep curiosity for the intricacies of web development, I'm on a
        mission to transform my enthusiasm into innovative digital solutions. I
        believe that every obstacle is an opportunity to learn and create, and
        I'm excited to embrace the dynamic world of web development with open
        arms. Let's embark on this coding adventure together.
      </span>
      <div className="work">
        <div className="workBar">
          <img src={web} alt="webdesign" className="web" />
          <div className="workBarText">
            <h2>Web Development</h2>
            <p>
              I create dynamic and user-friendly websites, bringing design
              concepts to life through clean, efficient code.
            </p>
          </div>
        </div>
        <div className="workBar">
          <img src={code} alt="problem solving" className="code" />
          <div className="workBarText">
            <h2>Problem Solving</h2>
            <p>
              I specialize in solving complex programming challenges with C++.
              My problem-solving skills are honed through algorithmic thinking,
              and I thrive on breaking down intricate problems into elegant,
              efficient code solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
