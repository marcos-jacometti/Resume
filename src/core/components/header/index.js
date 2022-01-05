import React from "react";
import { Containers, Wrapper } from "./styles";

export default function Header(){
    return(
        <Wrapper>
           <Containers width="50%" justify="start">
               <h2>Marcos Jacometti</h2>
           </Containers>
           <Containers width="50%" justify="end">
               <h4>HOME</h4>
               <h4>ABOUT</h4>
               <h4>SKILLS</h4>
               <h4>RESUME</h4>
               <h4>CONTACT</h4>
           </Containers>
        </Wrapper>
    );
}