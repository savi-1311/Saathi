import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import { Button } from '@material-ui/core';

const font = "'Yusei Magic', sans-serif";

const useStyles = makeStyles((theme) => ({
  paper:
  {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'pink',
    width: '80%',
    padding: '2%',
    margin: "1%",
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2vh',
    color: 'maroon',
    fontFamily: font,
    fontWeight: 'bold',
    border: '2px maroon solid',
  },
}));

export default function Helpline(props) {
  const classes = useStyles();
  const location = useLocation();

  return (
      <Paper elevation={4} className={classes.paper}>{props.item.title} <br/> 
      <br/>Name: {props.item.name} <br/> 
      <br/>Number: {props.item.number} <br/> 
      </Paper>
    );
  }