import React from "react";
import { Div, Photo, Section } from "../styles";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Icon from "../../icon";

export default function Home(){
    return(
        <Section height="100vh" background="transparent" justify="center" id="home">
            <Div height="70vh" width="25vw" background="#080808" direction="column" radius="5%">
                <Div width="100%" height="60%" background="transparent" justify="center"><Photo /></Div>
                <Div width="100%" height="40%" background="transparent" direction="column" justify="space-around">
                    <Div direction="column">
                         <h1>Marcos Jacometti</h1>
                         <h4>Full Stack Developer Student</h4>
                     </Div>
                    <Div>
                         <a href="https://github.com/marcos-jacometti" target="_blank"><Icon font="1.5vw" svg={<FaGithub />}/></a>
                         <a href="https://www.linkedin.com/in/marcos-vin%C3%ADcius-jacometti-675202202/" target="_blank"><Icon font="1.5vw" svg={<FaLinkedinIn />}/></a>
                         <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><Icon font="1.5vw" svg={<SiGmail />}/></a>
                     </Div>
                </Div>
            </Div>
        </Section>
    );
}