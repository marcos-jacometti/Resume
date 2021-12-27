import React from "react";
import Header from "../components/header";
import { Container, Div, Photo, Section } from "./styles";
import { FaGithub, FaLinkedinIn, FaCarSide, FaMoneyBillAlt, FaHeadphones } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoGameControllerA, IoMdFootball } from "react-icons/io";
import Icon from "../components/icon";
import Progress from "../components/progress";

export default function Home(){
    return(
        <>
           <Header />
           <Container>
               <Section height="95vh" background="transparent" justify="center">
                   <Div height="70vh" width="25vw" background="#202020" direction="column" radius="5%">
                       <Div width="100%" height="60%" background="transparent" justify="center"><Photo /></Div>
                       <Div width="100%" height="40%" background="transparent" direction="column" justify="space-around">
                           <Div direction="column">
                                <h1>Marcos Jacometti</h1>
                                <h5>Full Stack Developer</h5>
                            </Div>
                           <Div>
                                <Icon font="1.5vw" svg={<FaGithub />}/>
                                <Icon font="1.5vw" svg={<FaLinkedinIn />}/>
                                <Icon font="1.5vw" svg={<SiGmail />}/>
                            </Div>
                       </Div>
                   </Div>
               </Section>
               <Section height="100vh" background="#202020" justify="start">
                   <Div width="80%" background="transparent" height="50vh" direction="column" justify="center">
                        <h1>About Me</h1>
                        <p>Hi, I'm Marcos. Welcome to my website, here I am going to talk about me. I'm 18 years old, I live in Mogi Mirim-SP and today I'm in the third semester of Systems Analysis and Development. I've been studying web development for about 1 year, when I started with HTML, CSS and JS. My next step was to learn frameworks like React JS and Node JS.</p>
                   </Div>
                   <Div width="100%" height="50vh" background="transparent">
                        <Div width="50%" height="100%" justify="center" direction="column">
                            <h3>Personal Details</h3>
                            <p>Birthdate: 08-02-2003</p>
                            <p>Phone: +55 (19) 99940-9486</p>
                            <p>Email: marcosjacometti10@gmail.com</p>
                            <p>LinkedIn: Marcos Vinícius Jacometti</p>
                        </Div>
                        <Div width="50%" height="100%" direction="column" justify="center">
                            <h3>My Interests</h3>
                            <Div direction="row">
                                <Icon background="#181818" height="8vh" width="4vw" font="1.5vw" top="8vh" svg={<IoLogoGameControllerA />}/>
                                <Icon background="#181818" height="8vh" width="4vw" font="1.5vw" top="8vh" svg={<FaCarSide />}/>
                                <Icon background="#181818" height="8vh" width="4vw" font="1.5vw" top="8vh" svg={<FaMoneyBillAlt />}/>
                                <Icon background="#181818" height="8vh" width="4vw" font="1.5vw" top="8vh" svg={<FaHeadphones />}/>
                                <Icon background="#181818" height="8vh" width="4vw" font="1.5vw" top="8vh" svg={<IoMdFootball />}/>
                            </Div>
                        </Div>
                   </Div>
               </Section>
               <Section height="100vh" background="transparent" justify="center">
                    <Div width="100%" height="5vh" justify="center">
                        <h1>Skills</h1>
                    </Div>
                    <Div width="100%" height="95vh">
                        <Div width="50%" height="100%" justify="center" direction="column">
                            <h3>Technical Skills</h3>
                            <Progress title="JavaScript - 70%" width="70%"/>
                            <Progress title="HTML - 80%" width="80%"/>
                            <Progress title="CSS - 80%" width="80%"/>
                            <Progress title="React JS - 60%" width="60%"/>
                            <Progress title="Node JS - 5%" width="5%"/>
                            <Progress title="Git - 60%" width="60%"/>
                        </Div>
                        <Div width="50%" height="100%" justify="center" direction="column">
                            <h3>Professional Skills</h3>
                            <Progress title="Team Work - 100%" width="100%"/>
                            <Progress title="Creativity - 80%" width="80%"/>
                            <Progress title="Persistence - 100%" width="100%"/>
                            <Progress title="Enthusiasm - 100%" width="100%"/>
                            <Progress title="Communication - 70%%" width="70%"/>
                            <Progress title="Constant Learning - 100%" width="100%"/>
                        </Div>
                    </Div>
               </Section>
           </Container>
        </>
    );
}