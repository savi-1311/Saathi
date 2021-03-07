import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LoginForm from './loginform';
import img from "./images/home.png"
import img2 from "./images/home2.png"
import img3 from "./images/home3.png"
import img4 from "./images/news-home.png"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const font = "'Yusei Magic', sans-serif";
const useStyles = makeStyles((theme) => ({
  body:
  {
    display: "block",
    backgroundColor: 'mediumvioletred',
    width: '100hw',
    color:"white",
    height: '10vh',
    textAlign: "center",
    alignItems: "center",
    fontFamily: font,
    fontSize: "2vh",
    margin: "auto",
  },
}));

export default function Footer() {
  const classes = useStyles();
  //58b9ab3546dc4a449200b74e6642601a

  return (
    <div className={classes.body}>
    <p>
    Made with 💛 by 
    <a className={classes.a} href="https://github.com/savi-1311/Saathi" style={{"textDecoration":"none", "color":"white"}}> Shambhavi Shandilya</a>
    </p>
    </div>

    );
  }



  // <Link to="/products" className={classes.link}><Paper elevation={4} className={classes.paper}>Check out the products!</Paper></Link>