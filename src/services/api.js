
export const fetchProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products; // Return the products array
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Rethrow the error so it can be caught elsewhere
  }
};