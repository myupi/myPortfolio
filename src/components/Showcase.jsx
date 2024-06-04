import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

export const Showcase = () => {
  return (
    <section className="bg-black py-5">
      <div
        className={
          "container gap-6 mx-auto min-h-[500px] flex items-center justify-center flex-col " +
          style.background
        }
      >
        <h1 className={style.shadow + " text-white text-center "}>
          <span className="font-bold text-4xl">
            Hi, my name is <span className="text-[#5C62EC]">Ali</span>
          </span>
          <br />
          <span className={style.shadow + " text-3xl"}>
            and I'm a frontend developer
          </span>
        </h1>
        <p className="text-white text-center">
          with passion for learning and creating.
        </p>
        <Link
          to={
            "https://drive.google.com/file/d/1NKaJ46mf97g_EzWRo0XYjwvYh6LoSndh/view?usp=drivesdk"
          }
          className="text-white bg-[#5C62EC] rounded-md py-4 px-8 hover:opacity-75 transition-all text-center"
          target="_blank"
        >
          Check CV
        </Link>
        <Link
          to={
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vTPUaPVwoGw0z85FkKwEUALJwyQ_1BPTbDuH7tqFxpDkrGi83XYjmg6NEPtN0c4YoCVqYi3gVzmaS4y/pubhtml"
          }
          className="text-white bg-[#5C62EC] rounded-md py-4 px-8 hover:opacity-75 transition-all text-center"
          target="_blank"
        >
          Check CV
        </Link>
      </div>
    </section>
  );
};
