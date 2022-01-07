import React from "react";
import { Icons } from "./styles";

export default function Icon({background, height, width, font, top, svg, hover, mediaFont, mediaHeight, mediaWidth}){
    return(
        <Icons background={background} height={height} width={width} font={font} top={top} hover={hover} mediaFont={mediaFont} mediaHeight={mediaHeight} mediaWidth={mediaWidth}>
            {svg}
        </Icons>
    );
}