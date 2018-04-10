import React from 'react';
import MarkdownData from "../../data/post.md";
import imagePath  from "../images/1100px-Ser-wiki.png";

export default ()=>(
    <div className="profile">
    <img src={imagePath} />
    <h1>{MarkdownData.title}</h1>

    <div 
    className="content"
    dangerouslySetInnerHTML={{__html:MarkdownData.__content}}></div>
    </div>
);