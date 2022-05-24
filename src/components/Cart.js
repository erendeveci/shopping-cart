import React, { useContext, useState } from "react";
import { BooksContext } from "../App";
const Cart = (props) => {
  const context = useContext(BooksContext);
  return (
  
    <>
      
      <div className="row">
        <h3>Cart</h3>
        <p>You should add item</p>
      </div>
      {context.state.cart.map((book) => (
 <div className="row" key={book.id}>
        <div className="col-sm-4 ms-5  d-flex justify-content-start ">
          <img
            src={book.image}
            style={{ width: "80%", height: "90%" }}
          />
          <div className="col-sm-8   ms-2 ">
            <div className="d-flex justify-content-sm-start">
              <h4><b>{book.name}</b></h4>
            </div>
            <div className="d-flex justify-content-sm-start">
              <h5><b>Author : </b>{book.author}</h5>
            </div>
            <div className="d-flex justify-content-sm-start mt-2">
              <h5><b>Price :</b> {book.price}</h5>
            </div>

            <div className="d-flex justify-content-sm-start mt-2">
              <h5><b>Number of Products:</b> {book.count}</h5>
            </div>

            <div className="d-flex justify-content-sm-start mt-2">
              <h5><b>Total :</b> {(book.price *  book.count).toFixed(2)}</h5>
            </div>


            <div className="d-flex justify-content-sm-start mt-5">
              <button type="button" className="btn btn-secondary me-2" onClick={()=>context.increase(book.id)}>
                +
              </button>
              <button type="button" className="btn btn-danger me-2" onClick={()=>context.removeFromCart(book.id)}>
                Delete
              </button>
              <button type="button" className="btn btn-secondary me-2" onClick={()=>context.decrease(book.id)}>
                -
              </button>
            </div>
          </div>
          {/*img*/}
        </div>
      </div>

      ))}
     
    </>
  );
};
export default Cart;
