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
    this.state = {
        //showing: false,
        mensData:[],
        womensData:[],
        kidsData:[]
     
    }
}
    componentDidMount(){
        fetch('https://api.jsonbin.io/b/5eccb12ee91d1e45d1119b91' ,{
          method:'GET',
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
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
// this.setState({
//     showing: true,
//     productData:[{
//         id:item.id,
//         title:item.title,
//         imgUrl:item.imgUrl,
//         size:item.size,
//         price:item.price,
//         brand:item.brand,
//         color:item.color,
//         instock:item.instock
        
//     }]
// })

}

render(){
const params = this.props.match.params.category;
console.log(params);
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
            <div className="col-2">  Filter </div>
            <div className="col-7">  
            <h2> Mens Category</h2>

            
        
        {         
           params === "mens" ? 
           mensData.map((item,index) =>
            <ul className="productInfo" key={index}>
                <li> <img src= {item.imgUrl} border="0" width="150" height="200"/> </li>
                <li> {item.title} </li>
                <li> {item.size} </li>
                <li> {item.color} </li>
                <li> {item.brand} </li>
            <li> {item.instock}</li>
            <li> <b> INR </b> {item.price} </li>
                <button  className="btn btn-primary" > View  </button> 
            </ul>
            ): params === "womens" ? womensData.map((item,index) =>
            <ul className="productInfo" key={index}>
                <li> <img src= {item.imgUrl} border="0" width="150" height="200"/> </li>
                <li> {item.title} </li>
                <li> {item.size} </li>
                <li> {item.color} </li>
                <li> {item.brand} </li>
            <li> {item.instock}</li>
            <li> <b> INR </b> {item.price} </li>
                <button  className="btn btn-primary" > View  </button> 
            </ul>
            ): params === "kids" ? kidsData.map((item,index) =>
            <ul className="productInfo" key={index}>
                <li> <img src= {item.imgUrl} border="0" width="150" height="200"/> </li>
                <li> {item.title} </li>
                <li> {item.size} </li>
                <li> {item.color} </li>
                <li> {item.brand} </li>
            <li> {item.instock}</li>
            <li> <b> INR </b> {item.price} </li>
                <button  className="btn btn-primary" > View  </button> 
            </ul>
            ) : "No category"
        }



            


            {/* <div style={{ display: showing ? "none" : "block" }}> 
            {params === "mens" ? mensCategory: params === "womens" ? womensCategory : params=== "kids" ? kidsCategory : "No category"} 
            
            
            </div> */}
            {/* <div style={{ display: showing ? "block" : "none" }}> </div> */}
                        
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