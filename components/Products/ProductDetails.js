import React from 'react';
import {render} from 'react-dom';
import './product.css';
class ProductDetails extends React.Component {
constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
        mensProductDetailsDisplay:[],
        womensProductDetailsDisplay:[],
        kidsProductDetailsDisplay:[],
        checkOutItem:[]
        // quantity :0
    }



    }
componentDidMount(){
    fetch('https://api.jsonbin.io/b/5ed1dda560775a568584ab13',{
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

// getQuantity = (e) => {
// const quantity = e.target.value;
// this.setState({quantity:quantity})
// }

addToCart = (items) => {
  
    this.setState( state => ({
       checkOutItem:[...state.checkOutItem, items]
    }))
    localStorage.setItem('checkOutItem', JSON.stringify(items))
    localStorage.getItem('checkOutItem',items )
    

//    this.setState({
//         checkOutItem:[{
//             id:items.id,
//             imgUrl:items.imgUrl,
//             title:items.title,
//             price:items.price
//         }]
        
//     })
//      let itemPush =[];
//      for(let i=0; i < items.length; i++){
//          itemPush.push(items);
         
//      }
//      console.log(itemPush)
   }

render(){
   const {mensProductDetailsDisplay, womensProductDetailsDisplay,kidsProductDetailsDisplay,checkOutItem} = this.state;
   const param = this.props.match.params.id;
   console.log(checkOutItem)
  const paramConvert = parseInt(param)
   const filteredKeys = mensProductDetailsDisplay.filter(items => items.id === paramConvert);
   const filterWomen = womensProductDetailsDisplay.filter(items => items.id === paramConvert);
   const filterKid = kidsProductDetailsDisplay.filter(items => items.id === paramConvert)  
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

         {
           filterWomen.map((itemDetail, index) => 
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
                <h3> {itemDetail.instock}</h3>
                {/* <h3> <input type="number" 
                      onInput = {(e)=> this.getQuantity(e)}
                      onKeyUp = {(e)=> this.getQuantity(e)}/>  </h3>               
               <h3> <b> INR </b> {itemDetail.price} </h3> */}
       <button className="btn btn-danger" onClick={(e) => this.addToCart(itemDetail)}> Add To Cart  </button> 
       </div>
       </div>)
              
            
         } 


         {
           filterKid.map((itemDetail, index) => 
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
                <h3> {itemDetail.instock}</h3>
                {/* <h3> <input type="number" 
                      onInput = {(e)=> this.getQuantity(e)}
                      onKeyUp = {(e)=> this.getQuantity(e)}/>  </h3> */}
               <h3> <b> INR </b> {itemDetail.price} </h3>
         <button className="btn btn-danger" onClick={(e) => this.addToCart(itemDetail)} > Add To Cart  </button> 
       </div>
       </div>
              
            )
         } 	
         <br/>
         <div className ="row">
         {/* { checkOutItem.map((items,index) => (
         
            <table   key={index} className="table table-hover table-condensed" >
            <thead>
                <tr>
                    <th> Product </th>
                    <th> Title </th>
                    <th> Quantity </th>
                    <th> Price </th>
                    <th> Subtotal </th>

                </tr>
            </thead>
            <tbody >
            <tr>
            <td> <img src= {items.imgUrl} border="0" width="150" height="200"/> </td>
            <td> {items.title} </td>
            <td> {quantity} </td>
            <td> {items.price} </td>
            <td> {quantity * items.price}</td>
            </tr>
            </tbody>
            </table>
        )
            ) } */}
            </div>
            	
         </div>
         
        
    )
}

   

}
export default ProductDetails