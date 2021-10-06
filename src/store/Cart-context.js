import { useReducer } from "react";
import React from "react";

const CartContext = React.createContext({
  item: [],
  totalamount: 0,

  additem: (item) => {},
  removeitem: (id) => {},
  clear: () => {},
});

const defaultcartstate = {
  item: [],
  totalamount: 0,
};
const cartreducer = (state, action) => {
  if (action.type === "add") {
    const updatedtotalamount =
      state.totalamount + action.item.price * action.item.amount;
    const existingindex = state.item.findIndex(
      (item) => item.id === action.item.id
    );
    const existingcartitem = state.item[existingindex];
    let updateditems;

    // console.log(action.item);
    if (existingcartitem) {
      const updateditem = {
        ...existingcartitem,
        amount: existingcartitem.amount + action.item.amount,
      };
      updateditems = state.item;
      updateditems[existingindex] = updateditem;
    } else {
      updateditems = state.item.concat(action.item);
    }
    return {
      item: updateditems,
      totalamount: updatedtotalamount,
    };
  } else if (action.type === "remove") {
    const existingindex = state.item.findIndex(
      (item) => item.id === action.item.id
    );
    const existingcartitem = state.item[existingindex];
    const updatedtotalamount = state.totalamount - existingcartitem.price;
    let updateditems;
    // console.log(existingcartitem);
    if (existingcartitem.amount === 1) {
      updateditems = state.item.filter((item) => item.id !== action.item.id);
    } else {
      const updateditem = {
        ...existingcartitem,
        amount: existingcartitem.amount - 1,
      };

      updateditems = state.item;
      updateditems[existingindex] = updateditem;
    }

    return {
      item: updateditems,
      totalamount: updatedtotalamount,
    };
  } else {
    return defaultcartstate;
  }
};

export const CartProvider = (props) => {
  const [cartstate, dispatchcartaction] = useReducer(
    cartreducer,
    defaultcartstate
  );
  const additemhandler = (item) => {
    dispatchcartaction({ type: "add", item: item });
  };
  const removeitemhandler = (item) => {
    dispatchcartaction({ type: "remove", item: item });
  };
  const clearcart = () => {
    dispatchcartaction({ type: "clear" });
  };
  const cartcontext = {
    item: cartstate.item,
    totalamount: cartstate.totalamount,
    additem: additemhandler,
    removeitem: removeitemhandler,
    clear: clearcart,
  };
  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
