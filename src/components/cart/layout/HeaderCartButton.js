import { ImPower } from "react-icons/im";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../../store/Cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
  const [btnisbump, setbtnisbump] = useState(false);
  const CartCtx = useContext(CartContext);
  // console.log(CartCtx.item);
  const Numberofcartitems = CartCtx.item.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnclass = `${classes.button} ${btnisbump ? classes.bump : ""}`;
  // const { item } = CartCtx;
  useEffect(() => {
    // if (item.length == 0) {
      // return;
    // } else {
      setbtnisbump(true);
     const timer= setTimeout(() => {
        setbtnisbump(false);
      }, 200);
      return()=>{
        clearTimeout(timer);
      }
    // }
  }, [CartCtx]);
  return (
    <button onClick={props.onclick} className={btnclass}>
     
        <ImPower className={classes.icon} />
     
     
      <span className={classes.badge}>{Numberofcartitems}</span>
    </button>
  );
};

export default HeaderCartButton;
