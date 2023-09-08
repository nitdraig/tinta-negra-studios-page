"use client";
import React from "react";
import NavBar from "./Navbar";
import About from "./About";

import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { LanguageProvider } from "./LanguageContext";
import Header from "./Header";
import Objetives from "./Objetives";
import Services from "./Services";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <LanguageProvider>
        <NavBar {...pageProps} />
        <Header {...pageProps} />
        <About {...pageProps} />
        <Objetives {...pageProps} />
        <Projects {...pageProps} />
        <Services {...pageProps} />
        <Contact {...pageProps} />
        <Footer {...pageProps} />
      </LanguageProvider>
    </>
  );
};

export default App;
