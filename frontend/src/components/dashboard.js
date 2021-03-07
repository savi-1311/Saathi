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
import img from "./images/women.jpg"
import img1 from "./images/login.jpg"
import img3 from "./images/bg1.jpg"
import { useHistory } from 'react-router-dom'

const font = "'Yusei Magic', sans-serif";

const useStyles = makeStyles((theme) => ({
	outer:
	{
		alignItems: 'center',
		textAlign: 'center',
		height: '100vh',
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: 'pink',
		overflow : "hidden",
	},
	left:
	{
		width: "60%",
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',

	},
	root: {
		width: "40%",
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
		backgroundColor: 'maroon',
		height: '30vh',
		width: '30vh',
		borderRadius: "10%",
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '3vh',
		color: 'white',
		fontFamily: font,
		fontWeight: 'bold',
		'&:hover': 
		{
			cursor: 'pointer',
			backgroundColor: 'darkred',
		},
	},
	modal:
	{
		fontFamily: font,
		position: "fixed", /* Stay in place */
		zIndex: 5, /* Sit on top */
		left: "10%",
		top: "10%", 
		width: "30%", /* Full width */
		height: "60%", /* Full height */
		overflow: "auto", /* Enable scroll if needed */
		backgroundColor: "maroon",
		borderImage: `url(${img1}) 30 round`,
		border: "70px solid transparent",
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
		border: '2px white solid',
		padding: '1%',
	},

	form:
	{
		fontSize: '4vh',
		color: 'white',
		padding: '1%',
	},
}));

export default function Dashboard(props) {
	const classes = useStyles();
	const history = useHistory();
	const location = useLocation();
	const [show1, setShow1] = React.useState("none");
	const [show2, setShow2] = React.useState("none");
	const [name, setName] = React.useState("NA");
	const [name1, setName1] = React.useState("NA");
	const [image, setImage] = React.useState("NA");
	const [price, setPrice] = React.useState(1);
	const [rate, setRate] = React.useState(1);
	const [description, setDescription] = React.useState("");
	const [description1, setDescription1] = React.useState("");
	const [qualification, setQualification] = React.useState("NA");



	const showModal1 = () => 
	{
		setShow1("block");
	};


	const closeModal1 = () => 
	{
		setShow1("none");
	};


	const showModal2 = () => 
	{
		setShow2("block");
	};


	const closeModal2 = () => 
	{
		setShow2("none");
	};


	const handleChange1 = (event) => {
		setName(event.target.value);
	}

	const handleChange2 = (event) => {
		setDescription(event.target.value);
	}
	const handleChange3 = (event) => {
		setImage(event.target.files[0]);
	}

	const handleChange4 = (event) => {
		setPrice(event.target.value);
	}
	const handleChange5 = (event) => {
		setName1(event.target.value);
	}
	const handleChange6 = (event) => {
		setDescription1(event.target.value);
	}
	const handleChange7 = (event) => {
		setQualification(event.target.value);
	}
	const handleChange8 = (event) => {
		setRate(event.target.value);
	}


	async function AddProductRequest(){

		const body = new FormData()
		body.append('name', name)
		body.append('description', description)
		body.append('price', price)
		body.append('img', image)
		console.log(image);

		const config = 
		{
			withCredentials: true,
		}
		try
		{
			const response =
			await axios.post(`${process.env.REACT_APP_BACKEND_URL}/add-product`,body,config
				)
			if(response.status==200)
			{
				toast.success("Successfully Added the item");
				console.log(response.data);
				setShow1("none");

			}
		}
		catch(err)
		{
			toast.error("Error Occured!");
		}
	}


	async function AddServiceRequest(){

		const body = new URLSearchParams()
		body.append('name', name1)
		body.append('description', description1)
		body.append('qualification', qualification)
		body.append('rate', rate)

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
			await axios.post(`${process.env.REACT_APP_BACKEND_URL}/add-service`,body,config
				)
			if(response.status==200)
			{
				toast.success("Successfully Added the service");
				console.log(response.data);
				setShow2("none");

			}
		}
		catch(err)
		{
			toast.error("Error Occured!");
		}
	}

	async function RequestLogout(){

		const config = 
		{
			withCredentials: true,
		}
		try
		{
			const response =
			await axios.get(`${process.env.REACT_APP_BACKEND_URL}/logout`,config
				)
			if(response.status==200)
			{
				toast.success("Successfully Logged Out");
				console.log(response.data);
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
		<img src={img} style={{"width":"100%"}}/>
		</div>
		<div className={classes.root}>
		<Paper elevation={4} className={classes.paper}>Hi! {location.state.userdetail.name}</Paper>
		<br/>
		<Paper elevation={4} className={classes.paper} onClick={RequestLogout}>Log Out</Paper>
		<br/>
		<Paper elevation={4} className={classes.paper} onClick={showModal1}>Add Products!</Paper>
		<br/>
		<Paper elevation={4} className={classes.paper} onClick={showModal2}>Add Services :)</Paper>
	</div>

	<div id="myModal" className={classes.modal} style={{display: show1}}>

	<div className="modal-content">
	<span className={classes.close} onClick={closeModal1}>&times;</span>
	<h1>Add the Product</h1>
	<form>
	<label> Name: </label> <br/> <input type="text" className={classes.input} onChange={handleChange1} value={name}></input><br/>
	<br/>
	<label> Description: </label> <br/> <input type="text" className={classes.input} onChange={handleChange2} value={description}></input><br/>
	<br/>
	<label> Price: </label> <br/> <input type="number" className={classes.input} onChange={handleChange4} value={price}></input><br/>
	<br/>

	<label> Image: </label> <br/> <input type="file" className={classes.input} onChange={handleChange3} accept="image/*" placeholder="Image"></input><br/>
	<br/>
	<Button variant="contained" color="secondary" onClick={AddProductRequest}> Add </Button>
	</form>
	</div>
	</div>


	<div id="myModal" className={classes.modal} style={{display: show2}}>
	<div className="modal-content">
	<span className={classes.close} onClick={closeModal2}>&times;</span>
	<h1>Add the Service</h1>
	<form>
	<label> Name: </label> <br/> <input type="text" className={classes.input} onChange={handleChange5} value={name1}></input><br/>
	<br/>
	<label> Description: </label> <br/> <input type="text" className={classes.input} onChange={handleChange6} value={description1}></input><br/>
	<br/>
	<label> Qualification: </label> <br/> <input type="text" className={classes.input} onChange={handleChange7} value={qualification}></input><br/>
	<br/>
	<label> Price: </label> <br/> <input type="number" className={classes.input} onChange={handleChange8} value={rate}></input><br/>
	<br/>
	<Button variant="contained" color="secondary" onClick={AddServiceRequest}> Add </Button>
	</form>
	</div>
	</div>
	</div>
	);
}