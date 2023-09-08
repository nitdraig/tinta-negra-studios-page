"use client";
import React, { useState } from "react";
import translations from "../locals/languages";
import { useLanguage } from "./LanguageContext";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la apertura/cierre del menú
  const { language, toggleLanguage } = useLanguage();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between bg-black bg-opacity-50 pt-1 z-50 text-white w-screen fixed">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <a className="text-3xl font-bold font-heading" href="#home">
          TNS
        </a>

        {/* Botón para abrir/cerrar el menú en pantallas pequeñas */}
        <button
          className="md:hidden ml-auto p-2 text-white"
          onClick={toggleMenu}
        >
          {menuOpen ? "Cerrar" : "Menú"}
        </button>

        {/* Menú desplegable en pantallas pequeñas */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden md:flex"
          } md:flex md:px-4 mx-auto font-semibold font-heading space-x-12`}
        >
          <li>
            <a className="hover:text-gray-200" href="#nosotros">
              {translations[language].navAbout}
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#objetivos">
              {translations[language].navObjetives}
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#proyectos">
              {translations[language].navProjects}
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#services">
              {translations[language].navServices}
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#contacto">
              {translations[language].navContact}
            </a>
          </li>
          <div className="relative inline-block w-16 h-8 bg-gray-400 rounded-full p-1">
            <button
              onClick={toggleLanguage}
              className={`absolute inset-0 w-8 h-8 bg-white rounded-full transition-transform duration-300 transform ${
                language === "en" ? "translate-x-8" : ""
              }`}
            >
              <span
                className={`block h-full w-4  rounded-full transform translate-x-0 transition-transform duration-300 ${
                  language === "es" ? "translate-x-4" : ""
                }`}
              ></span>
              <span className="block text-xs font-semibold text-gray-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {language === "es" ? "EN" : "ES"}
              </span>
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
