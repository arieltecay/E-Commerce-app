import data from "./data";

function App() {
  return (
    <div>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              E-Commerce
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <div>
            <div className="row center">
              {data.products.map((prod) => (
                <div key={prod._id} className="card">
                  <a href={`/product/${prod._id}`}>
                    <img className="medium" src={prod.image} alt={prod.name} />
                  </a>
                  <div className="card-body">
                    <a href="product.html">
                      <h2>{prod.name}</h2>
                    </a>
                    <div className="rating">
                      <span>
                        {" "}
                        <i className="fa fa-star"></i>{" "}
                      </span>
                      <span>
                        {" "}
                        <i className="fa fa-star"></i>{" "}
                      </span>
                      <span>
                        {" "}
                        <i className="fa fa-star"></i>{" "}
                      </span>
                      <span>
                        {" "}
                        <i className="fa fa-star"></i>{" "}
                      </span>
                      <span>
                        {" "}
                        <i className="fa fa-star"></i>{" "}
                      </span>
                    </div>
                    <div className="price">${prod.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <footer className="row center">
          All right reserved For Ariel Tecay
        </footer>
      </div>
    </div>
  );
}

export default App;
