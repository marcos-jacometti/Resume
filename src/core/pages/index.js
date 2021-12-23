import React from "react";
import Header from "../components/header";
import Section from "../components/section";
import { Container, Text } from "./styles";
import Card from "../components/card";
import { MdWavingHand } from "react-icons/md"
import Footer from "../components/footer";
import Carousel from "../components/carousel";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const slideshow = [
    {
        component: <Card icon={<FaReact />} tec="React JS" fill="#61DBFB" />
    },
    {
        component: <Card icon={<SiJavascript />} tec="JavaScript" fill="#ffff31" />
    },
    {
        component: <Card icon={<FaHtml5 />} tec="HTML"  fill="#ff4500" />
    },
    {
        component: <Card icon={<FaCss3Alt />} tec="CSS" fill="#0000cd" />
    },
    {
        component: <Card icon={<FaGitAlt />} tec="GIT" fill="#ff7f50" />
    },
]

export default function Home(){
    return(
        <>
           <Header />
           <Container>
               <Section height="44vh" width="40vw" background="transparent">
                    <Text>
                        <div><MdWavingHand /> <p>Hey, what's up?</p></div>
                        <div>
                            <p>
                                I'm 18 years old, I live in Mogi Mirim-SP and I'm Analysis and Systems Development student. I started my journey learning HTML and CSS
                                1 year ago and since then I've been learning more and more. Take a look below for my informations.
                            </p>
                        </div>
                    </Text>
               </Section>
               <Section height="44vh" width="100vw" background="#352f44">
                   <h1>Hello world</h1>
               </Section>
               <Section height="50vh" width="100vw" background="transparent">
                   <Carousel slide={slideshow}/>
               </Section>
               <Section height="50vh" width="100vw" background="#352f44">
                    <h1>Hello world</h1>
               </Section>
           </Container>
           <Footer />
        </>
    );
}