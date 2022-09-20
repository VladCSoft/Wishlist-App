import React , {Component } from 'react';
class AddProduct extends Component {
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  } 
  
  onSubmit(event) {
    event.preventDefault();
    this.props.onAdd(this.nameInput.value, this.priceInput.value, this.linkInput.value);

    this.nameInput.value = '';
    this.priceInput.value = '';
    this.linkInput.value = '';
  }
render(){
  return (
    <form onSubmit={this.onSubmit}>
        <h3>Add Product</h3>
      
        <input placeholder="Name" ref={nameInput => {this.nameInput = nameInput}} />
        <input placeholder="Price" pattern="[0-9]*" ref={priceInput => {this.priceInput = priceInput}} />
        <input placeholder="Link" ref={linkInput => {this.linkInput = linkInput}} />
        <button>Add</button>
        <hr />
    </form>
    );
 }
}

export default AddProduct;
