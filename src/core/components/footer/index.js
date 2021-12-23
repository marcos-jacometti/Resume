import React from "react";
import { Down } from "./styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer(){
    return(
        <Down>
            <div><FaGithub /> GitHub</div>
            <div><FaLinkedin /> LinkedIn</div>
            <div><IoLogoWhatsapp /> WhatsApp</div>
        </Down>
    );
}