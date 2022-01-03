import React from "react";
import Header from "../components/header";
import About from "../components/section/about";
import Home from "../components/section/home";
import Skills from "../components/section/skill";

export default function Main(){
    return(
        <>
            <Header />
            <main>
                <Home />
                <About />
                <Skills />
            </main>
        </>
    );
}