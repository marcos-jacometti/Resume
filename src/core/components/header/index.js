import React from "react";
import { Containers, Wrapper } from "./styles";

export default function Header(){
    const menuItems = [
        {title: "HOME", ref: "#home", id: "1"},
        {title: "ABOUT", ref: "#about", id: "2"},
        {title: "SKILLS", ref: "#skills", id: "3"},
        {title: "RESUME", ref: "#resume", id: "4"},
        {title: "CONTACT", ref: "#contact", id: "5"}    
    ];
    return(
        <Wrapper>
           <Containers width="50%" justify="start">
               <h1>Marcos Jacometti</h1>
           </Containers>

           <Containers width="50%" justify="end">
               {menuItems.map((op) => {
                   return(
                       <Containers key={op.id}>
                           <a href={op.ref}>{op.title}</a>
                       </Containers>
                   );
               })}
           </Containers>
        </Wrapper>
    );
}