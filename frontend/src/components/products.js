import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";
import Product from './product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import { Button } from '@material-ui/core';
import img from "./images/bg1.jpg"
import img1 from "./images/pot.png"

const font = "'Yusei Magic', sans-serif";

const useStyles = makeStyles((theme) => ({
  outer:
  {
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor : "white",
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection : "column",
  },
  left: {
    height: "90vh",
    width: "100%",
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection : "row",
  },
  root: {
    width: "50%",
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    overflowWrap: 'break-word',
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

export default function Products() {
  const classes = useStyles();
  const location = useLocation();
  const [products, setProducts] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/products`)
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
        setProducts(result);
        setIsLoaded(true);
      },
      (error) => {
        console.log(error);
        toast.error("Error Occured!");
      }
      )
  }, [isLoaded])


  return (
    <div className={classes.outer}>
    <div className={classes.left}>
    <img src={img1} style={{"height":"80%"}}/>
    <div>
    <div className={classes.title}>Handmade Products!</div>
    <div className={classes.subtitle}>Check out the amazing and 100% authentic handmade products.</div>
    </div>
    </div>
    <div className={classes.root}>
    {products.map(item => (
      <Product item={item}/>
      ))}
    </div>
    </div>
    );
  }