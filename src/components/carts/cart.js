import classes from "./cart.module.css";
import { GoPrimitiveDot } from "react-icons/go";
import { IoMdAppstore } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { Fragment, useState } from "react";
import Cartcheck from "./cartcheck";

const Cartform = () => {
  const [show, setshow] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);
  const [show4, setshow4] = useState(false);
  const [show5, setshow5] = useState(false);
  const [show6, setshow6] = useState(false);
  const onclickhandler = () => {
    setshow(!show);
  };
  const onclickhandler2 = () => {
    setshow2(!show2);
  };
  const onclickhandler3 = () => {
    setshow3(!show3);
  };
  const onclickhandler4 = () => {
    setshow4(!show4);
  };
  const onclickhandler5 = () => {
    setshow5(!show5);
  };
  const onclickhandler6 = () => {
    setshow6(!show6);
  };
  return (
    <Fragment>
   

   <div className={classes.main} >
     
    <form className={classes.first}>
      {show&&<Cartcheck className={classes.check} />}
         
      <div className={classes.form}>
        <div className={classes.cart}>
          <HiDotsHorizontal onClick={onclickhandler} className={classes.option} />
          <GoPrimitiveDot className={classes.dot} />
          <IoMdAppstore className={classes.garage} />
          
          <p className={classes.cartp}>
            Beanch Name<br></br> Alex
          </p>
        </div>
        <div className={classes.pholder}>
          <b>
            Total Sales <br></br>
            <br></br>
            <br></br>
            Total Value
          </b>
          <p>
            62 item <br></br>
            <br></br>
            <br></br>
            550 EGP
          </p>
          <b>
            Compression State <br></br>
            <br></br>
            <br></br>
            Max Transaction Count
          </b>
          <p>
            Compressed<br></br>
            <br></br>
            <br></br>
            5161
          </p>
          <b>
            Max Transaction Hour <br></br>
            <br></br>
            <br></br>
            Max Transaction Date Time
          </b>
          <p>
            20 <br></br>
            <br></br>
            <br></br>
            8-1-2021/10,16pm
          </p>
        </div>
      </div>
      
    </form>
    <form className={classes.first}>
         
      {show2&& <Cartcheck className={classes.check} />}
      <div className={classes.form}>
        <div className={classes.cart}>
          <HiDotsHorizontal onClick={onclickhandler2} className={classes.option} />
          <GoPrimitiveDot className={classes.dot} />
          <IoMdAppstore className={classes.garage} />
          <p className={classes.cartp}>
            Branch Name<br></br> Cairo
          </p>
        </div>
        <div className={classes.pholder}>
          <b>
            Total Sales <br></br>
            <br></br>
            <br></br>
            Total Value
          </b>
          <p>
            62 item <br></br>
            <br></br>
            <br></br>
            550 EGP
          </p>
          <b>
            Compression State <br></br>
            <br></br>
            <br></br>
            Max Transaction Count
          </b>
          <p>
            Compressed<br></br>
            <br></br>
            <br></br>
            5161
          </p>
          <b>
            Max Transaction Hour <br></br>
            <br></br>
            <br></br>
            Max Transaction Date Time
          </b>
          <p>
            20 <br></br>
            <br></br>
            <br></br>
            8-1-2021/10,16pm
          </p>
        </div>
      </div>
      
    </form>
    <form className={classes.first}>
         
      {show3&& <Cartcheck className={classes.check} />}
      <div className={classes.form}>
        <div className={classes.cart}>
          <HiDotsHorizontal onClick={onclickhandler3} className={classes.option} />
          <GoPrimitiveDot className={classes.dot} />
          <IoMdAppstore className={classes.garage} />
          <p className={classes.cartp}>
            Branch Name<br></br> Roma
          </p>
        </div>
        <div className={classes.pholder}>
          <b>
            Total Sales <br></br>
            <br></br>
            <br></br>
            Total Value
          </b>
          <p>
            62 item  <br></br>
            <br></br>
            <br></br>
            550 EGP
          </p>
          <b>
            Compression State <br></br>
            <br></br>
            <br></br>
            Max Transaction Count
          </b>
          <p>
            Compressed<br></br>
            <br></br>
            <br></br>
            5161
          </p>
          <b>
            Max Transaction Hour <br></br>
            <br></br>
            <br></br>
            Max Transaction Date Time
          </b>
          <p>
            20 <br></br>
            <br></br>
            <br></br>
            8-1-2021/10,16pm
          </p>
        </div>
      </div>
      
    </form>
    <form className={classes.first}>
         
      {show4&& <Cartcheck className={classes.check} />}
      <div className={classes.form}>
        <div className={classes.cart}>
          <HiDotsHorizontal onClick={onclickhandler4} className={classes.option} />
          <GoPrimitiveDot className={classes.dot} />
          <IoMdAppstore className={classes.garage} />
          <p className={classes.cartp}>
            Branch Name<br></br> Roma
          </p>
        </div>
        <div className={classes.pholder}>
          <b>
            Total Sales <br></br>
            <br></br>
            <br></br>
            Total Value
          </b>
          <p>
            62 item  <br></br>
            <br></br>
            <br></br>
            550 EGP
          </p>
          <b>
            Compression State <br></br>
            <br></br>
            <br></br>
            Max Transaction Count
          </b>
          <p>
            Compressed<br></br>
            <br></br>
            <br></br>
            5161
          </p>
          <b>
            Max Transaction Hour <br></br>
            <br></br>
            <br></br>
            Max Transaction Date Time
          </b>
          <p>
            20 <br></br>
            <br></br>
            <br></br>
            8-1-2021/10,16pm
          </p>
        </div>
      </div>
      
    </form>
    <form className={classes.first}>
         
      {show5&& <Cartcheck className={classes.check} />}
      <div className={classes.form}>
        <div className={classes.cart}>
          <HiDotsHorizontal onClick={onclickhandler5} className={classes.option} />
          <GoPrimitiveDot className={classes.dot} />
          <IoMdAppstore className={classes.garage} />
          <p className={classes.cartp}>
            Branch Name<br></br> Roma
          </p>
        </div>
        <div className={classes.pholder}>
          <b>
            Total Sales <br></br>
            <br></br>
            <br></br>
            Total Value
          </b>
          <p>
            62 item  <br></br>
            <br></br>
            <br></br>
            550 EGP
          </p>
          <b>
            Compression State <br></br>
            <br></br>
            <br></br>
            Max Transaction Count
          </b>
          <p>
            Compressed<br></br>
            <br></br>
            <br></br>
            5161
          </p>
          <b>
            Max Transaction Hour <br></br>
            <br></br>
            <br></br>
            Max Transaction Date Time
          </b>
          <p>
            20 <br></br>
            <br></br>
            <br></br>
            8-1-2021/10,16pm
          </p>
        </div>
      </div>
      
    </form>
    <form className={classes.first}>
         
      {show6&& <Cartcheck className={classes.check} />}
      <div className={classes.form}>
        <div className={classes.cart}>
          <HiDotsHorizontal onClick={onclickhandler6} className={classes.option} />
          <GoPrimitiveDot className={classes.dot} />
          <IoMdAppstore className={classes.garage} />
          <p className={classes.cartp}>
            Branch Name<br></br> Roma
          </p>
        </div>
        <div className={classes.pholder}>
          <b>
            Total Sales <br></br>
            <br></br>
            <br></br>
            Total Value
          </b>
          <p>
            62 item  <br></br>
            <br></br>
            <br></br>
            550 EGP
          </p>
          <b>
            Compression State <br></br>
            <br></br>
            <br></br>
            Max Transaction Count
          </b>
          <p>
            Compressed<br></br>
            <br></br>
            <br></br>
            5161
          </p>
          <b>
            Max Transaction Hour <br></br>
            <br></br>
            <br></br>
            Max Transaction Date Time
          </b>
          <p>
            20 <br></br>
            <br></br>
            <br></br>
            8-1-2021/10,16pm
          </p>
        </div>
      </div>
      
    </form>
    </div>
  </Fragment>
  );
};
export default Cartform;
