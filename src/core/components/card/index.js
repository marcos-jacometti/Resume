import React from "react";
import { Cards, Percent } from "./styles";

export default function Card({icon, tec, percent, fill}){
    return(
        <Cards fill={fill}>
            <div>{icon}</div>
            <div>{tec}</div>
        </Cards>
    );
}