import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

import { BiLogIn } from "react-icons/bi";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div>
        <BiLogIn className={classes.logout} />
</div>
        <h1>Store</h1>
        <div className={classes.link}>Home</div>

        <HeaderCartButton onclick={props.onclick} />
     
      </header>
    </Fragment>
  );
};

export default Header;
