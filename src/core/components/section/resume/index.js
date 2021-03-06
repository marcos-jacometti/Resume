import React from "react";
import { Div, Section } from "../styles";
import { DiCode } from "react-icons/di";
import { MdWork } from "react-icons/md";

export default function Resume(){
    return(
        <Section height="100vh" justify="center" background="#080808" mediaHeight="150vh" id="resume">
            <Div height="15vh" width="auto" justify="center" mediaHeight="5vh">
                <h1>RESUME</h1>
            </Div>
            <Div height="75vh" width="90vw" justify="center" direction="column" mediaHeight="95vh">
                <Div><h2>Experience</h2></Div>
                <Div height="20vh" width="30vw" justify="center" background="#000500" radius="5vh" top="1vh" mediaWidth="100%" mediaFont="3vw">
                    <Div height="4vh" width="auto" justify="center" svgSize="1vw" svgFont="4vw"><MdWork /><Div left="0.4vw">SOGEFI GROUP Feb 2019 - Present 3 yrs</Div></Div>
                </Div>
                <Div top="5vh"><h2>Courses</h2></Div>
                <Div height="20vh" width="60vw" background="#000500" radius="5vh" top="1vh" mediaWidth="100vw" mediaFont="2vw" mediaHeight="50vh" svgFont="8vw">
                    <Div height="4vh" width="15vw" justify="center" svgSize="2vw" svgFont="6vw" fill="#ff0000" mediaWidth="100%"><DiCode /> <Div left="0.4vw">HTML5 and CSS3 1</Div></Div>
                    <Div height="4vh" width="15vw" justify="center" svgSize="2vw" svgFont="6vw" fill="#ff0000" mediaWidth="100%"><DiCode /> <Div left="0.4vw">HTML5 and CSS3 2</Div></Div>
                    <Div height="4vh" width="15vw" justify="center" svgSize="2vw" svgFont="6vw" fill="#ff0000" mediaWidth="100%"><DiCode /> <Div left="0.4vw">HTML5 and CSS3 3</Div></Div>
                    <Div height="4vh" width="15vw" justify="center" svgSize="2vw" svgFont="6vw" fill="#ff0000" mediaWidth="100%"><DiCode /> <Div left="0.4vw">HTML5 and CSS3 4</Div></Div>
                    <Div height="4vh" width="15vw" justify="center" svgSize="2vw" svgFont="6vw" fill="#ff0000" mediaWidth="100%"><DiCode /> <Div left="0.4vw">CSS Grid</Div></Div>
                    <Div height="4vh" width="15vw" justify="center" svgSize="2vw" svgFont="6vw" fill="#ff0000" mediaWidth="100%"><DiCode /> <Div left="0.4vw">JavaScript - Start with Pong</Div></Div>
                    <Div height="4vh" width="15vw" justify="center" svgSize="2vw" svgFont="6vw" fill="#ff0000" mediaWidth="100%"><DiCode /> <Div left="0.4vw">JavaScript - First step</Div></Div>
                    <Div height="4vh" width="15vw" justify="center" svgSize="2vw" svgFont="6vw" fill="#ff0000" mediaWidth="100%"><DiCode /> <Div left="0.4vw">JavaScript - OP</Div></Div>
                    <Div height="4vh" width="15vw" justify="center" svgSize="2vw" svgFont="6vw" fill="#ff0000" mediaWidth="100%"><DiCode /> <Div left="0.4vw">JavaScript - Functions</Div></Div>
                    <Div height="4vh" width="15vw" justify="center" svgSize="2vw" svgFont="6vw" fill="#ff0000" mediaWidth="100%"><DiCode /> <Div left="0.4vw">JavaScript - Arrays</Div></Div>
                    <Div height="4vh" width="15vw" justify="center" svgSize="2vw" svgFont="6vw" fill="#ff0000" mediaWidth="100%"><DiCode /> <Div left="0.4vw">REACT: Hooks and Context</Div></Div>
                    <Div height="4vh" width="15vw" justify="center" svgSize="2vw" svgFont="6vw" fill="#ff0000" mediaWidth="100%"><DiCode /> <Div left="0.4vw">Git GitHub</Div></Div>
                </Div>
            </Div>
        </Section>
    );
}