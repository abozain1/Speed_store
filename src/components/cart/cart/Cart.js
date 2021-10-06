import classes from "./Cart.module.css";
import Modal from "../ui/Modal";
import { useContext, useState } from "react";
import CartContext from "../../../store/Cart-context";
import CartItem from "./CartItem/CartItem";
import Chekout from "./chekout";
import React from "react";
import {GiCheckMark} from "react-icons/gi";

const Cart = (props) => {
  const [ordersent, setordersent] = useState(false);
  const [chekout, setchekout] = useState(false);
  const cartctx = useContext(CartContext);
  const totalamount = cartctx.totalamount.toFixed(2);
  const hasitems = cartctx.item.length > 0;
  const cartitemremovehandler = (item) => {
    cartctx.removeitem({ ...item, amount: 1 });
  };
  const cartitemaddhandler = (item) => {
    cartctx.additem({ ...item, amount: 1 });
  };
  const orderhandler = () => {
    setchekout(true);
   

  };

  const confirmorderhandler =async  (userdata) => {
    // await fetch(
    //   "https://food-application-8d53c-default-rtdb.firebaseio.com/orderdata.json",
    //   {
    //     method: "post",
    //     body: JSON.stringify({
    //       user: userdata,
    //       order: cartctx.item,
    //     }),
    //   }
    // );
    setordersent(true);
    cartctx.clear();
  };
  const cartitem = (
    <ul className={classes["cart-items"]}>
      {cartctx.item.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          amount={item.amount}
          name={item.name}
          onremove={cartitemremovehandler.bind(null, item)}
          onadd={cartitemaddhandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const modalcontent = (
    <React.Fragment>
      <div className={classes.holder}>

     
      {cartitem}
      </div>
      <div className={classes.total}>
     {hasitems&&   <span>Total Amount</span>}
     {!hasitems&&   <span>Your Card Is Empty</span>}
        <span>${totalamount} </span>
      </div>
      {chekout && (
        <Chekout onconfirm={confirmorderhandler} onclick={props.onclick} />
      )}
      {!chekout && (
        <div className={classes.actions}>
          <button onClick={props.onclick} className={classes["button--alt"]}>
            close
          </button>
          {hasitems && (
            <button onClick={orderhandler} className={classes.button}>
              order
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  );
  const completionmessage = (
    <React.Fragment>
      <p className={classes.sentp}>your order was completed      <GiCheckMark className={classes.sent}/>  </p>
     
      <div className={classes.actions}>
        <button onClick={props.onclick} className={classes["button"]}>
          close
        </button>
      </div>
    </React.Fragment>
  );
  return (
    <Modal onclick={props.onclick}>
      {!ordersent && modalcontent}
      {ordersent && completionmessage}
    </Modal>
  );
};

export default Cart;
