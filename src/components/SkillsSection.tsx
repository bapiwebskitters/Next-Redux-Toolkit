"use client"

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchSkills } from "../redux/features/skill/skillSlice";
import Image from "next/image";

const SkillsSection: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { skills, status, error } = useSelector((state: RootState) => state.skill);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSkills());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <p>Loading skills...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <section id="skills" className="skills section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <Image
              src="/img/skills.png"
              className="img-fluid"
              alt="Skills" width={1000} height={500} 
            />
          </div>

          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <h3>Voluptatem dignissimos provident quasi corporis voluptas</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="skills-content skills-animation">
              {skills.map((skill) => (
                <div className="progress" key={skill.id}>
                  <span className="skill">
                    <span>{skill.name}</span>{" "}
                    <i className="val">{skill.percentage}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={skill.percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
