import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LoginForm from './loginform';
import Footer from './footer';
import img from "./images/home.png"
import img2 from "./images/home2.png"
import img3 from "./images/home3.png"
import img4 from "./images/news-home.png"
import img5 from "./images/phone.png"
import img6 from "./images/middle.gif"
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
    padding: "1%",
    marginBottom: "1%",
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
    height: '6vh',
    width: '15vh',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2vh',
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
    height: '6vh',
    width: '15vh',

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
    textAlign: "center",
  },
  subtitle:
  {
    fontSize:"3vh",
    color:"fuchsia",
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
    <div className={classes.title} data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000">Empowering Women!</div>
    <div className={classes.subtitle} data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000">Helping rural housewives to earn money by selling their own authentic self-made products from home & providing reliable services on the go.  Our aim is to expand the reach of rural heritage both locally & amongst the urban too, thus bridging the gap between societies.</div>
    <div className={classes.root}>
    <Link to="/signup" className={classes.link}><Paper elevation={4} className={classes.paper}>Get Started</Paper></Link>
    <br/>
    <Link to="/login" className={classes.link}><Paper elevation={4} className={classes.paper}>Log In</Paper></Link>
    <br/>
    </div>
    </div>
    <div className={classes.right}>
    <img src={img} style={{"width":"80%"}} data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000"/>
    </div>
    </div>
    <div className={classes.outer1}>
    <div className={classes.right} data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000">
    <img src={img6} style={{"width":"80%"}}/>
    </div>
    <div className={classes.left} data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000">
    <div className={classes.title}>Idea behind the Project</div>
    <div className={classes.subtitle}>What an irony it is, that the poor gets poorer and the rich gets richer. India is a land of rich
    heritage and diverse culture. And the rural villages uphold the virtues of India. But, it's a sad truth that they never receive their share.
    The reason? < div style={{"color":"maroon"}}>Middlemen</div>. They force the rural ladies to sell the products on a cheaper rate which they further sell on a higher price thereby 
    keeping their profit high. "Saathi" is a website designed in such a way that the customer can directly contact the women via email. Thus, eradicating the 
    need of greedy middlemen. With "Saathi", women can showcase their talents and get the right price for it!</div>
    </div>
    </div>
    <div className={classes.title}>What we Provide?</div>
     <div className={classes.outer1}>
    <div className={classes.left} data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000">
    <div className={classes.title}>Handmade Products!</div>
    <div className={classes.subtitle}>Well the hands that work under the sun all day can make world class products. And "Saathi" ensures that
    you are in touch with the maker itself. Check out the amazing and 100% authentic handmade products.</div>
    <div className={classes.root}>
    <Link to="/products" className={classes.link}><Paper elevation={4} className={classes.paper}>Products</Paper></Link>
    <br/>
    </div>
    </div>
    <div className={classes.right} data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000">
    <img src={img2} style={{"width":"80%"}}/>
    </div>
    </div>
    <div className={classes.outer1}>
    <div className={classes.right} data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000">
    <img src={img3} style={{"width":"80%"}}/>
    </div>
    <div className={classes.left} data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000">
    <div className={classes.title}>Get Services :)</div>
    <div className={classes.subtitle}>Not every woman is devoid of any skills. Be it a cleaning or taking tuitions, women have a lot to show. We provide a platform to showcase skills for every Housemaker.</div>
    <div className={classes.root}>
    <Link to="/services" className={classes.link}><Paper elevation={4} className={classes.paper}>Services</Paper></Link>
    <br/>
    </div>
    </div>
    </div>
    <div className={classes.outer1}>
    <div className={classes.left} data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000">
    <div className={classes.title}>Health News!</div>
    <div className={classes.subtitle}>The patriarchal society confides women in her home. But with "Saathi", you can stay connect with the world. Never miss an update to keep yourself up with the latest healthcare services.</div>
    <div className={classes.root}>
    <Link to="/newses" className={classes.link}><Paper elevation={4} className={classes.paper}>News</Paper></Link>
    <br/>
    </div>
    </div>
    <div className={classes.right} data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000">
    <img src={img4} style={{"width":"80%"}}/>
    </div>
    </div>
    <div className={classes.outer1}>
    <div className={classes.right} data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000">
    <img src={img5} style={{"width":"80%"}}/>
    </div>
    <div className={classes.left} data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000">
    <div className={classes.title}>Help!</div>
    <div className={classes.subtitle}>In case of any help, we have compiled a list of helpline numbers you can contact.</div>
    <div className={classes.root}>
    <Link to="/helplines" className={classes.link}><Paper elevation={4} className={classes.paper}>Helpline</Paper></Link>
    <br/>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
    );
  }



  // <Link to="/products" className={classes.link}><Paper elevation={4} className={classes.paper}>Check out the products!</Paper></Link>