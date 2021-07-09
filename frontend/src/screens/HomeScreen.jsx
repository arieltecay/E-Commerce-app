import data from "../data";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <div>
      <div className="row center">
        {data.products.map((prod) => (
          <Product key={prod._id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
