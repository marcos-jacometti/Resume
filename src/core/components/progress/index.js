import React from "react";
import { Bar, ProgressBar, ProgressDone } from "./styles";

export default function Progress({title, width}){
    return(
        <ProgressBar>
            <p>{title}</p>
            <Bar>
                <ProgressDone width={width}/>
            </Bar>
        </ProgressBar>
    );
}