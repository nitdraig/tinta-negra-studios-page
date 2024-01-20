"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import translations from "../locals/languages";
import { useLanguage } from "./LanguageContext";

const Services = () => {
  const colors = ["bg-red-50", "bg-blue-50", "bg-green-50", "bg-yellow-50"];
  const [usedColors, setUsedColors] = useState([]);
  const { language } = useLanguage();
  useEffect(() => {
    const newColors = [];
    for (let i = 0; i < translations[language].servicesLists.length; i++) {
      newColors.push(getRandomColor(colors, usedColors));
    }
    setUsedColors(newColors);
  }, translations[language].servicesLists);

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
    <section className="py-16 bg-gray-900" id="services">
      <div className="container m-auto mt-10 px-6 text-gray-800 md:px-12 xl:px-0">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight pb-10 text-gray-200 sm:text-4xl lg:text-5xl">
            {translations[language].servicesTittle}
          </h2>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {translations[language].servicesLists.map((service, i) => (
            <div
              key={i}
              data-aos="flip-down"
              data-aos-duration="1300"
              className={`overflow-hidden shadow-xl px-8 py-12 sm:px-12 lg:px-8 rounded-2xl ${usedColors[i]} `}
            >
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-black">
                  {service.serviceTitle}
                </h3>
                <p className="mb-6 text-black">
                  {service.serviceDescription}
                  <br />
                  <br />
                </p>
              </div>
              <img
                src={service.serviceImg}
                width="900"
                height="600"
                alt="Servicio"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
