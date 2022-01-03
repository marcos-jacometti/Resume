import React from "react";
import { Bar, BarTitle, ProgressBar, ProgressDone } from "./styles";

export default function Progress({icon, fill, title, width}){
    return(
        <ProgressBar>
            <BarTitle background="blue" fill={fill}>
                {icon}
                <p>{title}</p>
            </BarTitle>
            <Bar>
                <ProgressDone width={width}/>
            </Bar>
        </ProgressBar>
    );
}