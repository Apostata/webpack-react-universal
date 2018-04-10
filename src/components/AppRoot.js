import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import MarkdownData from "../../data/post.md";
import imagePath  from "../images/1100px-Ser-wiki.png";
import Routes from './Routes';
export default class AppRoot extends React.Component {
    constructor(props){
        super(props)
        this.state ={
        }
    }

    render(){
        return(
            <Router>
                <Routes />
            </Router>  
        )
    }
}
