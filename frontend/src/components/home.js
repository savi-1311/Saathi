import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LoginForm from './loginform';
import img from "./images/home.png"
import img2 from "./images/home2.png"
import img3 from "./images/home3.png"
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
    backgroundColor: 'mediumvioletred',
  },
  outer:
  {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    height: '100vh',
    flexDirection: 'row',
    clipPath: "ellipse(50% 40% at 50% 50%)",
  },
  outer1:
  {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  right:
  {
    display: 'flex',
    width: "50%",
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent:"center",
  },
  left:
  {
    display: 'flex',
    width: "50%",
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent:"center",
    flexDirection: "column",
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  paper:
  {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'mediumvioletred',
    height: '8vh',
    width: '20vh',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3vh',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': 
    {
      cursor: 'pointer',
      backgroundColor: 'deeppink',
    },
  },
  link:
  {
    textDecoration: "none",
    display: 'flex',
    flexDirection: 'row',
    height: '8vh',
    width: '20vh',

  },

  paper1:
  {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: "10%",
    height: '30vh',
    width: '30vh',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3vh',
    color: 'white',
    fontWeight: 'bold',
    color: "maroon",
    '&:hover': 
    {
      cursor: 'pointer',
      backgroundColor: 'pink',
    },
  },
  link1:
  {
    textDecoration: "none",
    display: 'flex',
    flexDirection: 'row',
    height: '30vh',
    width: '30vh',

  },

  img:
  {
    width: "100%",
    height: "100%",
  },
  title:
  {
    fontSize:"5vh",
    color:"maroon",
    fontFamily: font,
  },
  subtitle:
  {
    fontSize:"3vh",
    color:"palevioletred",
    fontFamily: font,
    textAlign: "center",
    padding: "1%",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
    <div className={classes.outer}>
    <div className={classes.left}>
    <div className={classes.title}>Empowering Women!</div>
    <div className={classes.subtitle}>Helping rural housewives to earn money by selling their own authentic self-made products from home & providing reliable services on the go.</div>
    <div className={classes.root}>
    <Link to="/signup" className={classes.link}><Paper elevation={4} className={classes.paper}>Get Started</Paper></Link>
    <br/>
    <Link to="/login" className={classes.link}><Paper elevation={4} className={classes.paper}>Log In</Paper></Link>
    <br/>
    </div>
    </div>
    <div className={classes.right}>
    <img src={img} style={{"width":"80%"}}/>
    </div>
    </div>
     <div className={classes.outer1}>
    <div className={classes.left}>
    <div className={classes.title}>Handmade Products!</div>
    <div className={classes.subtitle}>Check out the amazing and 100% authentic handmade products.</div>
    <div className={classes.root}>
    <Link to="/products" className={classes.link}><Paper elevation={4} className={classes.paper}>Products</Paper></Link>
    <br/>
    </div>
    </div>
    <div className={classes.right}>
    <img src={img2} style={{"width":"80%"}}/>
    </div>
    </div>
    <div className={classes.outer1}>
    <div className={classes.right}>
    <img src={img3} style={{"width":"80%"}}/>
    </div>
    <div className={classes.left}>
    <div className={classes.title}>Get Services :)</div>
    <div className={classes.subtitle}>We provide a platform to showcase skills for every Housemaker.</div>
    <div className={classes.root}>
    <Link to="/products" className={classes.link}><Paper elevation={4} className={classes.paper}>Products</Paper></Link>
    <br/>
    </div>
    </div>
    </div>
    </div>
    );
  }



  // <Link to="/products" className={classes.link}><Paper elevation={4} className={classes.paper}>Check out the products!</Paper></Link>