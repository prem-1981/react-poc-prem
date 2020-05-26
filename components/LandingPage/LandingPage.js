import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class List extends React.Component{

  constructor(props){
    super(props)
  }


render() {
  
  return(
    <div>
      <div className="container-fluid">
        <div className="row">
        <img className="img-fluid" alt="Fashion" src="https://i.pinimg.com/originals/75/1d/2b/751d2b30f041d6a7ec336dbdef797311.jpg" border="0"/>       
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
            <Link to = "/productlist/mens"> MENS </Link>

          </div>
          <div className="bg-light shadow-sm mx-auto"></div>
        </div>
        <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
            <Link to = "/productlist/womens"> WOMENS </Link>

          </div>
          <div className="bg-light shadow-sm mx-auto"></div>
        </div>
        <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-light shadow-sm mx-auto"></div>
        </div>
  
</div>
      </div>
     
     
    </div>

    )
}



};

export default List;