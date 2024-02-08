import React from "react";
import style from "./style.module.scss";

export const Skills = () => {
  return (
    <section className={style.skills + " flex items-center justify-center"}>
      <div
        className="container flex items-center justify-center flex-col mx-auto py-10 gap-8"
      >
        <h1 className="text-center font-bold text-6xl text-[#5C62EC]">
          Skills
        </h1>
        <div className="flex items-center justify-center flex-col gap-5">
          <h2 className="text-center font-bold text-3xl">Frontend</h2>
          <p className="text-center w-50">
            JavaScript, ReactJS, Redux, HTML, CSS, SCSS, BootStrap, MaterialUI,
            TailwindCSS, AntDesign, MobX, Axios, Ajax, Git
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-5">
          <h2 className="text-center font-bold text-3xl">Backend</h2>
          <p className="text-center w-50">
            NodeJS, MySQL, MongoDB, PostgreSQL, phpMyAdmin, Express
          </p>
        </div>
      </div>
    </section>
  );
};
