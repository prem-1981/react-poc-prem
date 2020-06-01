/* eslint-disable */ 
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect, NavLink
} from "react-router-dom";
import Login  from './components/Login/Login';
import LandingPage from './components/LandingPage/LandingPage';
import ProductList from './components/Products/ProductList';
import Logout from './components/Login/Logout'
import ProductDetails from './components/Products/ProductDetails';
import productJSON from './components/Products/product' 
import Checkout from './components/Checkout/Checkout';
import Cart from './components/Checkout/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    user:false,
    productListData:[]
    }
  }

  
  handleLogin = (user) => {
    this.setState({
      user:true
    })
  //console.log("...." + this.state.user)
  }
  
componentDidMount(){
 
 }


  handleLogout = (user) => {
    this.setState({
      user:false
    })
   //console.log("...." + this.state.user)
  }
  
//   sendItem = (item)=> {
//   //console.log(item)   
//   this.setState({
//     productListData:item
//   }) 
// }


  render(){

    const {user,productListData } = this.state;
    const customProps = this.props;
     
    return (
      <Router>
      <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-danger">

  <Link to="#" className="navbar-brand" > V-MART</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     <li className="nav-item ">
        <NavLink to="/landing" className="nav-link" > Home </NavLink> 
      </li>
      <li className="nav-item ">
        <NavLink to="/productlist/mens" className="nav-link" > Mens </NavLink> 
      </li>
      <li className="nav-item ">
        <NavLink to="/productlist/womens" className="nav-link" > Womens </NavLink> 
      </li>
      <li className="nav-item ">
        <NavLink to="/productlist/kids" className="nav-link" > Kids </NavLink> 
      </li>
      {user ? 
      <li className="nav-item ">
      <NavLink to="/logout" onClick ={this.handleLogout} className="nav-link float-right" > Logout </NavLink> 
     </li> :
       <li className="nav-item ">
        <NavLink to="/login" className="nav-link float-right" > Login </NavLink> 
       </li> 
      
      }
      
      <li className="nav-item"> {user.toString()} </li>
    </ul>
    </div>
    </nav>
  
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route exact path="/" render={() => (
              <Redirect to="/landing"/>
          )}/>

          
          <Route exact path={"/login"} 
          render={props => (
            <Login  {...props} user={user.toString()} handleLogin = {this.handleLogin}/>
          )}>
          </Route>       
          <Route exact path={"/logout"} 
          render={props => (
            <Logout  {...props} user={user.toString()} />
          )}>
          </Route>
          
          <Route
              exact
              path={"/landing"}
              render={props => (
                <LandingPage user={user.toString()}    {...props} 
                />
              )}
            />

            <Route
              exact
              path={"/productlist/:category"} 
              render={props => (
                <ProductList  {...props} 
                />
              )}
            />
          
          { <Route exact   path={"/productdetails/:id"}   
          render={props => (
          <ProductDetails   {...props}  />
          )} /> }

         { <Route exact   path={"/checkout"}   
          render={props => (
          <Checkout   {...props}  />
          )} /> }

      { <Route exact   path={"/cart"}   
          render={props => (
          <Cart user={user.toString()}  {...props}  />
          )} /> }
           

        </Switch>
      </div>
    </Router>
  );
  }             
}

export default App;
