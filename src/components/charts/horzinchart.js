import { Fragment } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import classes from "./horzinchart.module.css";
import { IoMdAppstore } from "react-icons/io";
const Horzinbar = () => {
  return (
    <Fragment>
        <p className={classes.headline}>Sales By Station</p>
      <div className={classes.container}>
        <div className={classes.holder}>
          <IoMdAppstore />
          <b>Cairo Branch</b>
          <b>62 item</b>
        </div>
        <ProgressBar variant="warning" className={classes.progress} now={40} />
      </div>
      <div  className={classes.container} >
        <div className={classes.holder}>
        <IoMdAppstore />
          <b>Roma Branch</b>
          <b>62 item</b>
        </div>
        <ProgressBar variant="warning" className={classes.progress} now={40} />
      </div>
      <div  className={classes.container}  >
        <div className={classes.holder}>
        <IoMdAppstore />
          <b>Alex Branch</b>
          <b>62 item</b>
        </div>
        <ProgressBar variant="warning" className={classes.progress} now={40} />
      </div>
    </Fragment>
  );
};
export default Horzinbar;
