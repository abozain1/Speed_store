import classes from "./chekout.module.css";
import { Fragment } from "react";
const Chekout = (props) => {
 
  const confirmhandler = (event) => {
    event.preventDefault();
  
    props.onconfirm();
  };
  return (
    <Fragment>
   
      <div className={classes.actions}>
        <button type="button" onClick={props.onclick}>
          Cancel
        </button>
        <button onClick={confirmhandler} className={classes.submit}>Confirm !</button>
      </div>
      </Fragment>
   
  );
};

export default Chekout;
