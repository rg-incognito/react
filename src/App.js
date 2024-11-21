import { useEffect, useState } from 'react';
import './App.css';
import ProductList from './pages/ProductList';
import { fetchProducts } from './services/api';
import SideNav from './components/SideNav';
import SignUp from './components/SignUp';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch('https://dummyjson.com/products')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data.products); // Use data.products to access the array
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching products:', error);
  //       setLoading(false);
  //     });
  // }, []);
  useEffect(() => {
    // Fetch data using the service
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);
  return (
    <div>
      <SideNav/>
      <SignUp/>
    <h1 style={{textAlign: 'center'}}>Product List</h1>
    {loading ? <p>Loading...</p> : <ProductList products={products} />}
  </div>
  );
}

export default App;
