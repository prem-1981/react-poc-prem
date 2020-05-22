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
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user:false
    }
  }
  handleLogin = (user) => {
    this.setState({
      user:true
    })
   console.log("...." + this.state.user)
  }
  render(){
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
      <li className="nav-item"> {this.state.user.toString()} </li>
    </ul>
    </div>
    </nav>
  
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path={"/"} 
          render={props => (
            <Login  {...props} user={this.state.user.toString()} handleLogin = {this.handleLogin}/>
          )}>
          </Route>
          <Route
              exact
              path={"/landing"}
              render={props => (
                <LandingPage user={this.state.user.toString()}    {...props} 
                />
              )}
            />
        </Switch>
      </div>
    </Router>
  );
  }             
}

export default App;
