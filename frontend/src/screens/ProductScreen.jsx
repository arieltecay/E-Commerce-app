import data from "../data.js";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

export default function ProductScreen(props) {
  const id = props.match.params.id;
  // console.log(data.products);
  const product = data.products.find((x) => x._id === 5);
  if (!product) {
    return (
      <div>
        <div>
          <Link to="/">Back</Link>
        </div>
        <div>Not a product</div>
      </div>
    );
  }
  return (
    <div>
      <Link to="/">Back</Link>
      <div className="row top">
        <div className="col-2">
          <img src={product.image} alt={product.name} className="large" />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name} </h1>
            </li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${product.price} </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status:</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="succes">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add To Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
