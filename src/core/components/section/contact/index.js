import React from "react";
import { Div, Section } from "../styles";
import Icon from "../../icon";
import { FaGithub, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { CgPhone } from "react-icons/cg";
import { ImWhatsapp } from "react-icons/im"
import { SiGmail } from "react-icons/si";

export default function Contact(){
    return(
        <Section height="100vh" justify="center" id="contact">
            <Div height="15vh" width="auto" justify="center">
                <h1>CONTACT</h1>
            </Div>
            <Div height="30vh" width="40vw" justify="center" direction="column" background="#080808" radius="5vh" mediaWidth="90%">
                <Div fill="#ff0000"><FaMapMarkerAlt /><Div left="0.5vw"><h3>Mogi Mirim - SP</h3></Div></Div>
                <Div fill="#fff"><CgPhone /><Div left="0.5vw"><h3>(19) 99940-9486</h3></Div></Div>
                <Div fill="#b22222"><SiGmail /><Div left="0.5vw"><h3>marcosjacometti10@gmail.com</h3></Div></Div>
            </Div>
            <Div top="5vh" height="10vh" width="20vw" justify="center" background="#080808" radius="5vh" mediaWidth="80%" svgFont="7vw">
                <a href="https://github.com/marcos-jacometti" target="_blank"><Icon hover="#473bf0" font="1.5vw" svg={<FaGithub />}/></a>
                <a href="https://www.linkedin.com/in/marcos-vin%C3%ADcius-jacometti-675202202" target="_blank"><Icon hover="#00ff" font="1.5vw" svg={<FaLinkedinIn />}/></a>
                <a href="https://wa.me/+5519999409486" target="_blank"><Icon hover="#25f366" font="1.5vw" svg={<ImWhatsapp />}/></a>
            </Div>
        </Section>
    );
}