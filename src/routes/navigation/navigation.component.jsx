import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import './navigation.styles.scss'
// import {ReactComponent as Logo} from '../../assets/beeyooreeful'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
        {/* <Logo className = 'logo' /> */}
        </Link>
        <div className="nav-links-container">
        <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
