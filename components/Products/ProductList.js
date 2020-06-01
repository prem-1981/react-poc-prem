import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import productJSON from './product.json' 
class ProductList extends React.Component {
constructor(props) {
    super(props)
    this.state = {
        //showing: false,
        mensData:[],
        womensData:[],
        kidsData:[]
     
    }
}
    componentDidMount(){
        fetch( "https://api.jsonbin.io/b/5ed1de0760775a568584ab42",{
          method:'GET',
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
           // 'datatype':"json",
            'secret-key':'$2b$10$vKIGuXyJhe4zGQjE8LQGhuqOGLKo6Nog6NoM1DF3BQPOUmRGLI6Zq'
           }
        })
        .then(response => response.json())
        .then(data => {  
            const mensData = data ? data.filter.section.Men:null
            const womensData = data ? data.filter.section.Women :null
            const kidsData = data ? data.filter.section.Kids:null
            console.log(data);
            this.setState({
                mensData:mensData,
                womensData:womensData,
                kidsData:kidsData
            })
            //this.props.sendItem(data)
           // console.log('success', data)
        })
       }

buttonClick = (item) => {
 const itemID = item.id;
 const url = "/productdetails"
 this.props.history.push(`${url}/${itemID}`);
 console.log(itemID)
 
}

render(){
const params = this.props.match.params.category;
console.log(params);
const categoryName = ['Mens','Womens','Kids']
const { mensData , womensData, kidsData} = this.state;
// const productFilter = productItemsDat.filter.section;
// console.log(productItemsDat)
//console.log(mensListItem)
// const womensItem = productFilter.Women;
// const kidsItem = productFilter.Kids

// const mensCategory = productFilter.map((item, index) => 
//  <ul className="productInfo" key={index}>
//      <li> <img src= {item.imgUrl} border="0" width="150" height="200"/> </li>
//     <li> {item.title} </li>
//     <li> {item.size} </li>
//     <li> {item.color} </li>
//     <li> {item.brand} </li>
//    <li> {item.instock}</li>
// <li> <b> INR </b> {item.price} </li>
//     <button onClick={(e)=> {this.buttonClick(item)}} className="btn btn-primary" > View  </button> 
// </ul>
//    )
    
//     const womensCategory = womensItem.map((item, index) => 
// <ul className="productInfo" key={index}>
//     <li> <img src= {item.imgUrl} border="0" width="150" height="200"/> </li>
//     <li> {item.title} </li>
//     <li> {item.size} </li>
//     <li> {item.color} </li>
//     <li> {item.brand} </li>
//     <li> {item.instock}</li>
//     <li> <b> INR </b> {item.price} </li>
//     <button onClick={(e)=> {this.buttonClick(item)}} className="btn btn-primary" > View  </button> 
// </ul>
//     )

//     const kidsCategory = kidsItem.map((item, index) => 
// <ul className="productInfo" key={index}>
//     <li> <img src= {item.imgUrl} border="0" width="150" height="200"/> </li>
//     <li> {item.title} </li>
//     <li> {item.size} </li>
//     <li> {item.color} </li>
//     <li> {item.brand} </li>
//     <li> {item.instock}</li>
//     <li> <b> INR </b> {item.price} </li>
//     <button onClick={(e)=> {this.buttonClick(item)}} className="btn btn-primary" > View  </button> 
// </ul>
//     )


    
// const ItemDetailView = productData.map((items,index) => 
// <ul className="productInfo" key={index}>
// <li> <img src= {items.imgUrl} border="0" width="150" height="200"/> </li>
// <li> {items.title} </li>
// <li> {items.size} </li>
// <li> {items.color} </li>
// <li> {items.brand} </li>
// <li> <b> INR </b> {items.price} </li>
// <li> {items.instock}</li>
// <button className="btn btn-primary" > AddToCart  </button> 
// </ul>  )

 return(

        <div className="container">
            <div className="row">
            <div className="col-2">  
           <br/>
           <br/>
            <ul className="list-unstyled">
              
              <li> <h6> Filter By  </h6></li> 
              <li><label><input type="checkbox" className="all"/> All </label> </li>             
              <li><label><input type="checkbox" name="color" /> Color </label></li>
              <li><label><input type="checkbox" name="size"/> Size</label></li>
              <li><label><input type="checkbox" name="Brand"/> Brand</label></li>
              
            </ul>
        </div>
            
            <div className="col-10"> 
            <br/>
               <h2>  {
                 params === "mens" ? categoryName[0] : params == "womens" ? categoryName[1] : 
                 params === "kids" ? categoryName[2]:null
            
                }
                </h2>
        
        {         
           params === "mens" ? 
           mensData.map((item,index) =>
            <ul className="productInfo" key={index}>
                <li> <img src= {item.imgUrl} border="0" width="150" height="200"/> </li>
                <li className= "custom-style"> {item.title} </li>
                <li> {item.size} </li>
                <li> {item.color} </li>
                <li> {item.brand} </li>
            <li> {item.instock}</li>
            <li className="red-color"> <b> INR </b> {item.price} </li>
            <button onClick={(e)=> {this.buttonClick(item)}} className="btn btn-danger btn-block" > View  </button> 
                
            </ul>
            ): params === "womens" ? womensData.map((item,index) =>
            <ul className="productInfo" key={index}>
                <li> <img src= {item.imgUrl} border="0" width="150" height="200"/> </li>
                <li className="custom-style"> {item.title} </li>
                <li> {item.size} </li>
                <li> {item.color} </li>
                <li> {item.brand} </li>
            <li> {item.instock}</li>
            <li className="red-color"> <b> INR </b> {item.price} </li>
                <button onClick={(e)=> {this.buttonClick(item)}} className="btn btn-danger btn-block" > View  </button> 
            </ul>
            ): params === "kids" ? kidsData.map((item,index) =>
            <ul className="productInfo" key={index}>
                <li> <img src= {item.imgUrl} border="0" width="150" height="200"/> </li>
                <li className="custom-style"> {item.title} </li>
                <li> {item.size} </li>
                <li> {item.color} </li>
                <li> {item.brand} </li>
            <li> {item.instock}</li>
            <li className="red-color"> <b> INR </b> {item.price} </li>
                <button onClick={(e)=> {this.buttonClick(item)}}  className="btn btn-danger btn-block" > View  </button> 
            </ul>
            ) : "No category"
        }



            


            {/* <div style={{ display: showing ? "none" : "block" }}> 
            {params === "mens" ? mensCategory: params === "womens" ? womensCategory : params=== "kids" ? kidsCategory : "No category"} 
            
            
            </div> */}
            {/* <div style={{ display: showing ? "block" : "none" }}> </div> */}
                        
             </div>
        </div> 
        </div>
        

    )
}

}

export default ProductList