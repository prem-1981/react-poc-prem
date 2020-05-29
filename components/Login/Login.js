/* eslint-disable */ 
import React from 'react';
import render from 'react-dom';
import './login.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Redirect
} from "react-router-dom";

class Login extends React.Component{
constructor(props){
    super(props);
    this.state = {
        username:'',
        password:'',
        submitted: false,
        error: '',
        errorMessages: ''
    }
   // this.handleSubmit = this.handleSubmit.bind(this);
}


handleInputChange = (e)=> {
  this.setState({ [e.target.name]: e.target.value });
  this.setState({ errorMessages: '' });
}

handleSubmit = (e)=> {
  e.preventDefault();
  this.setState({ submitted: true });
  const {username,password} = this.state;
  // Stop if form is invalid one.
  if(!(username && password)){
    return;
  }

  fetch('https://api.jsonbin.io/b/5ecfb59360775a568583944f',{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'secret-key':'$2b$10$vKIGuXyJhe4zGQjE8LQGhuqOGLKo6Nog6NoM1DF3BQPOUmRGLI6Zq'
     },
  })
  .then(response => {
    return response.json()
  } )     
  .then(data =>{ 
  console.log('success', data)
  if(username === data.username && password === data.password){
    this.props.handleLogin();
      setTimeout(() => {
        this.props.history.push("/landing");
      }, 3000);
   
  }else{
    
    this.setState({ errorMessages: "Please Enter Correct Usernamer and Password" });
    console.log(this.errorMessages)
    return
  }
     
  })
 
}

render() {
  
  const { username, password, submitted } = this.state;

//   return(<div class="spinner-border" role="status">
//   <span class="sr-only">Loading...</span>
// </div>) 
    return(
        <div className="container-fluid containerBg">
        <div className="row">
          <div className="col-5">
          <br/>
          <br/>
         
        <h1>Fashion friday</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore</p>
          
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <h4> ===> LoggedIn Status {this.props.user} </h4>
               <p className="has-error"> {this.state.errorMessages} </p>
              
                <form className="form-signin" name="form">
                  <div className={"form-label-group" + (submitted && !username ? ' has-error' : '')}>

                    <input type="text" id="inputEmail" 
                    className="form-control" 
                    value={this.state.username}
                    name="username"
                    onChange={(e)=> this.handleInputChange(e)}
                    placeholder="Username"
                    />

                    <label htmlFor="inputEmail">Username</label>
                       {
                          submitted && !username &&
                          <div className="help-block">Username is required</div>
                        }

                  </div>

                  <div className={"form-label-group" + (submitted && !password ? ' has-error' : '')}>

                    <input type="password"
                     id="inputPassword" 
                    className="form-control" 
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={(e)=> this.handleInputChange(e)}
                     />

                    <label  htmlFor="inputPassword">Password</label>

                      {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }

                  </div>

                  <button onClick={this.handleSubmit} className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
                     Sign in
                 </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

};

export default Login;