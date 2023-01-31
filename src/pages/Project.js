import React from "react";
import Nav from "../components/Nav"
import Item from "../components/Item"

export default function Project() {
    const itemInfo = [
        {
            title: '프로젝트1',
            desc: '설명글1',
            link: '주소',
            img: '/images/project01.jpg'
        },
        {
            
        }
    ]
    return(
        <div className="container">
        <Nav />
        <div>
            Project
        </div>
        <section className="itemList">
        <Item
        title={itemInfo[0].title}
        desc={itemInfo[0].desc}
        link={itemInfo[0].link}
        img={itemInfo[0].img}
        /> 
        <Item /> 
        </section>
        
        </div>
       
    )
}