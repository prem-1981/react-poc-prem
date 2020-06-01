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
    localStorageItemsDisplayed:[],
    localStorageItemsCustom:[]

}
    
}

componentDidMount(){
   
const localStorageItems = localStorage.getItem('checkOutItem');
const localStorageFewItems = localStorage.getItem('cartItem');
//console.log(localStorageItems, localStorageFewItems)
const gettingObj = JSON.parse(localStorageItems);
const getItemObj = JSON.parse(localStorageFewItems)
console.log(gettingObj,getItemObj)
this.setState({
    localStorageItemsDisplayed:gettingObj,
    localStorageItemsCustom:getItemObj
})
    
    
}

render(){
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
         <table className="table table-hover table-condensed"> 
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
           </table>
        </div>
        </div>
            
        </div>
    )
    
    } 
}
export default Cart