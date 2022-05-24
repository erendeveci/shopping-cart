import React, { useState, createContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { data } from "./data.js";
import Cart from "./components/Cart";
import Products from "./components/Products";
import context from "react-bootstrap/esm/AccordionContext";

export const BooksContext = createContext();
function App() {
  const [showInfo, setShowInfo] = useState(true);
  

  const [state, setState] = useState({
    bookList: data,
    cart: [],
  });

  const showCart = () => {
    setShowInfo(true); //cart
  };

  const showProducts = () => {
    setShowInfo(false);
  };

  const addBook = (book) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === book.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === book.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...book, count: 1 }],
    });
  };

  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };

  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 0 ? cartItem.count - 1 : 0 }
          : cartItem
      ),
    });
  };

  const removeFromCart = (id) => {

    setState({...state,cart : state.cart.filter((cartItem) => cartItem.id!==id)})

  }
  return (
    <BooksContext.Provider
      value={{ state: state, addBook, decrease, increase,removeFromCart }}
    >
      <div className="App">
        <div className="container-fluid p-5 bg-black text-white text-center">
          <h2>Shopping Cart </h2>
          <button
            type="button"
            className="btn btn-primary me-3"
            onClick={showCart}
          >
            Go to Cart 
          </button>
          <button
            type="button"
            className="btn btn-light ms-2"
            onClick={showProducts}
          >
            View Products
          </button>
        </div>

        <div className="container">
          <div className="row p-3">
            <div className="col-sm-12 mt-5">
              {showInfo ? <Cart /> : <Products />}
            </div>
          </div>
        </div>
      </div>
    </BooksContext.Provider>
  );
}

export default App;
