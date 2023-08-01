import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {

  state = {
    products:[
    {id:219812,code: 'toshiba c3',price:2000,onSale:true,count:101},
    {id:45877,code: 'sams c3',price:500,onSale:true,count:202},
    {id:98742,code: 'ert c3',price:400,onSale:false,count:456},
    {id:72435,code: 'oppo c3',price:700,onSale:true,count:78},
    {id:4658,code: 'shawmi c3',price:500,onSale:false,count:748},
    {id:7892,code: 'ajax c3',price:999,onSale:true,count:63},
    {id:7893,code: 'tyrui c3',price:777,onSale:false,count:478},
    {id:569,code: 'araby ',price:777,onSale:false,count:478},
    ]
}

// 1- create fun
deleteElement = (idOfDeleteElem) => {
  console.log('product delete' + idOfDeleteElem);

  //three steps to Edit state:
  // 1- create Copy of product
  let newArr = [...this.state.products]

  //2- we must use filter to edit it
  let resArr = newArr.filter(function(product) {return product.id !== idOfDeleteElem})

  // 3- use setState
  this.setState({products:resArr})

}

//update function
updateProduct = (obj, step) => {
  // 1- 
  let newArr = [...this.state.products]

  //2- 
  let inx = newArr.indexOf(obj);
  newArr[inx].count =  newArr[inx].count+ step;

  //3-
  this.setState({products:newArr})
}
   

  render() {
    return <>
    <div className='text-center bg-danger p-4'> 
      <div className="container">
        <div className="row gy-4 p-2 mb-5">

        {this.state.products.map((product)=> <Child upd = {this.updateProduct}  key={product.id} productDEtails = {product} del = {this.deleteElement} />)}

        </div> 
      </div>


    </div>
    </>
  }
}
