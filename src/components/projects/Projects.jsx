import React from "react";
import "./Projects.css";
import calculator from "../../assets/calculator.png";
import colorpicker from "../../assets/colorpicker.png";
export default function Projects() {
  return (
    <section className="projects">
      <span className="Title">My Projects</span>
      <div className="projectsList">
        <div className="projectContent">
          <div className="projectImg">
            <img src={calculator} alt="calculator" className="calculator" />
          </div>
          <div className="projectLinks">
            <a href="https://calculator-wheat-rho.vercel.app/" className="demo">
              Demo
            </a>
            <a
              href="https://github.com/Mithilesh27/calculator"
              className="code"
            >
              Code
            </a>
          </div>
        </div>
        <div className="projectContent">
          <div className="projectImg">
            <img src={colorpicker} alt="color" className="colorpicker" />
          </div>
          <div className="projectLinks">
            <a
              href="https://color-picker-ten-pink.vercel.app/"
              className="demo"
            >
              Demo
            </a>
            <a
              href="https://github.com/Mithilesh27/color-picker"
              className="code"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
