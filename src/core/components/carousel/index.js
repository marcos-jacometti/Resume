import React, { useRef } from "react";
import { Buttons, Change } from "./styles";
import { FaHandPointLeft, FaHandPointRight } from "react-icons/fa";

export default function Carousel({ slide }){
    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };
    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    return(
        <Change>
            <div ref={carousel}>
                {slide.map((show) => {
                    return(
                        <>{show.component}</>
                    )
                })}
            </div>
            <Buttons>
                <button onClick={handleLeftClick}><FaHandPointLeft alt="Scroll Left"/></button>
                <button onClick={handleRightClick}><FaHandPointRight alt="Scroll Right"/></button>
            </Buttons>
        </Change>
    );
}