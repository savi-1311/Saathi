import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";
import Helpline from './helpline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import { Button } from '@material-ui/core';
import img from "./images/bg1.jpg"
import img1 from "./images/crime.jpg"

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
    width: "70%",
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

export default function Helplines() {
  const classes = useStyles();
  const location = useLocation();
  const [products, setProducts] = React.useState([
    {
      "name":"Women In Distress",
      "number":"1091"
    },
    {
      "name":"Women Helpline Domestic Abuse ",
      "number":"181"
    },
    {
      "name":"National Commison For Women (NCW)",
      "number":"011-26942369"
    },
    {
      "name":"Delhi Commision For Women",
      "number":"011-23378044"
    },
    {
      "name":"Student / Child Helpline",
      "number":"1098"
    },
    {
      "name":"Delhi Women Protection Cell ",
      "number":"011-24673366"
    },
    {
      "name":"Lawyers Collective Womens Rights ( Domestic Voilence Cases ) ",
      "number":"011-24373993"
    },
    {
      "name":"Pratidhi ( Legal help )",
      "number":"011-22527259"
    }
    ]);

  return (
    <div className={classes.outer}>
    <div className={classes.left}>
    <img src={img1} style={{"height":"80%"}}/>
    <div>
    <div className={classes.title}>Helpline Numbers!</div>
    <div className={classes.subtitle}>In case of any help, we have compiled a list of helpline numbers you can contact.</div>
    </div>
    </div>
    <div className={classes.root}>
    {products.map(item => (
      <Helpline item={item}/>
      ))}
    </div>
    </div>
    );
  }