import Product from "./components/Product";
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
                <Product key={prod._id} product ={prod} />
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
