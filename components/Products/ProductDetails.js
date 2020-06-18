/* eslint-disable */ 
import React from 'react';
import {render} from 'react-dom';
import './product.css';
class ProductDetails extends React.Component {
constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
        productDetailsDisplay:[]
    }
    }
componentDidMount(){
   //localStorage.clear()
    fetch('https://api.jsonbin.io/b/5ed5d72879382f568bd1797a',{
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
      let productDetailsDisplay;
      let params = this.props.match.params.category;
      console.log(params)
      if(params === "mens"){
        productDetailsDisplay = data ? data.section.Men:null
      }else if(params === "womens"){
        productDetailsDisplay = data ? data.section.Women:null
      }else if(params === "kids"){
        productDetailsDisplay = data ? data.section.Kids:null
      } else {
        productDetailsDisplay ="No Details"
      }
     
      console.log(data);
      this.setState({
        productDetailsDisplay:productDetailsDisplay
    })
        
})
}

componentDidUpdate(prevProps,prevState){
  //  console.log(prevState);
   // console.log(prevProps)

}
// shouldComponentUpdate(nextProps, nextState){
// console.log(nextProps);
// console.log(nextState)
// }
// getQuantity = (e) => {
// const quantity = e.target.value;
// this.setState({quantity:quantity})
// }

addToCart = (items) => {
   // localStorage.setItem('', JSON.stringify(items))
    const oldproduct = localStorage.getItem('checkOutItem') ? localStorage.getItem('checkOutItem') : "[]";
    //JSON.parse(localStorage.getItem('myMovie')||"[]");
   // localStorage.getItem('checkOutItem',items )
    const arrayProduct =  JSON.parse(oldproduct);
    const subtotals =items.quantity * items.price;
   const addNewObjects = {
    id:items.id,
    title:items.title,
    size:items.title,
    quantity:items.quantity,
    price:items.price,
    inStock:items.instock,
    imgUrl:items.imgUrl,
    color:items.color,
    brand:items.brand,
    subtotals:subtotals
   }
    arrayProduct.push(addNewObjects);
    console.log(arrayProduct);
    localStorage.setItem('checkOutItem', JSON.stringify(arrayProduct));    
    // this.setState( state => ({
    //     checkOutItem:[...state.checkOutItem, items]
    //  }))
    this.props.cartCount(arrayProduct.length)
    this.props.history.push("/checkout"); 
   }

render(){
   const {productDetailsDisplay,checkOutItem} = this.state;
   const param = this.props.match.params.id;
   //console.log(checkOutItem)
  const paramConvert = parseInt(param)
   const filteredKeys = productDetailsDisplay.filter(items => items.id === paramConvert);
    return(
        <div className="container">
            <h3>  Product Details </h3>
        {
           filteredKeys.map((itemDetail, index) => 
               <div className="row" key ={index}>
                 <div className="col-2 item-photo">
                 <img src= {itemDetail.imgUrl} border="0" width="150" height="200"/> 
                 </div>
               
                <div className="col-5">
                    <h2> {itemDetail.title} </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     </p>
                    <h3> {itemDetail.size} </h3>
                    <h3> {itemDetail.color} </h3>
                    <h3> {itemDetail.brand} </h3>
                    INR <h3>   {itemDetail.price} </h3>
                     <h3> {itemDetail.instock}</h3>
                     {/* <h3> <input type="number" 
                      onInput = {(e)=> this.getQuantity(e)}
                      onKeyUp = {(e)=> this.getQuantity(e)}/>  </h3>
                    <h3> <b> INR </b> {itemDetail.price} </h3> */}
                <button onClick={(e) => this.addToCart(itemDetail)} className="btn btn-danger" > Add To Cart  </button> 
            </div>
            </div>  
              )
            
         } 
         </div>
    )
}

   

}
export default ProductDetails