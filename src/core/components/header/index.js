import React from "react";
import { Containers, Wrapper } from "./styles";

export default function Header(){
    const menuItems = [
        {title: "HOME", ref: "#home"},
        {title: "ABOUT", ref: "#about"},
        {title: "SKILLS", ref: "#skills"},
        {title: "RESUME", ref: "#resume"},
        {title: "CONTACT", ref: "#contact"}    
    ];
    return(
        <Wrapper>
           <Containers width="50%" justify="start">
               <h2>Marcos Jacometti</h2>
           </Containers>

           <Containers width="50%" justify="end">
               {menuItems.map((op) => {
                   return(
                       <Containers>
                           <a href={op.ref}>{op.title}</a>
                       </Containers>
                   );
               })}
           </Containers>
        </Wrapper>
    );
}