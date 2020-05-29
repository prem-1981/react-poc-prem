import React from 'react';
import render from 'react-dom';
import './login.css';
import {Link} from 'react-router-dom'

class Logout extends React.Component{
    constructor(props){
        super(props);
        this.state = { }
    }
    
Logout = (e)=> {
    this.props.handleLogout();
}
    render(){
    return (
        <div className="container-fluid containerBg">
        <div className="row">
          <div className="col-5">
          <br/>
          <br/>
         
        <h1> Hope you Enjoy the Shopping</h1>
        <br/>
          <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore</p>
<br/>
          <br/>
        <h2> Please Login to Shop again </h2>
        <br/>
        <Link to="/login" className="nav-link btn btn-danger btn-lg" > Login </Link> 
        
            </div>
        </div>
        </div>
    )
    }
}
export default Logout