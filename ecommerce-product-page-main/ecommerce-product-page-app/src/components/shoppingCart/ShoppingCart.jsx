import './shoppingCart.scss';
import '../../app.scss';

const ShoppingCart = (props) => {
  const items = props.items;
  // const items = [
  //   { name: 'Autum Limited Edition', price: 125.0, quantity: 3, image: '' },
  // ];
  let content = '';
  if (items.length > 0) {
    content = (
      <div className="items">
        {items.map((item, key) => (
          <div className="cartItem" key={key}>
            <img src="" alt="" className="cartItem__image" />
            <div className="cartItem__detail">
              <h3 className="item-name">{item.name}</h3>
              <span className="item-price">{item.price}</span>
              <span className="item-quantity">x{item.quantity}</span>
              <span className="item-total">{item.price * item.quantity}</span>
            </div>
            <button className="item-delete">delete</button>
          </div>
        ))}
        <button className="btn-checkout"></button>
      </div>
    );
  } else {
    content = <div className="items">Your cart is empty.</div>;
  }

  return (
    <div className={props.showCart ? 'shoppingCart active' : 'shoppingCart'}>
      <div className="header">Cart</div>
      <div className="content">{content}</div>
    </div>
  );
};

export default ShoppingCart;
