"use client";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import translations from "../locals/languages";
import { useLanguage } from "./LanguageContext";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "32fafdae-c103-4d78-9efd-eeff7f00a64d");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        icon: "success",
        title: "¡El mensaje se ha enviado correctamente!",
        text: "Gracias por comunicarte conmigo, en la brevedad te responderé :)",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error al enviar el mensaje",
        text: "Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente más tarde.",
      });
    }
  };
  useEffect(() => {
    AOS.init();
  }, []);
  const { language } = useLanguage();
  return (
    <section className="py-16 bg-black" id="contacto">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="container m-auto px-6 text-gray-800 md:px-12 xl:px-0"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight pb-10 text-gray-200 sm:text-4xl lg:text-5xl">
            {translations[language].btnHeadTwo}
          </h2>
        </div>
        <form
          onSubmit={onSubmit}
          className="w-full mx-auto flex flex-col justify-center "
        >
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 gap-4">
              <div className="w-full md:w-1/2 ">
                <label
                  htmlFor="name"
                  className="block  text-white font-semibold text-sm leading-none mb-3 "
                >
                  {translations[language].contactName}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={translations[language].namePlace}
                  className="py-2 px-4 md:px-5 w-full appearance-none  border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
                <label
                  htmlFor="email"
                  className="block  text-white font-semibold text-sm leading-none mb-3 "
                >
                  {translations[language].contactEmail}
                </label>
                <input
                  id="email"
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="py-2 px-4 md:px-5 w-full appearance-none  border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
              </div>
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="block text-white font-semibold text-sm leading-none mb-3"
              >
                {translations[language].contactMessage}
              </label>
              <textarea
                id="message"
                name="message"
                className="px-4 py-3 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm  focus:ring-0 bg-white border border-gray-300 focus:shadow focus:outline-none focus:border-heading placeholder-body"
                autoComplete="off"
                spellCheck="false"
                rows={4}
                placeholder={translations[language].contactPlace}
              ></textarea>
            </div>
            <div className="relative flex justify-center">
              <button
                className="bg-[#ffffff] rounded-md text-black text-[13px] hover:text-[#fcfcfc] hover:bg-[#4e4646] md:text-sm leading-4 inline-flex items-center  transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none    px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4  hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
                type="submit"
              >
                {translations[language].btnC}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
