
import classes from "./cartcheck.module.css";

import { useState, Fragment } from "react";

const Cartcheck = () => {
  const [checked, setchecked] = useState(true);
  const [checked2, setchecked2] = useState(true);
  const [checked3, setchecked3] = useState(true);
  const [checked4, setchecked4] = useState(false);
  const [checked5, setchecked5] = useState(false);
  const [checked6, setchecked6] = useState(false);
  const togglehandler = () => {
    setchecked(!checked);
  };
  const togglehandler2 = () => {
    setchecked2(!checked2);
  };
  const togglehandler3 = () => {
    setchecked3(!checked3);
  };
  const togglehandler4 = () => {
    setchecked4(!checked4);
  };
  const togglehandler5 = () => {
    setchecked5(!checked5);
  };
  const togglehandler6 = () => {
    setchecked6(!checked6);
  };
  return (
    <Fragment>
      <div className={classes.form}>
        <p>View properties</p>
        <div className={classes.main}>
        <div className={classes.holder1}>
          <label className={classes.check} >
            Dum
            <div onClick={togglehandler}
              className={`${classes.checkmark} ${
                checked ? classes.checked : ""
              }`}
            />
          </label>
          <label className={classes.check} >
            Dum
            <div onClick={togglehandler2}
              className={`${classes.checkmark} ${
                checked2 ? classes.checked : ""
              }`}
            />
          </label>
          <label className={classes.check} >
            Dum
            <div onClick={togglehandler3}
              className={`${classes.checkmark} ${
                checked3 ? classes.checked : ""
              }`}
            />
          </label>
        </div>
        <div className={classes.holder2}>
          <label className={classes.check} >
            Dum
            <div onClick={togglehandler4}
              className={`${classes.checkmark} ${
                checked4 ? classes.checked : ""
              }`}
            />
          </label>

          <label className={classes.check} >
            Dum
            <div onClick={togglehandler5}
              className={`${classes.checkmark} ${
                checked5 ? classes.checked : ""
              }`}
            />
          </label>

          <label className={classes.check} >
            Dum
            <div onClick={togglehandler6}
              className={`${classes.checkmark} ${
                checked6 ? classes.checked : ""
              }`}
            />
          </label>
        </div>
        </div>
      </div>

     
    </Fragment>
  );
};
export default Cartcheck;
