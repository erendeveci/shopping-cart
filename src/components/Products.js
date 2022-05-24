import { useContext } from "react";
import { BooksContext } from "../App";
const Products = () => {
  const context = useContext(BooksContext);
  return (
    <>
      <div className="row">
        <h3>Products</h3>
        <p>Products Component</p>
      </div>
      {context.state.bookList.map((book) => (
        <div className="row" key={book.id}>
           <div className="col-sm-4 ms-5  d-flex justify-content-start ">
            <img src={book.image}   style={{ width: "80%", height: "90%" }} />
            {/*img*/}
          </div>
          <div className="col-sm-6 mt-3 ">
            <div className="d-flex justify-content-sm-start">
              <h3>{book.name}</h3   >
            </div>
            <div className="d-flex justify-content-sm-start">
              <h5><b>Author: </b>{book.author}</h5>
            </div>
            <div className="d-flex justify-content-sm-start mt-2">
              <h5><b>Price: </b>{book.price}</h5>
            </div>

            <div className="d-flex justify-content-sm-start mt-3">
              <button type="button" className="btn btn-primary me-2" onClick={()=>context.addBook(book)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Products;
