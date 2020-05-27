/* eslint-disable */ 
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login  from './components/Login/Login';
import LandingPage from './components/LandingPage/LandingPage';
import ProductList from './components/Products/ProductList';
import ProductDetails from './components/Products/ProductDetails';
import productJSON from './components/Products/product' 
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user:false,
      productItems:{

        "filter": {
    
                        "product-color": {
    
                                        "title": "Color",
    
                                        "filter": [
    
                                                        "red",
    
                                                        "blue",
    
                                                        "green",
    
                                                        "yellow",
    
                                                        "pink",
    
                                                        "violet",
    
                                                        "grey",
    
                                                        "black",
    
                                                        "maroon",
    
                                                        "cherry",
    
                                                        "multy"
    
                                        ]
    
                        },
    
                        "product-size": {
    
                                        "title": "Size",
    
                                        "filter": [
    
                                                        "XS",
    
                                                        "S",
    
                                                        "M",
    
                                                        "L",
    
                                                        "XL",
    
                                                        "XXL",
    
                                                        "XXXL"
    
    
    
                                        ]
    
                        },
    
                        "size-availability": ["yes", "No", "comingsoon"],
    
                        "product-brand": {
    
                                        "title": "Brand",
    
                                        "filter": [
    
                                                        "Peter England",
    
                                                        "turbo",
    
                                                        "Denim",
    
                                                        "soch",
    
                                                        "Vanhuesen"
    
                                        ],
    
                                        "excludeoutOfStock": "check if we add this feature or not"
    
                        },
    
                        "section": {
    
                                        "Men": [{
    
                                                        "title": "Polo Shirts for men",
    
                                                        "imgUrl": "https://bestjquery.com/tutorial/product-grid/demo9/images/img-7.jpg",
    
                                                        "id": 1,
    
                                                        "size": "L",
    
                                                        "color": "red",
    
                                                        "brand": "Vanhuesen",
                                                        "price":2500,
    
                                                        "inStock": true
    
                                        },
                                        {
    
                                          "title": "Rounded Neck Tshirt",

                                          "imgUrl": "http://bestjquery.com/tutorial/product-grid/demo9/images/img-3.jpg",

                                          "id": 2,

                                          "size": "XL",

                                          "color": "green",

                                          "brand": "peterEngland",
                                          "price":1500,

                                          "inStock": true

                          }],
    
                                        "Kids": [{
    
                                                        "title": "Kids",
    
                                                        "imgUrl": "",
    
                                                        "id": 2,
    
                                                        "size:": "M",
    
                                                        "color": "Multy",
    
                                                        "brand": "Vanhuesen",
    
                                                        "inStock": true
    
                                        }],
    
                                        "Women": [{
    
                                                        "title": "Sleeve short",
    
                                                        "imgUrl": "http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg",
    
                                                        "id": 1,
    
                                                        "size": "S",
    
                                                        "color": "",
    
                                                        "brand": "Ruby",
    
                                                        "inStock": true
    
                                        },
                                        {
    
                                          "title": "Women",

                                          "imgUrl": "http://bestjquery.com/tutorial/product-grid/demo9/images/img-6.jpg",

                                          "id": 2,

                                          "size:": "S",

                                          "color": "",

                                          "brand": "Soch",

                                          "inStock": true

                          }
                                      
                                      ]
    
                        }
    
        }
    
    
    
    
    
    },
    //productDetails:[] 
    
    }

  }

  
  handleLogin = (user) => {
    this.setState({
      user:true
    })
   //console.log("...." + this.state.user)
  }
  // updateProdDetails = (items) => {
  //   return () => {
  //     this.setState({
  //       productdetails:items
  //      });
  //   }  
    
  // }

  
// componentDidMount(){
//   fetch('https://api.jsonbin.io/b/5eccb12ee91d1e45d1119b91' ,{
//     headers : { 
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//       'secret-key':'$2b$10$vKIGuXyJhe4zGQjE8LQGhuqOGLKo6Nog6NoM1DF3BQPOUmRGLI6Zq'
//      }
//   })
//   .then(response => response.json())
//   .then(json => this.setState({ productItems:json}))
//  }


  // handleLogout = (user) => {
  //   this.setState({
  //     user:false
  //   })
  //  console.log("...." + this.state.user)
  // }
  
  getData = (item)=> {
   this.setState({productDetails: item});     
}


  render(){

    const { productItems,user } = this.state;
    const customProps = this.props;
    console.log(this.state.productDetails)
   
    return (
      <Router>
      <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

  <Link to="#" className="navbar-brand" > V-MART</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {/* <li className="nav-item active">
        <Link to="/landing" className="nav-link" > Home </Link> 
      </li> */}
      <li className="nav-item"> {user.toString()} </li>
    </ul>
    </div>
    </nav>
  
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path={"/"} 
          render={props => (
            <Login  {...props} user={user.toString()} handleLogin = {this.handleLogin}/>
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
                <ProductList sendData={this.getData}  productItemData={productItems}  {...props} 
                />
              )}
            />
          
          <Route exact   path={"/productdetails/:id"}   
          render={props => (
          <ProductDetails   sendData={this.state.productDetails} {...props}  />
          )} />


          

        </Switch>
      </div>
    </Router>
  );
  }             
}

export default App;
