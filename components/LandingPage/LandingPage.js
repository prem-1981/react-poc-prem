import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './landing.css'
class List extends React.Component{
  constructor(props){
    super(props)
  }


render() {
  
  return(
     <div className="container-fluid landing">
      <div className="container">
        <div className="row">
            <div className="col-5"> 
            <br/>
            <br/>        
        <h1>Welcome to V-MART</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore</p>
<p> &nbsp;</p>
<h3> Let's Shop and Enjoy </h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore</p>
          </div>
        </div> 
    </div>
    <br/>
    <br/>
    
        <div className="container">
        <h4> Browse more on Mens, Womens, and Kids </h4>
        <div className="row">
        <div className="col-lg-4">
          <div className = "single-banner">
          <img className="img-fluid" src="https://colorlib.com/preview/theme/fashi/img/banner-1.jpg" alt=""/>
          <div className="inner-text">
          <Link to="productlist/mens">
          <h4>Men’s</h4>
          </Link>
          </div>
          
          </div>
        </div>
        <div className="col-lg-4">
          <div className = "single-banner">
          <img className="img-fluid" src="https://colorlib.com/preview/theme/fashi/img/banner-2.jpg" alt=""/>
          <div className="inner-text">
          <Link to="productlist/womens">
          <h4>Women's</h4>
          </Link>
          </div>
          </div>
          
        </div>
        <div className="col-lg-4">
          <div className = "single-banner">
          <img className="img-fluid" src="https://colorlib.com/preview/theme/fashi/img/banner-3.jpg" alt=""/>
          <div className="inner-text">
          <Link to="productlist/kids">
          <h4>Kid's</h4>
          </Link>
          </div>
          </div>
          
        </div>

        </div>  
        </div>

    </div>
      
    
     
    

    )
}



};

export default List;