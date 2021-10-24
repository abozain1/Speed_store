import React, { Fragment } from "react";
import { Bar } from "react-chartjs-2";
import classes from './vertchart.module.css';




const state = {
  labels: [" Dummy", "Dummy", "Dummy", "Dummy", "Dummy"],
  datasets: [
    {
      label: "",
      backgroundColor: "rgb(255,127,92)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 0.5,
      barThickness: 6,
      
      
      data: [140, 240, 180, 270, 200],
    },
  ],
};

const Vertbar = () => {
  return (
    <Fragment>
      <div className={classes.main}>

     
    <div className={classes.holder}>
        <div className={classes.headline}>
          <p>STATIONS ACTIVITES OVERVIEW</p>
        </div>
        <div className={classes.sales}>
          <p>SALES</p>
        </div>
        <div>
          <p>TRANSACTIO<br/>N</p>
        </div>
        <div>
          <p>VALUE<br/> E </p>
        </div>
        <div>
          <p>
            COMPREESION
          </p>
        </div>
      </div>
    <div className={classes.bar}>
      <Bar height='100px'  data={state} />
    </div>
    </div>
    </Fragment>
  );
};
export default Vertbar;
