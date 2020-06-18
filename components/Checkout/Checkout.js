/* eslint-disable */ 
import React from 'react'
import {render} from 'react-dom';
import {Link} from 'react-router-dom'
import './checkout.css'
class Checkout extends React.Component {
constructor(props){
super(props)
this.state = {
   productCart:[],
   totalArray:[]
    }
    
}

componentDidMount(){
  //localStorage.clear()
   const products = JSON.parse(localStorage.getItem('checkOutItem'));
  console.log(products);
  const sum = products ? products.reduce((prevValue, currentValue) =>
  prevValue + currentValue.subtotals,0) : null;
   this.setState({productCart:products,
    totalArray:sum
})

}
componentDidUpdate(nextState, index){


}
shouldComponentUpdate(nextProps, nextState){
return true
}

getLocalItems = (e) =>{
this.props.history.push("/cart");
}

getQuantity = (e,items) => {
    const itemQuantity = e.target.value 
    items.quantity = itemQuantity;
    let productCartCopy = this.state.productCart;
   console.log(productCartCopy)
   productCartCopy.forEach(item=>{
    const subtotals = item.quantity * item.price;
    item.subtotals = subtotals
   })

   const sum = productCartCopy ? productCartCopy.reduce((prevValue, currentValue) =>
  prevValue + currentValue.subtotals,0) : null;


   localStorage.setItem('checkOutItem', JSON.stringify(productCartCopy));

   this.setState({
      productCart:productCartCopy,
      totalArray:sum
    }, () => {
      // console.log(this.state.productCart);
      }) 
    }

removeItem = (index)=> {
    let  productArray = this.state ? this.state.productCart :null
    productArray.splice(index,1);
    localStorage.setItem('checkOutItem', JSON.stringify(productArray));
    this.props.cartCount(productArray.length);
    const sum = productArray ? productArray.reduce((prevValue, currentValue) =>
    prevValue + currentValue.subtotals,0) : null;
    console.log(sum);
    //localStorage.setItem('checkOutItem', JSON.stringify('checkOutItem'))
    this.setState({productCart:productArray,
        totalArray:sum
    
    })
  }

render(){
    const {quantity, subtotals,totalArray, productCart} = this.state;
     return (
        <div className="container">
        <table  className="table table-hover table-condensed" >
         <thead>
             <tr>
                 <th> Product </th>
                 <th> Title </th>
                 <th> Quantity </th>
                 <th> Price </th>
                 <th> Subtotal </th>
                 <th> Actions </th>

             </tr>
         </thead>
         { productCart ? productCart.map((items,index) => (
         <tbody key={index}>
         <tr  >
         <td> <img src= {items.imgUrl} border="0" width="50" height="70"/> </td>
         <td> {items.title} </td>
         <td> <input type="value" value={items.quantity}
                                    onChange = {(e)=> this.getQuantity(e,items)}/>  </td>
         <td> {items.price} </td>
         <td> { items.quantity*items.price}</td>
         <td> <button   onClick = {(e) =>{this.removeItem(index)}} className="btn btn-info"> X </button></td>
         </tr>
         </tbody>
         
     )
       ) : " Your Shopping Cart is Empty"}
       <tfoot>
             <tr>
                 <td>
                  <Link to ='/landing' className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</Link>
                    </td>
                <td colSpan="2">
                
                {this.props.user ?
                     <button onClick = {(e) => {this.getLocalItems(e)}}
                                className="btn btn-success btn-block">Checkout
                          </button>  :  "Please Login to contineue the check" } 
                </td>
                <td> 
                                               
                      
                      <h5> <span className="net">    Net Total  </span> </h5>
                </td>
                <td>
                <span className="net"> INR </span>  <h3>  <span className="amount">   
                        {totalArray}
                  </span> </h3> 
                </td>
             
             </tr>
        </tfoot>
       </table>



         


        {/* <h1> {this.props.user}</h1> */}
        {/* <table  className="table table-hover table-condensed">
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
                    </table> */}
    </div>

 
    )
} 
}
export default Checkout