import React from 'react'
import {render} from 'react-dom';
import {Link} from 'react-router-dom'
class Cart extends React.Component {
constructor(props){
super(props)
this.state = {
    userProfile:{
        name:"Premkumar",
        address:"Bank Avenue colony, Bangalore,",
        pincode:"560043, Karnataka",
        mobile:"9980429832",
    },
    checkCart:[]
}
    
}

componentDidMount(){
    // localStorage.clear()
    const products = JSON.parse(localStorage.getItem('checkOutItem'));
    console.log(products);
    this.setState({checkCart:products}   )
}

   
render(){
    const {checkCart} = this.state
    const sum = checkCart.reduce((index, items) => {
        return items.price * items.quantity
       }, 0);
     const avg = sum *checkCart.length

   
    return (
        <div className="container-fluid">
        <div className="row">
        <h3>  Order Summary Details</h3>
        <div className="col-10">
        <h4> Billing Address </h4>
           
                <h5>  {this.state.userProfile.name} </h5>
                <h6> {this.state.userProfile.address},{this.state.userProfile.pincode} </h6>
                <h6> Contact No : {this.state.userProfile.mobile}</h6>
           
        </div>
        </div>
        <div className="row">
        <div className="col-10">
        <table    className="table table-hover table-condensed" >
         <thead>
             <tr>
                 <th> Product </th>
                 <th> Title </th>
                 <th> Quantity </th>
                 <th> Price </th>
                 <th> Subtotal </th>

             </tr>
         </thead>

         { checkCart ? checkCart.map((items,index) => (
       
         
         <tbody key={index} >
         <tr>
         <td>  <img src= {items.imgUrl} border="0" width="50" height="60"/> </td>
         <td> {items.title} </td>
         <td> {items.quantity} </td>
         <td> {items.price} </td>
         <td> {items.price * items.quantity} </td>
         </tr>
         </tbody>
         
         
     )
       ): "No Pending Checkout"}
        <tfoot>
                    <tr>
                    <td colSpan="2" align="right"> 
                               
                             </td>
                    <td colSpan="3" align="right">  Total Payment <span className="net"> INR </span>  <h3>  <span className="amount">   {avg}  </span> </h3>  <button className="btn btn-primary">
                                Make Payment 
                            </button>  </td>

                    

                        
                    </tr>
                </tfoot>
       </table>
        
        
        
        
        
        
         {/* <table className="table table-hover table-condensed"> 
         <thead>
                            <tr>
                                <th >Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
            <tr>  
                <td> {this.state.localStorageItemsDisplayed.title} </td>
                <td>   <img src={this.state.localStorageItemsDisplayed.imgUrl} width="150" height="200" className="img-fluid" /> </td>
                 <td> {this.state.localStorageItemsCustom.quantity} </td>
                <td> {this.state.localStorageItemsCustom.total} </td>
            </tr>
            </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4" align="right"> <button className="btn btn-primary">
                                Make Payment
                            </button> </td>

                    </tr>
                </tfoot>
           </table> */}
        </div>
        </div>
            
        </div>
    )
    
    } 
}
export default Cart