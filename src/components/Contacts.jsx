import React from "react";
import style from "./style.module.scss";

export const Contacts = () => {
  return (
    <section className={style.skills + " flex items-center justify-center"}>
      <div
        data-aos="zoom-out"
        className="container flex items-center justify-center flex-col mx-auto py-10 gap-8"
      >
        <h1 className="text-center font-bold text-6xl text-[#5C62EC]">
          Contacts
        </h1>
        <div className="flex items-center justify-center flex-col gap-5">
          <h2 className="text-center font-bold text-3xl">Phone</h2>
          <p className="text-center w-50">+998 (93) 625-61-15</p>
        </div>
        <div className="flex items-center justify-center flex-col gap-5">
          <h2 className="text-center font-bold text-3xl">Email</h2>
          <p className="text-center w-50">myupi1717@gmail.com</p>
        </div>
      </div>
    </section>
  );
};
