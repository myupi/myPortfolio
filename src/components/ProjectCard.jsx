import React from 'react'

export const ProjectCard = () => {
  return (
    <div className="flex flex-col w-[32%] rounded-2xl bg-white shadow-xl gap-4 hover:shadow-4xl transition-all hover:scale-105 max-lg:w-[48%] max-md:w-[100%]">
      <img
        src="https://media.wired.com/photos/5fb70f2ce7b75db783b7012c/master/pass/Gear-Photos-597589287.jpg"
        alt=""
        className="rounded-2xl"
      />
      <h3 className="pb-4 ps-3 text-2xl font-bold max-md:text-xl">
        Gaming streaming portal
      </h3>
    </div>
  );
}
