import { AiOutlineBell } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBookmarks } from "react-icons/bs";
import { AiTwotoneHome } from "react-icons/ai";
import { MdLocalGroceryStore } from "react-icons/md";
import { ImPower } from "react-icons/im";
import { BiLogIn } from "react-icons/bi";
import classes from "./sidenav.module.css";
import { useContext } from "react";
import Barcontext from "../../store/sidebarcontex";
import Authcontext from "../../store/autth-context";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const barctx = useContext(Barcontext);
  const authctx = useContext(Authcontext);

  return (
    <div className={`${classes.nav} ${!barctx.isshown ? classes.hide : ""} `}>
      <div className={classes.water}>
        <ImPower />
      </div>
      <div className={classes.home}>
        <AiTwotoneHome />
      </div>
      <div className={classes.store}>
          <Link to='/store'>
        <MdLocalGroceryStore />
        </Link>
      </div>
      <div className={classes.holder}>
        <BsBookmarks />
      </div>
      <div className={classes.holder}>
        <IoSettingsOutline />
      </div>
      <div className={classes.holder}>
        <AiOutlineBell />
      </div>
      <div className={classes.logout}>
        <Link to="/register">
          <BiLogIn onClick={authctx.logout} />
        </Link>
      </div>
    </div>
  );
};
export default Sidenav;
