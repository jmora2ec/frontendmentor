import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import './app.scss';
import image1 from './assets/images/image-product-1.jpg';
import image2 from './assets/images/image-product-2.jpg';
import image3 from './assets/images/image-product-3.jpg';
import image4 from './assets/images/image-product-4.jpg';
import Slides from './components/slides/Slides';
import Product from './pages/Product';
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import ProductItemContext from './context/ProductItemContext';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [items, setItems] = useState([]);
  const product = {
    id: 'product_001',
    images: [image1, image2, image3, image4],
    name: 'Fall Limited Edition',
    price: '125.00',
    regularPrice: '250.00',
    discount: 50,
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everythingthe weather can offer.",
  };

  function showShoppingCart() {
    setShowCart((prevState) => !prevState);
  }

  function addToCart(item) {
    //validar aca que se actualice solo la cantidad si el producto es el mismo.
    //find in item element que tiene el mismo item.id, si lo
    //encuentra actualizar la cantidad, sino...hacer push
    //update
    //this files has change
    setItems((prevState) => {
      const newState = [...prevState];
      newState.push(item);
      return newState;
    });
  }

  return (
    <div className="app">
      <Navbar showCartHandle={showShoppingCart} />
      <ShoppingCart showCart={showCart} items={items} />
      <Product product={product} addToCart={addToCart} />
    </div>
  );
}

export default App;
