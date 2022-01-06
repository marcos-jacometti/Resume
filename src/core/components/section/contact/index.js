import React from "react";
import { Div, Section } from "../styles";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";

export default function Contact(){
    return(
        <Section height="100vh" justify="center" id="contact">
            <Div height="15vh" width="auto" justify="center">
                <h1>CONTACT</h1>
            </Div>
            <Div height="75vh" width="60vw" justify="center" direction="column" background="#080808" radius="5vh">
                <Div background="#000500" width="35vh" height="4vh" justify="space-evenly" radius="5vh" border="0.4vh solid  #473bf0" cursor="pointer"><FaGithub /> marcos-jacometti</Div>
                <Div background="#000500" width="35vh" height="4vh" justify="space-evenly" radius="5vh" border="0.4vh solid  #473bf0" cursor="pointer" top="4vh"><FaLinkedinIn /> LinkedIn: Marcos Vinícius Jacometti</Div>
                <Div background="#000500" width="35vh" height="4vh" justify="space-evenly" radius="5vh" border="0.4vh solid  #473bf0" cursor="pointer" top="4vh"><SiGmail /> marcosjacometti10@gmail.com</Div>
                <Div background="#000500" width="35vh" height="4vh" justify="space-evenly" radius="5vh" border="0.4vh solid  #473bf0" cursor="pointer" top="4vh"><RiWhatsappFill /> (19) 99940-9486</Div>
            </Div>
        </Section>
    );
}