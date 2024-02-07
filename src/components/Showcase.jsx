import React from "react";
import style from "./style.module.scss";
import { saveAs } from "file-saver";

export const Showcase = () => {
  const handleDownload = () => {
    const filePath = process.env.PUBLIC_URL + "/assets/CV.pdf";

    // Загрузите файл и сохраните его с помощью file-saver
    fetch(filePath)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "CV.pdf");
      })
      .catch((error) => console.error("Ошибка загрузки файла:", error));
  };
  return (
    <section className="bg-black py-5">
      <div
        className={
          "container gap-6 mx-auto min-h-[500px] flex items-center justify-center flex-col " +
          style.background
        }
      >
        <h1 className="text-white text-center ">
          <span className="font-bold text-4xl">
            Hi, my name is <span className="text-[#5C62EC]">myupi</span>
          </span>
          <br />
          <span className="text-3xl">a frontend developer</span>
        </h1>
        <p className="text-white text-center">
          with passion for learning and creating.
        </p>
        <button
          onClick={handleDownload}
          className="text-white bg-[#5C62EC] rounded-md py-4 px-8 hover:opacity-75 transition-all"
        >
          Download CV
        </button>
      </div>
    </section>
  );
};
