import React from "react";
import { Div, Photo, Section } from "../styles";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Icon from "../../icon";

export default function Home(){
    return(
        <Section height="95vh" background="transparent" justify="center">
            <Div height="70vh" width="25vw" background="#080808" direction="column" radius="5%">
                <Div width="100%" height="60%" background="transparent" justify="center"><Photo /></Div>
                <Div width="100%" height="40%" background="transparent" direction="column" justify="space-around">
                    <Div direction="column">
                         <h1>Marcos Jacometti</h1>
                         <h4>Front-end Developer</h4>
                     </Div>
                    <Div>
                         <Icon font="1.5vw" svg={<FaGithub />}/>
                         <Icon font="1.5vw" svg={<FaLinkedinIn />}/>
                         <Icon font="1.5vw" svg={<SiGmail />}/>
                     </Div>
                </Div>
            </Div>
        </Section>
    );
}