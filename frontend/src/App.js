import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './App.css';
import LoginForm from './components/loginform';
import SignupForm from './components/signupform';
import Home from './components/home';
import Products from './components/products';
import Dashboard from './components/dashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {

  return (
    <>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    <Router>
    <Switch>
    <Route exact path="/login" component={LoginForm}/>
    <Route exact path="/signup" component={SignupForm}/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/dashboard" component={Dashboard}/>
    <Route exact path="/products" component={Products}/>
    </Switch>
    </Router>
    </>
    );
  }



  // const [login, setLogin] = React.useState(false);
  // const [user, setUser] = React.useState({});

  // React.useEffect(() => {
  //   LoginRequest();
  //     //getUserInfo();
  //   }, [])

  // async function getUserInfo(){
  //   const response =
  //   await axios.get(`${process.env.REACT_APP_BACKEND_URL}/dashboard`,{withCredentials: true}
  //     )
  //   console.log(response);
  //   if(response.status==200)
  //   {
  //     setUser(response.data);
  //   }

  // }


  // async function LoginRequest(){
  //   const body = new URLSearchParams()
  //   body.append('email', 'bandanacharu@gmail.com')
  //   body.append('password', '123456')

  //   const config = 
  //   {
  //     withCredentials: true,
  //     headers: 
  //     {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     }
  //   }

  //   const response =
  //   await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`,body,config
  //     )
  //   if(response.status==200)
  //   {
  //     setLogin(true);
  //     getUserInfo();
  //   }

  // }