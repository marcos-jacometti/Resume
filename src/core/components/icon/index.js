import React from "react";
import { Icons } from "./styles";

export default function Icon({background, height, width, font, top, svg}){
    return(
        <Icons background={background} height={height} width={width} font={font} top={top}>
            {svg}
        </Icons>
    );
}