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
    width: '50%',
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
    color: 'maroon',
    borderRadius: "10%",
    border: '2px maroon solid',
    padding: '1%',
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [user, setUser] = React.useState("");
  const [login, setLogin] = React.useState(false);

  const handleChange1 = (event) => {
    setEmail(event.target.value);
  }

  const handleChange2 = (event) => {
    setPassword(event.target.value);
  }


  async function LoginRequest(){
    const body = new URLSearchParams()
    body.append('email', email)
    body.append('password', password)
    
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
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`,body,config
        )
      if(response.status==200)
      {
        setUser(response.data);
        toast.success("Successfully Logged In");
        setLogin(true);
        console.log(response.data);
        history.push({
           pathname: '/dashboard',
           state: { userdetail: response.data }
       });

      }
    }
    catch(err)
    {
      toast.error("Error Occured! Use correct creadentials");
    }
  }

  return (
    <div className={classes.outer}>
    <div className={classes.left}>
    <img src={img2} style={{"width":"80%"}}/>
    </div>
    <div className={classes.root}>
    <Paper elevation={4} className={classes.paper}>Welcome Back!<br/><br/>
    <form>
    <label> Email Address: </label> <br/> <input type="text" className={classes.input} onChange={handleChange1} value={email}></input><br/>
    <label> Password: </label> <br/> <input type="password" className={classes.input} onChange={handleChange2} value={password}></input><br/>
    <Button variant="contained" color="secondary" onClick={LoginRequest}> Login </Button>
    </form>
    </Paper>
    </div>
    </div>
    );
}