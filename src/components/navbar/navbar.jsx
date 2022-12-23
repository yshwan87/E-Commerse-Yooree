import React, { useState, useEffect, useContext } from "react";
import { Button } from "../button/button2";
import { Link } from "react-router-dom";
import Logo from "../../assets/beyooreeful_logo.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import "./navbar.scss";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img className="navbar-logo-img" src={Logo} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-links" onClick={closeMobileMenu}>
                Shop
              </Link>
            </li>

            <li className="nav-item">
              <div className="nav-links">
                <CartIcon />
                {isCartOpen && <CartDropdown />}
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-links">
                {button &&
                  (currentUser ? (
                    <Button
                      buttonStyle="btn--outline"
                      linkTo="/"
                      onClick={signOutUser}
                    >
                      SIGN OUT
                    </Button>
                  ) : (
                    <Button buttonStyle="btn--outline" linkTo="/auth">
                      SIGN IN
                    </Button>
                  ))}
              </div>
            </li>

            <li>
              {currentUser ? (
                <Link to="/" className="nav-links-mobile" onClick={signOutUser}>
                  SIGN OUT
                </Link>
              ) : (
                <Link
                  to="/auth"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  SIGN IN
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
