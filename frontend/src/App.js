import { data } from "./data";
function App() {
  console.log(data.products[0].image);
  return (
    <div>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="index.html">
              E-Commerce
            </a>
          </div>
          <div>
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <div className="row center">
          {data.products.map((prod) => (
            <div className="card" key={prod.id}>
              <a href={`/products/${prod.id}`}>
                <img className="medium" src={prod.image} alt="Product" />
              </a>
              <div className="card-body">
                <a href={`/products/${prod.id}`}>
                  <h2>{prod.name}</h2>
                </a>
                <div className="rating">
                  {prod.rating}
                  <span>
                    <i class="fa fa-star"></i>
                  </span>
                  <span>
                    <i class="fa fa-star"></i>
                  </span>
                  <span>
                    <i class="fa fa-star"></i>
                  </span>
                  <span>
                    <i class="fa fa-star"></i>
                  </span>
                  <span>
                    <i class="fa fa-star-half-o"></i>
                  </span>
                </div>
                <div className="price">${prod.price}</div>
              </div>
            </div>
          ))}
        </div>
        <footer className="row center">
          All Rigth Reserved for company Ariel Tecay
        </footer>
      </div>
    </div>
  );
}

export default App;
