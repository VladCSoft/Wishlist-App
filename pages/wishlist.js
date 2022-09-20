import React , {Component } from 'react';
import AddProduct from '../context/addproduct.js';
import ProductItem from '../context/productitem.js';
import { useEffect } from "react";

const products = [
  {
    name : 'Exemple',
    price: 'Exemple',
    link: 'Exemple'
  },
];

if (typeof window !== 'undefined') {
const item = localStorage.setItem('products',JSON.stringify(products));
} 

class Wishlist extends Component {
  constructor(props){
    super(props);

    if (typeof window !== 'undefined') {
    this.state ={
      products: JSON.parse(window.localStorage.getItem('products'))
    }};
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentDidMount(){
    const products = this.getproducts();
    this.setState({ products});
  }
  getproducts(){
    return this.state.products
  }
  onAdd(name, price, link){
   const products  = this.getproducts();

   products.push({
     name,
     price,
     link
   })
    this.setState({ products });
  }
  onDelete(name){
    const products = this.getproducts();
    const filteredProducts = products.filter(product =>{
      return product.name !== name;
     
    })
    this.setState({products : filteredProducts});
  }
  onEditSubmit(name,price,link, originalName){
    let products = this.getproducts();

    products = products.map(product =>{
      if(product.name === originalName){
        product.name = name;
        product.price = price;
        product.link = link;
      }
      return product;
    });
    this.setState({products});
  }
render(){
  return (
    <div className="App-Wish">
     <h1 className="Wishlist-title">Wishlist</h1>

     <AddProduct
     onAdd={this.onAdd}
     />
     {
       products.map(product => {
         return(
          <ProductItem 
          key={product.name}
          name={product.name}
          price={product.price}
          link={product.link}
          onDelete={this.onDelete}
          onEditSubmit={this.onEditSubmit}
          />
         );
       }
       )
     }
    </div>
  );
}
}

export default Wishlist;