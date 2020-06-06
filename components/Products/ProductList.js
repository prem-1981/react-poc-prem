/* eslint-disable */ 
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
        productsCategoryDisplayed:[],
        allChecked:false,
        colors : [
            {id:1,color:'red', isChecked:false},
            {id:2, color:'blue',isChecked:false},{id:3,color:'green',isChecked:false},
            { id:4, color:'maroon',isChecked:false},{id:5,color:'yellow',isChecked:false}
        ]
     
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
            let productsCategoryDisplayed;
            let params = this.props.match.params.category;
            if(params === "mens"){
                productsCategoryDisplayed = data ? data.filter.section.Men:null
            }else if(params === "womens"){
                productsCategoryDisplayed = data ? data.filter.section.Women:null
            }else if(params === "kids"){
                productsCategoryDisplayed = data ? data.filter.section.Kids:null
            } else {
                productsCategoryDisplayed ="No Category"
            }
           
           // console.log(data);
            this.setState({
                productsCategoryDisplayed:productsCategoryDisplayed
            })
            //this.props.sendItem(data)
           // console.log('success', data)
        })
       }

componentDidUpdate(){
    //console.log(prevState);
    //console.log(prevProps)

}


buttonClick = (e,item) => {
e.preventDefault();
 const itemID = item.id;
 const params = this.props.match.params.category;
 //console.log(params)
 const url = "productdetails"
 this.props.history.push(`${params}/${url}/${itemID}`);
 //console.log(itemID)
 
}
handleChange = evt =>
{
let itemName = evt.target.name;
console.log(itemName)
let checked = evt.target.checked;
//console.log(checked)
this.setState( prevState=> {
    let {colors, allChecked, productsCategoryDisplayed} = prevState;
  
    if(itemName=== "checkAll")
    {
        allChecked = checked;
        colors = colors.map(coltype => 
        ({...coltype, isChecked:checked})
     )
    } else {

   
         colors = colors.map(coltype =>
     
        coltype.color === itemName ? { ...coltype, isChecked: checked } : coltype
      );
      allChecked = colors.every(coltype => coltype.isChecked);
    }

    if(checked){
        productsCategoryDisplayed = productsCategoryDisplayed.filter(items=> items.color=== itemName).
        map(items=> ({...items}))
    }else{
        productsCategoryDisplayed = productsCategoryDisplayed.map(items=> ({...items}))
    }

    return {colors, allChecked,productsCategoryDisplayed}
},)

  }
render(){
const params = this.props.match.params.category;
//console.log(params);
const categoryName = ['Mens','Womens','Kids']
const { productsCategoryDisplayed } = this.state;
return(

        <div className="container">
            <div className="row">
            <div className="col-2">  
           <br/>
           <br/>
            <ul className="list-unstyled">
              
              <li> <h6> Filter By  </h6></li> 
            
              <li><label> Color </label> </li>  
              <input
                type="checkbox"
                name="checkAll"
                checked={this.state.allChecked}
                onChange={this.handleChange}
                />
                Check all
            
              {this.state.colors.map(coltype => 
                  <li key={coltype.id}> 
                  <label> 
                      
                <input type="checkbox"  
                  name = {coltype.color}
                  value={coltype.color}                
                  checked={coltype.isChecked}
                  onChange={this.handleChange}/> 

                  {coltype.color} </label> </li>
               
              )}
               
              <hr/>
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
         productsCategoryDisplayed.map((item,index) =>
            <ul className="productInfo" key={index}>
                <li> <img src= {item.imgUrl} border="0" width="150" height="200"/> </li>
                <li className= "custom-style"> {item.title} </li>
                <li> {item.size} </li>
                <li> {item.color} </li>
                <li> {item.brand} </li>
            <li> {item.instock}</li>
            <li className="red-color"> <b> INR </b> {item.price} </li>
            <button onClick={(e)=> {this.buttonClick(e,item)}} className="btn btn-danger btn-block" > View  </button> 
            </ul>)
            }          
                        
             </div>
        </div> 
        </div>
        

    )
}

}

export default ProductList