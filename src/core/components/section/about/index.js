import React from "react";
import { Section, Div } from "../styles";
import Icon from "../../icon";
import { FaCarSide, FaMoneyBillAlt, FaHeadphones } from "react-icons/fa";
import { IoLogoGameControllerA, IoMdFootball } from "react-icons/io";
import { IoMdAirplane } from "react-icons/io";
import { MdComputer } from "react-icons/md";
import { GoGraph } from "react-icons/go";

export default function About(){
    return(
        <Section height="100vh" background="#080808" justify="start">
            <Div width="60%" height="50vh" direction="column" justify="center">
                <h1>ABOUT ME</h1>
                <p>Hi, I'm Marcos. Welcome to my website, here I am going to talk about me. I'm 18 years old, I live in Mogi Mirim-SP and today I'm in the third semester of Systems Analysis and Development. I've been studying web development for about 1 year, when I started with HTML, CSS and JS. My next step was to learn frameworks like React JS and Node JS.</p>
            </Div>
            <Div width="100%" height="50vh" background="transparent">
                <Div width="50%" height="100%" justify="center" direction="column">
                    <h2>Personal Details</h2>
                    <p>Birthdate: Feb. 08 2003</p>
                    <p>Phone: +55 (19) 99940-9486</p>
                    <p>Email: marcosjacometti10@gmail.com</p>
                    <p>City: Mogi Mirim - SP</p>
                </Div>
                <Div width="50%" height="100%" direction="column" justify="center">
                    <h2>My Interests</h2>
                    <Div direction="row">
                        <Icon background="#000500" height="8vh" width="4vw" font="1.5vw" top="8vh" svg={<IoLogoGameControllerA />}/>
                        <Icon background="#000500" height="8vh" width="4vw" font="1.5vw" top="8vh" svg={<FaCarSide />}/>
                        <Icon background="#000500" height="8vh" width="4vw" font="1.5vw" top="8vh" svg={<FaMoneyBillAlt />}/>
                        <Icon background="#000500" height="8vh" width="4vw" font="1.5vw" top="8vh" svg={<FaHeadphones />}/>
                    </Div>
                    <Div direction="row">
                        <Icon background="#000500" height="8vh" width="4vw" font="1.5vw" top="8vh" svg={<IoMdFootball />}/>
                        <Icon background="#000500" height="8vh" width="4vw" font="1.5vw" top="8vh" svg={<IoMdAirplane />}/>
                        <Icon background="#000500" height="8vh" width="4vw" font="1.5vw" top="8vh" svg={<MdComputer />}/>
                        <Icon background="#000500" height="8vh" width="4vw" font="1.5vw" top="8vh" svg={<GoGraph />}/>
                    </Div>
                </Div>
            </Div>
        </Section>

    );
}