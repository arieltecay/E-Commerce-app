import axios from "axios";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/products");
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((prod) => (
            <Product key={prod._id} product={prod} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
