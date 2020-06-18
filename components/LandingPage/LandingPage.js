import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Caraousel from '../../hoc/Caraousel'
import './landing.css'
class List extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props)
  }


componentDidMount() {
  //localStorage.clear()
  // const localStorageItems = localStorage ? localStorage.getItem('userCredentials'):null
  // const userStatus = localStorageItems ? (localStorageItems.user === "true") :null
  // localStorage.setItem('userCredentials', userStatus);   
}

render() {
  
  return(
     <div className="container-fluid">
        <div className="row">

        <Caraousel/>

            {/* <img className="img-fluid" border="0" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/6/8/d45b6b5b-3118-46e7-a712-085847da85561591629760923-Wrogn_Desk_Banner.jpg"/>  */}
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