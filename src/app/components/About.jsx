"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import translations from "../locals/languages";
import { useLanguage } from "./LanguageContext";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { language } = useLanguage();
  return (
    <div className="py-16 bg-black" id="nosotros">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="container pt-10 m-auto px-6 text-white md:px-12 xl:px-6"
      >
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://res.cloudinary.com/draig/image/upload/v1693869270/tns/pmlexbd3ip6zraqijzhk.png"
              className="rounded-full"
              alt="Tinta Negra Studios"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-4xl text-gray-300 font-bold md:text-4xl">
              {translations[language].aboutInfoTitle}
            </h2>
            <p className="mt-6 text-2xl text-white">
              {translations[language].aboutInfoDescription1} <br />
              {translations[language].aboutInfoDescription2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
