import { CartProvider } from "../store/Cart-context";
import Cart from "../components/cart/cart/Cart";
import Header from "../components/cart/layout/Header";

import { Fragment,useState } from "react";
import Meals from "../components/cart/meals/Meals";

const Store=()=>{
    const [cartisshown, setcartisshown] = useState(false);
    const showcarthandler = () => {
      setcartisshown(true);
    };
    const hidecarthandler = () => {
      setcartisshown(false);
    };
    return(
        <Fragment>
             <CartProvider>
      {cartisshown && <Cart onclick={hidecarthandler} />}
      <Header onclick={showcarthandler} />
      <main >
        <Meals  />
      </main>
      </CartProvider>
        </Fragment>
    )
};
export default Store;