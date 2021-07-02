import { data } from "./data";
import Product from "./components/Product";
function App() {
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
            <Product key={prod.id} product={prod} />
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
