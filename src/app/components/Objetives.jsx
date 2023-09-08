"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import translations from "../locals/languages";
import { useLanguage } from "./LanguageContext";
const Objetives = () => {
  const colors = ["bg-red-50", "bg-blue-50", "bg-green-50", "bg-yellow-50"];
  const [usedColors, setUsedColors] = useState([]);
  const { language } = useLanguage();
  useEffect(() => {
    const newColors = [];
    for (let i = 0; i < translations[language].objetivesLists.length; i++) {
      newColors.push(getRandomColor(colors, usedColors));
    }
    setUsedColors(newColors);
  }, translations[language].objetivesLists);

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
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-gray-900 p-4" id="objetivos">
      <div className="container mt-10 mx-auto p-4 lg:p-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            data-aos="flip-up"
            className="text-3xl font-bold leading-tight pb-10 text-gray-200 sm:text-4xl lg:text-5xl"
          >
            {translations[language].objetiveTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {translations[language].objetivesLists.map((objetive, i) => (
            <div
              data-aos="flip-left"
              data-aos-duration="1600"
              key={i}
              className={`overflow-hidden rounded-2xl ${usedColors[i]}   p-4 lg:p-12`}
            >
              <h3 className="mt-4 text-3xl font-semibold text-slate-800">
                {objetive.objetiveTitle}
              </h3>
              <p className="mt-4 text-lg text-black">
                {objetive.objetiveDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objetives;
