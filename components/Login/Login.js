/* eslint-disable */ 
import React from 'react';
import render from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Redirect
} from "react-router-dom";
import './login.css';

class Header extends React.Component{
constructor(props){
    super(props);
    this.state = {
        username:'',
        password:'',
        submitted: false,
        error: '',
        errorMessages: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleInputChange(e) {
  this.setState({ [e.target.name]: e.target.value });
  this.setState({ errorMessages: '' });
}

handleSubmit(e){
  e.preventDefault();
  this.setState({ submitted: true });
  const {username,password} = this.state;
  // Stop if form is invalid one.
  if(!(username && password)){
    return;
  }
  if(username==='shop' && password==='shop'){
    this.props.history.push("/landing");
  }else{
    
    this.setState({ errorMessages: "Please Enter Correct Usernamer and Password" });
    console.log(this.errorMessages)
    return
  }
}

render() {
  
  const { username, password, submitted } = this.state;

  
    return(
        <div className="container">
        <img src ="../images/bg.jpg" />
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
               <p className="has-error"> {this.state.errorMessages} </p>
                <form className="form-signin" name="form" onSubmit={this.handleSubmit}>
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

                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
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

export default Header;