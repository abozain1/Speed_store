import classes from "./MealItemForm.module.css";
import Input from "../../ui/Input";
import { useRef} from "react";

const MealItemForm = (props) => {

  const amountinputref = useRef();
  const submithandler = (Event) => {
    Event.preventDefault();
    const enteredamount = amountinputref.current.value;
    const enteredamountnumber = +enteredamount;
   
    props.onaddtocart(enteredamountnumber);
  };
  return (
    <form onSubmit={submithandler} className={classes.form}>
      <Input
        ref={amountinputref}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
    
    </form>
  );
};

export default MealItemForm;
