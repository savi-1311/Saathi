# DSA-Tracker-Backend 
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![MIT Liscence](https://img.shields.io/badge/MIT-Liscence-yellow)](https://github.com/savi-1311/DSA-Tracker-Backend/blob/master/LICENSE)
<!--  -->


<h4 align="left">Languages and Tools:</h4>
<p align="left"> <a href="https://expressjs.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt="express" height="40"/> </a> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://img.icons8.com/color/48/000000/javascript.png"/> </a> <a href="https://www.mongodb.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="mongodb" width="50" height="50"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://img.icons8.com/color/48/000000/nodejs.png"/> </a> <a href="https://postman.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a></p>


### The following API calls can be made with this project

***

#### GET Requests

* > __/profile?id=\<id\>__

Returns the profile of the specified userid.

<br>

* > __/logout__

Logs out the current session.

* > __/question__

Resturns all the question of the current user.

<br>


#### POST Requests

* > __/validate__

Request Body (Form) {email,password,name,codeforces,github} 

OTP is sent to the email and the registeration process initiates.

<br>

* > __/signup__

Request Body (Form) {code} 

The OTP(code) is verified and the user is registered to the website.

<br>

* > __/login__

Request Body (Form) {email,password} 

The user is logged in if the credentials are true.
<br>

* > __/question__

Request Body (Form) {name,link} 

The question is added by the logged in user.
<br>

#### PATCH Requests

* > __/edit__

Request Body (Form) {name,codeforces,github} 

The profile is edited for the logged in user.

<br>

* > __/question__

Request Body (Form) {name,link,_id} 

The question with the provided _id is edited.

<br>

* > __/question-edit__

Request Body (Form) {_id,status} 

The question's status with the provided _id is changed (solved,unsolved).

<br>


***

### Setting Up the Project

1. Clone the repo
   ```sh
   git clone https://github.com/savi-1311/DSA-Tracker-Backend
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a .env file using the template .example.env and add values accordingly.
   
### Usage

1.  To run the server
    ```sh 
    npm run devStart
    ```
    The server will reun on http://localhost:8080
***
