import React, { Component } from 'react'

export default class Child extends Component {
  render() {

    // to distrust obj
    let {id, code, price, count, onSale } = this.props.productDEtails;
    console.log(this.props.productDEtails);

    //3- receive method from parent
    let delFun = this.props.del; 

    let update = this.props.upd;






    return <>
    <div className="col-md-3">
        <div className="bg-white text-dark position-relative">
            <h4>Child Component</h4>

            {/* to receive data from parent */}
            <h4>id: {id}</h4>
            <h4>Code: {code}</h4>
            <h4>Price: {price}</h4>
            <h4>Count: {count}</h4>

            {/* 2- create btn  */}
            <button onClick={() => {delFun(id)}} className='btn btn-outline-dark w-100'>delete</button>
            <button onClick={() => { update(this.props.productDEtails, 1)}} className='btn btn-dark w-100'>+</button>
            <button onClick={() => { update(this.props.productDEtails, -1)}} className='btn btn-dark w-100'>-</button>


           {/* to check data to show or hidden */}
           {onSale?<div className='sale bg-info p-2 top-0 end-0 text-white position-absolute'>Sale</div>:''}
        </div>
    </div>
    </>
  }
} 
