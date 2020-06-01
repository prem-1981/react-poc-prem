import React from 'react'
import {render} from 'react-dom';
import {Link} from 'react-router-dom'
class Checkout extends React.Component {
constructor(props){
super(props)
this.state = {
    quantity:1
    }
    
}

componentDidMount(){
   // localStorage.clear()
}

getLocalItems = (quantity,total) =>{
console.log(quantity,total);
const quantotal = {
    quantity:quantity,
    total:total
}
const cartItemDetails = localStorage.setItem('cartItem', JSON.stringify(quantotal));
this.props.history.push("/cart");
//const cartItemDetail = localStorage.getItem(JSON.parse(cartItemDetails))
}

getQuantity = (e) => {
    const quantity = e.target.value;
    this.setState({quantity:quantity})
    }
//console.log(JSON.parse(checkOutData));
render(){
    const {quantity} = this.state;
    const checkOutData = localStorage.getItem('checkOutItem')
    const gettingObj = JSON.parse(checkOutData);
    console.log(gettingObj)
   
     return (
     
        <div className="container">
        {/* <h1> {this.props.user}</h1> */}
        <table  className="table table-hover table-condensed">
                        <thead>
                            <tr>
                                <th >Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th className="text-center">Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-th="Product">
                                    <div className="row">
                                        <div className="col-sm-2 hidden-xs"><img src={gettingObj.imgUrl} alt="..." className="img-responsive" width="150" height="200"/></div>
                                        <div className="col-sm-10">
                                            <h4 className="nomargin">{gettingObj.title}</h4>
                                            <p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>
                                </td>
                                <td data-th="Price"> {gettingObj.price}</td>
                                <td data-th="Quantity">
                                <input type="number" min="1" max ="100" 
                                    onInput = {(e)=> this.getQuantity(e)}
                                    onKeyUp = {(e)=> this.getQuantity(e)}/>
                                </td>
                                <td data-th="Subtotal" className="text-center">  INR {quantity * gettingObj.price}</td>
                                <td className="actions" data-th="">
                                   
                                    <button className="btn btn-danger btn-sm"><i className="fa fa-trash-o"> X </i></button>								
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="visible-xs">
                                <td className="text-center"><strong></strong></td>
                            </tr>
                            <tr>
                                <td><Link to ='/landing' className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</Link></td>
                                <td colSpan="2" className="hidden-xs"></td>
                                <td className="hidden-xs text-center"><strong> INR {quantity * gettingObj.price} </strong></td>
                                <td><button  
                                onClick = {(e) => {this.getLocalItems(quantity, quantity * gettingObj.price)}}
                                className="btn btn-success btn-block">Checkout </button></td>
                            </tr>
                        </tfoot>
                    </table>
    </div>

 
    )
} 
}
export default Checkout