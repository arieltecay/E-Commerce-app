import data from "../data";
import Rating from "../components/Rating";

export default function ProductScreen(props) {
  // const id = props.match.params.id;
  const product = data.products.find((x) => x.id === 2);
  return (
    <div>
      {product && (
        <div className="row">
          <div className="col-2">
            <img className="large" src={product.image} alt={product.name} />
          </div>
          <div className="col-1">
            <ul>
              <li>
                <h1>{product.name} </h1>
              </li>
              <li>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                ></Rating>
              </li>
              <li>Price: {product.price} </li>
              <li>Descriptcion: {product.description} </li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <div className="row">
                    <div>Price</div>
                    <div className="price">${product.price}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Status: </div>
                    <div>
                      {product.countInStock > 0 ? (
                        <span className="succes">In Stock</span>
                      ) : (
                        <span>Unavailable </span>
                      )}
                    </div>
                  </div>
                </li>
                <li>
                  <button className="primary block">Add to Cart</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
