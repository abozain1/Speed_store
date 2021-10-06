import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../../store/Cart-context";
const MealItem = (props) => {
  const cartctx = useContext(CartContext);
  const addtocarthandler = (amount) => {
    cartctx.additem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  let img=props.img;
  return (
    <li className={classes.meal}>
      
      <div>
        <div style={{backgroundImage:`url(${img})`}} className={classes.pic}  >

        </div>
        
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <div>
        <MealItemForm onaddtocart={addtocarthandler} />
      </div>
    </li>
  );
};

export default MealItem;
