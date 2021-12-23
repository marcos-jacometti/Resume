import React from "react";
import { Sections } from "./styles";

export default function Section({height, width, background, children}){
    return(
        <Sections height={height} width={width} background={background}>
           {children}
        </Sections>
    );
}