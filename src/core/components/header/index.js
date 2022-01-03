import React from "react";
import { Containers, Wrapper } from "./styles";

export default function Header(){
    return(
        <Wrapper>
           <Containers width="50%" justify="start">
               <h3>Marcos</h3>
           </Containers>
           <Containers width="50%" justify="end">
               <h4>HOME</h4>
               <h4>ABOUT</h4>
               <h4>SKILLS</h4>
           </Containers>
        </Wrapper>
    );
}