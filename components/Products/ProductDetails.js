//https://bootsnipp.com/snippets/A2pXB
import React from 'react';
import {render} from 'react-dom';
import './product.css';
class ProductDetails extends React.Component {
constructor(props) {
    super(props)
    console.log(this.props)
   // https://api.jsonbin.io/b/5ed0891b79382f568bcef512
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
      console.log('success', data)        
      })
}


render(){
    return(
        <div>
            {/* <h3> ProductDetails </h3>
            {this.props.productData} */}
        </div>
    )
}

   

}
export default ProductDetails