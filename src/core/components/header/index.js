import React from "react";
import { Wrapper, Headers } from "./styles";

export default function Header(){
    return(
        <Wrapper>
            <Headers><div></div><h2>Marcos Jacometti</h2></Headers>
            <Headers flex="end"><p>ABOUT ME</p><p>TEC</p><p>CONTACT ME</p></Headers>
        </Wrapper>
    );
}