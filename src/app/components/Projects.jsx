"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import translations from "../locals/languages";
import { useLanguage } from "./LanguageContext";
const Projects = () => {
  const colors = ["bg-red-50", "bg-blue-50", "bg-green-50", "bg-yellow-50"];
  const [usedColors, setUsedColors] = useState([]);
  useEffect(() => {
    AOS.init();
  }, []);
  const { language } = useLanguage();
  useEffect(() => {
    const newColors = [];
    for (let i = 0; i < translations[language].projectsLists.length; i++) {
      newColors.push(getRandomColor(colors, usedColors));
    }
    setUsedColors(newColors);
  }, translations[language].projectsLists);

  function getRandomColor(colors, usedColors) {
    const availableColors = colors.filter(
      (color) => !usedColors.includes(color)
    );

    if (availableColors.length === 0) {
      usedColors.length = 0;
      return colors[Math.floor(Math.random() * colors.length)];
    }

    const randomIndex = Math.floor(Math.random() * availableColors.length);
    const color = availableColors[randomIndex];
    usedColors.push(color);
    return color;
  }

  return (
    <section className="py-6 bg-black sm:py-16 lg:py-16" id="proyectos">
      <div className="px-4 mt-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div data-aos="flip-up" className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-200 sm:text-4xl lg:text-5xl">
            {translations[language].projectTitle}
          </h2>
          <p className="font-bold leading-tight text-gray-200 sm:text-4xl lg:text-3xl">
            {" "}
            <span className="text-[#435cff]">+100 </span>
            {translations[language].projectDescription}
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 gap-x-6 xl:gap-x-12 gap-y-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {translations[language].projectsLists.map((project, i) => (
              <div
                key={i}
                data-aos="flip-right"
                data-aos-duration="1800"
                className={`overflow-hidden rounded-2xl ${usedColors[i]}`}
              >
                <div className="px-8 py-12">
                  <div className="relative w-24 h-24 mx-auto">
                    <img
                      className="relative object-cover w-24 h-24 mx-auto rounded-full"
                      src={project.projectImg}
                      alt="tinta negra studios proyectos"
                    />
                  </div>
                  <div className="h-[150px]">
                    <p className="text-lg font-bold text-black mt-9">
                      {project.projectsTitle}
                    </p>

                    <p className="text-lg text-black">
                      {project.projectsDescription}
                    </p>
                  </div>

                  <div className="flex justify-center items-center">
                    <a
                      className="p-2 my-5 mx-2 bg-red-700 rounded-lg border-[#fffff] hover:bg-[#ca4444] hover:text-black font-bold text-white  border-2  hover:border-[#000000] shadow-md transition duration-500 md:text-xl"
                      href={project.projectsYt}
                      target="_blank"
                    >
                      Youtube
                    </a>
                    <a
                      className="p-2 my-5 mx-2 bg-green-700 rounded-lg border-[#fffff] hover:bg-[#4de266] hover:text-black font-bold text-white  border-2  hover:border-[#000000] shadow-md transition duration-500 md:text-xl"
                      href={project.projectsSp}
                      target="_blank"
                    >
                      Spotify
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
