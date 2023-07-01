import { Fragment } from "react";
import image from "../../assets/landing-meals-banner.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h3>Meals in the Deals</h3>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="A table full of decilious dishes" />
      </div>
    </Fragment>
  );
};

export default Header;
