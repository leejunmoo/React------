import React from "react";
import Nav from "../components/Nav"

export default function About() {
    return(
        <>
        <Nav />
        <div>
            About
        </div> 
        <div className="icon">
            <p align="center">
                <a href="https://skillicons.dev">
                    <img src="https://skillicons.dev/icons?i=html,css,js,jquery,nodejs" />
                </a>
            </p>
        </div>
        </>
       
    )
}