//https://bootsnipp.com/snippets/A2pXB
import React from 'react';
import {render} from 'react-dom';
import './product.css';
import { isTemplateElement } from '../../../node_modules/@babel/types';
class ProductDetails extends React.Component {
constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
        mensProductDetailsDisplay:[],
        womensProductDetailsDisplay:[],
        kidsProductDetailsDisplay:[]
    }
    }
componentDidMount(){
    fetch('https://api.jsonbin.io/b/5ed0891b79382f568bcef512',{
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
      //console.log('success', data)
      const mensProductDetailsDisplay = data ? data.section.Men:null;
      const womensProductDetailsDisplay = data ? data.section.Women:null;
      const kidsProductDetailsDisplay = data ? data.section.Kids:null
        this.setState({
            mensProductDetailsDisplay:mensProductDetailsDisplay,
            womensProductDetailsDisplay:womensProductDetailsDisplay,
            kidsProductDetailsDisplay:kidsProductDetailsDisplay
        })
})
}


render(){
   const { mensProductDetailsDisplay, womensProductDetailsDisplay,kidsProductDetailsDisplay} = this.state;
   const param = this.props.match.params.id;
   console.log(this.props)
  const paramConvert = parseInt(param)
  //  console.log(paramConvert)
   const filteredKeys = mensProductDetailsDisplay.filter(items => items.id === paramConvert);
   const filterWomen = womensProductDetailsDisplay.filter(items => items.id === paramConvert);
   const filterKid = kidsProductDetailsDisplay.filter(items => items.id === paramConvert)
 
  
    return(
        <div>
            <h3>  Product Details </h3>

    
            
        {
           filteredKeys.map((itemDetail, index) => (
                <ul className="productInfo" key={index}>
                    <li> <img src= {itemDetail.imgUrl} border="0" width="150" height="200"/> </li>
                    <li> test {itemDetail.title} </li>
                    <li> {itemDetail.size} </li>
                    <li> {itemDetail.color} </li>
                    <li> {itemDetail.brand} </li>
                     <li> {itemDetail.instock}</li>
                    <li> <b> INR </b> {itemDetail.price} </li>
            <button className="btn btn-primary" > Add To Cart  </button> 
                </ul>
              )
            )
         } 

         {
           filterWomen.map((itemDetail, index) => (
                <ul className="productInfo" key={index}>
                    <li> <img src= {itemDetail.imgUrl} border="0" width="150" height="200"/> </li>
                    <li> test {itemDetail.title} </li>
                    <li> {itemDetail.size} </li>
                    <li> {itemDetail.color} </li>
                    <li> {itemDetail.brand} </li>
                     <li> {itemDetail.instock}</li>
                    <li> <b> INR </b> {itemDetail.price} </li>
            <button className="btn btn-primary" > Add To Cart  </button> 
                </ul>
              )
            )
         } 


         {
           filterKid.map((itemDetail, index) => (
                <ul className="productInfo" key={index}>
                    <li> <img src= {itemDetail.imgUrl} border="0" width="150" height="200"/> </li>
                    <li> test {itemDetail.title} </li>
                    <li> {itemDetail.size} </li>
                    <li> {itemDetail.color} </li>
                    <li> {itemDetail.brand} </li>
                     <li> {itemDetail.instock}</li>
                    <li> <b> INR </b> {itemDetail.price} </li>
            <button className="btn btn-primary" > Add To Cart  </button> 
                </ul>
              )
            )
         } 



        </div>
    )
}

   

}
export default ProductDetails