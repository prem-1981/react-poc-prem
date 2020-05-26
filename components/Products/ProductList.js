import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class ProductList extends React.Component {
constructor(props) {
    super(props)
    }

componentDidMount() {

}

render(){
const  {productItemData, location} = this.props
console.log(productItemData)
const productFilter = productItemData.filter.section;
const mensListItem = productFilter.Men;
const mensCategory = mensListItem.map((item, index) => 
<ul className="productInfo" key={index}>
    <li> <img src= {item.imgUrl} border="0" width="150" height="200"/> </li>
    <li> {item.title} </li>
    <li> {item.size} </li>
    <li> {item.color} </li>
    <li> {item.brand} </li>
    <Link to="/productlist/mens/productdetails/1" className="btn btn-primary" > View </Link> 
</ul>
    )

 return(

        <div className="container">
            <div className="row">
            <div className="col-2">  Filter </div>
            <div className="col-7">  
            <h2> Mens Category</h2>
            {mensCategory}            
             </div>
             <div className="col-3"> 
             Checkout 
            </div>
        </div>
        </div>

    )
}

}

export default ProductList