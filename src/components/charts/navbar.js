import classes from "./navbar.module.css";

import { VscDebugRestart} from "react-icons/vsc";
import { BiPlay } from "react-icons/bi";
import { BsFillStopFill } from "react-icons/bs";
import { BsFillCalendarFill } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { VscThreeBars } from "react-icons/vsc";
import { ImPower } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useContext } from "react";
import Barcontext from "../../store/sidebarcontex";
import Authcontext from "../../store/autth-context";
const Navbar = () => {
  const authctx=useContext(Authcontext)
  const barctx=useContext(Barcontext);
  const[active1,setactive1]=useState(true);
  const[active2,setactive2]=useState(false);
  const[active3,setactive3]=useState(false);

const activehandler1=()=>{
  setactive1(true)
  setactive2(false)
  setactive3(false)
};
const activehandler2=()=>{
  setactive2(true)
  setactive1(false)
  setactive3(false)
};
const activehandler3=()=>{
  setactive3(true)
  setactive1(false)
  setactive2(false)
};
const showsidebarhandler=()=>{
 barctx.show();
 console.log(barctx.isshown);
};

  return (
    <div className={classes.navbar}>
   {barctx.isshown &&<div  className={classes.option}  > <VscThreeBars onClick={showsidebarhandler}  /></div>}
     {!barctx.isshown&& <div className={classes.option} > <ImPower onClick={showsidebarhandler} id='option' /></div>}
      <div >
      <p className={classes.headline} ><FaUserCircle/>  {authctx.name} </p>
      </div>
      <div className={classes.sec}>
        <GoPrimitiveDot className={classes.dot} />
        <VscDebugRestart className={classes.restart} />
        <b>20s</b>
        <p>
          last
          <br />
          Update
        </p>
      </div>
      <div className={classes.sec3}>
        <div className={classes.holder}>
          <div  onClick={activehandler1} className={`${classes.holder1} ${active1?classes.active:''}`}>
            <p>Today</p>
          </div>
          <div onClick={activehandler2} className={`${classes.holder2} ${active2?classes.active:''}`}>
            <p>Yesterday</p>
          </div>
          <div onClick={activehandler3} className={`${classes.holder3} ${active3?classes.active:''}`}>
            <p>Last week</p>
          </div>
        </div>
      </div>
      <div className={classes.sec4}>
        <BiPlay className={classes.start} />
        <input type='text' placeholder='Start Date'  className={classes.sec4p}/>
        <BsFillCalendarFill />
      </div>
      <div className={classes.sec4}>
        <BsFillStopFill className={classes.stop} />
        <input type='text' placeholder='End Date'  className={classes.sec4p}/>
        <BsFillCalendarFill />
      </div>
    </div>
  );
};
export default Navbar;
