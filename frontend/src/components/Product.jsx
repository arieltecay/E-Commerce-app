import Rating from "./Rating";

const Product = ({ product }) => {
    console.log(product);
  return (
    <div>
      {product && (
        <div className="card" key={product.id}>
          <a href={`/products/${product.id}`}>
            <img className="medium" src={product.image} alt="Product" />
          </a>
          <div className="card-body">
            <a href={`/products/${product.id}`}>
              <h2>{product.name}</h2>
            </a>
            <div className="rating">
              {product.rating}
              <Rating />
             
            </div>
            <div className="price">${product.price}</div>
            <div className="price">{product.descriptio }</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
