import { useState } from 'react';
import BurgerIcon from '../burgerIcon/BurgerIcon';
import Menu from '../menu/Menu';
import '../../app.scss';
import './navbar.scss';
import ShoppingCartIcon from '../shoppingCartIcon/ShoppingCartIcon';
import UserIcon from '../avatar/Avatar';

const Navbar = (props) => {
  const [menuActive, setMenuActive] = useState(false);
  const handleClick = () => {
    setMenuActive((prevValue) => !prevValue);
  };
  return (
    <div className="nav-bar">
      <BurgerIcon
        size="28"
        barThick="12"
        barSize="70"
        barRadius="0"
        onClick={handleClick}
      />
      <div className="logo">sneakers</div>
      <div className="widgets">
        <ShoppingCartIcon onClick={props.showCartHandle} />
        <UserIcon />
      </div>
      <Menu active={menuActive} />
    </div>
  );
};

export default Navbar;
