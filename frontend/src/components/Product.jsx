import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div>
      {product && (
        <div className="card" key={product._id}>
          <a href={`/product/${product._id}`}>
            <img className="medium" src={product.image} alt={product.name} />
          </a>
          <div className="card-body">
            <a href={`/product/${product._id}`}>
              <h2>{product.name}</h2>
            </a>
            <div className="rating">
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </div>
            <div className="price">${product.price}</div>
            <div className="price">{product.descriptio}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
