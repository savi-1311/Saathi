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
    height: '40vh',
    width: '70%',
    padding: '2%',
    margin: "1%",
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3vh',
    color: 'maroon',
    fontFamily: font,
    fontWeight: 'bold',
    border: '2px maroon solid',
  },
  modal:
  {
    position: "fixed", /* Stay in place */
    zIndex: 5, /* Sit on top */
    left: "10%",
    top: "10%", 
    width: "80%", /* Full width */
    height: "80%", /* Full height */
    overflow: "auto", /* Enable scroll if needed */
    backgroundColor: "black",
    color: "white",
    textAlign: 'center',
    padding: "1%", /* Black w/ opacity */

  },

  close:
  {
    color: "grey",
    float: "right",
    fontSize: "28px",
    fontWeight: "bold",
    '&:hover':
    {
      color: "white",
      textDecoration: "none",
      cursor: "pointer",
    },
  },
  input:
  {
    fontSize: '2vh',
    backgroundColor: 'transparent',
    color: 'white',
    borderRadius: "10%",
    border: '2px violet solid',
    padding: '1%',
  },

  label:
  {
    fontSize: '2vh',
    color: 'white',
    padding: '1%',
    fontFamily: font,
  },
}));

export default function Product(props) {
  const classes = useStyles();
  const location = useLocation();
  const [show1, setShow1] = React.useState("none");
  const [name, setName] = React.useState("NA");
  const [message, setMessage] = React.useState("NA");
  const [email, setEmail] = React.useState("NA");
  const [id, setId] = React.useState("");
  const [products, setProducts] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  function showModal1(someid) 
  {
    setId(someid);
    setShow1("block");
  };


  const closeModal1 = () => 
  {
    setShow1("none");
  };


  const handleChange1 = (event) => {
    setName(event.target.value);
  }

  const handleChange2 = (event) => {
    setEmail(event.target.value);
  }
  const handleChange3 = (event) => {
    setMessage(event.target.value);
  }


  async function RequestProduct(){

    const body1 = new URLSearchParams()
    body1.append('name', name)
    body1.append('message', message)
    body1.append('email', email)
    body1.append('id', props.item._id)
    console.log(body1);
    const config = 
    {
      withCredentials: true,
      headers: 
      {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    try
    {
      const response =
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/product`,body1,config
        )
      if(response.status==200)
      {
        toast.success("Successfully sent your request");
        console.log(response.data);
        setShow1("none");

      }
    }
    catch(err)
    {
      toast.error("Error Occured!");
    }
  }


  return (
    <>
      <Paper elevation={4} className={classes.paper}>{props.item.name} <br/> 
      <img src={props.item.img} style={{width: "auto", height : "80%"}}/> 
      <br/> {props.item.description} <br/> 
      <br/> Price : Rs. {props.item.price} <br/> 
      <Button variant="contained" color="secondary" onClick={showModal1}> Order </Button></Paper>

    <div id="myModal" className={classes.modal} style={{display: show1}}>

    <div className="modal-content">
    <span className={classes.close} onClick={closeModal1}>&times;</span>
    <h1>Add the product</h1>
    <form>
    <label> Name: </label> <br/> <input type="text" className={classes.input} onChange={handleChange1} value={name}></input><br/>
    <br/>
    <label> Email: </label> <br/> <input type="text" className={classes.input} onChange={handleChange2} value={email}></input><br/>
    <br/>
    <label> Message: </label> <br/> <input type="text" className={classes.input} onChange={handleChange3} value={message}></input><br/>
    <br/>
    <Button variant="contained" color="secondary" onClick={RequestProduct}> Request </Button>
    </form>
    </div>
    </div>
    </>
    );
  }