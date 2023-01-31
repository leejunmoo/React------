import React from "react";
import { Link } from 'react-router-dom'
// a 링크를 이용해 페이지를 넘어가는 방식은 오래걸리고 데이터를계속 새로업로드 하는거라
// React 자체적인 Link 모듈을 빼와서 그걸쓰면 빠르게넘어감

export default function Nav() {
    return(
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/project">Project</Link>
        </nav>
    )
}