import React from "react";
import { Section, Div } from "../styles";
import Progress from "../../progress";
import { DiJavascript1 } from "react-icons/di";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";

export default function Skills(){
    return(
        <Section height="100vh" background="transparent" justify="center" id="skills">
            <Div width="100%" height="5vh" justify="center">
                <h1>SKILLS</h1>
            </Div>
            <Div width="100%" height="75vh">
                <Div width="50%" height="100%" justify="center" direction="column">
                    <h2>Technical Skills</h2>
                    <Progress icon={<DiJavascript1 />} fill="#fefe33" title="JavaScript - 70%" width="70%"/>
                    <Progress icon={<FaHtml5 />} fill="#ff4500" title="HTML - 80%" width="80%"/>
                    <Progress icon={<FaCss3 />} fill="#0000cd" title="CSS - 80%" width="80%"/>
                    <Progress icon={<FaReact />} fill="#1e90ff" title="React JS - 60%" width="60%"/>
                    <Progress icon={<FaNodeJs />} fill="#006400" title="Node JS - 5%" width="5%"/>
                    <Progress icon={<FaGitAlt />} fill="#ff4500" title="Git - 60%" width="60%"/>
                </Div>
                <Div width="50%" height="100%" justify="center" direction="column">
                    <h2>Professional Skills</h2>
                    <Progress title="Team Work - 100%" width="100%"/>
                    <Progress title="Creativity - 80%" width="80%"/>
                    <Progress title="Persistence - 100%" width="100%"/>
                    <Progress title="Enthusiasm - 100%" width="100%"/>
                    <Progress title="Communication - 70%" width="70%"/>
                    <Progress title="Constant Learning - 100%" width="100%"/>
                </Div>
            </Div>
        </Section>

    );
}