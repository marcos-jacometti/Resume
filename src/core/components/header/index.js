import React from "react";
import { Containers, Wrapper } from "./styles";

export default function Header(){
    return(
        <Wrapper>
           <Containers width="50%" justify="start">
               <h4>Marcos</h4>
           </Containers>
           <Containers width="50%" justify="end">
               <h5>HOME</h5>
               <h5>ABOUT</h5>
               <h5>SKILLS</h5>
           </Containers>
        </Wrapper>
    );
}