import React from "react";
import Header from "../components/header";
import About from "../components/section/about";
import Resume from "../components/section/resume";
import Home from "../components/section/home";
import Skills from "../components/section/skill";
import Contact from "../components/section/contact";

export default function Main(){
    return(
        <>
            <Header />
            <main>
                <Home />
                <About />
                <Skills />
                <Resume />
                <Contact />
            </main>
        </>
    );
}