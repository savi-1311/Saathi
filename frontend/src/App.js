import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './App.css';
import LoginForm from './components/loginform';
import SignupForm from './components/signupform';
import Home from './components/home';
import Products from './components/products';
import Services from './components/services';
import Dashboard from './components/dashboard';
import Newses from './components/newses';
import Helplines from './components/helplines';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Scrollbars } from 'react-custom-scrollbars';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  AOS.init();

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
    <Route exact path="/services" component={Services}/>
    <Route exact path="/newses" component={Newses}/>
    <Route exact path="/helplines" component={Helplines}/>
    </Switch>
    </Router>
    </>
    );
  }