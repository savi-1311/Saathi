import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom'
import img from "./images/login.jpg"
import img2 from "./images/askhome.jpg"

const font = "'Yusei Magic', sans-serif";

const useStyles = makeStyles((theme) => ({
  outer:
  {
    display: 'flex',
    height: '100vh',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    backgroundImage: `url(${img})`,
    backgroundRepeat: "repeat",
  },
  left:
  {
    width: "40%",
    padding: "1%",
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
    flexDirection: 'column',
    backgroundColor: 'pink',
    height: '90vh',
    width: '40vw',
    borderRadius: "10%",
    flexWrap: 'wrap',
    alignItems: 'center',
    alignSelf: "center",
    alignContent: "center",
    justifyContent: 'center',
    fontSize: '3vh',
    color: 'maroon',
    fontFamily: font,
    fontWeight: 'bold',
  },
  input:
  {
    fontSize: '2vh',
    backgroundColor: 'transparent',
    color: 'white',
    borderRadius: "10%",
    border: '2px maroon solid',
    padding: '1%',
  },
}));

export default function SignupForm() {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [city, setCity] = React.useState("");
  const [code, setCode] = React.useState("");
  const [user, setUser] = React.useState("");
  const [login, setLogin] = React.useState(false);

  const handleChange1 = (event) => {
    setName(event.target.value);
  }

  const handleChange2 = (event) => {
    setEmail(event.target.value);
  }

  const handleChange3 = (event) => {
    setPassword(event.target.value);
  }

  const handleChange4 = (event) => {
    setCity(event.target.value);
  }

  const handleChange6 = (event) => {
    setCode(event.target.value);
  }


  async function OTPRequest(){
    const body = new URLSearchParams()
    body.append('name', name)
    body.append('email', email)
    body.append('password', password)
    body.append('city', city)
    
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
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/validate`,body,config
        )
      if(response.status==200)
      {
        toast.success("OTP sent! Check your email");
      }
    }
    catch(err)
    {
      toast.error("Error Occured!");
    }
  }


  async function SignupRequest(){
    const body = new URLSearchParams()
    body.append('code', code)
    
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
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`,body,config
        )
      if(response.status==200)
      {
        toast.success("Your Profile has been created! Login to continue");
        history.push("/");
      }
    }
    catch(err)
    {
      toast.error("Error Occured!");
    }
  }

  return (
    <div className={classes.outer}>
    <div className={classes.left}>
    <img src={img2} style={{"width":"80%"}}/>
    </div>
    <div className={classes.root}>
    <Paper elevation={4} className={classes.paper}>Fill in this Form<br/><br/>
    <form>
    <label> Name: </label> <br/> <input type="text" className={classes.input} onChange={handleChange1} value={name}></input><br/>
    <label> Email Address: </label> <br/> <input type="text" className={classes.input} onChange={handleChange2} value={email}></input><br/>
    <label> Password: </label> <br/> <input type="password" className={classes.input} onChange={handleChange3} value={password}></input><br/>
    <label> Your City: </label> <br/> <input type="text" className={classes.input} onChange={handleChange4} value={city}></input><br/>
    <Button variant="contained" color="secondary" onClick={OTPRequest}> Request OTP </Button><br/>
    <label> OTP: </label> <br/> <input type="text" className={classes.input} onChange={handleChange6} value={code}></input><br/>
    <Button variant="contained" color="secondary" onClick={SignupRequest}> Register </Button>
    </form>
    </Paper>
    </div>
    </div>
    );
}