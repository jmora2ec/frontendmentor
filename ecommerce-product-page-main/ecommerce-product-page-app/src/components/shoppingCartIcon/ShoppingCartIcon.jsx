import iconCart from '../../assets/images/icon-cart.svg';
import '../../app.scss';
import './shoppingCartIcon.scss';

const ShoppingCartIcon = (props) => {
  return (
    <div className="shoppingCartIcon" onClick={props.onClick}>
      <img src={iconCart} alt="" />
    </div>
  );
};

export default ShoppingCartIcon;
