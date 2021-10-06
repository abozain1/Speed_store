import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes  from './Header.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Authcontext from '../../../store/autth-context';
import { BiLogIn } from 'react-icons/bi';

const Header = (props) => {
  const authctx = useContext(Authcontext);
  return (
    <Fragment>
      <header  className={classes.header} >
        <Link to="/register">
          <BiLogIn  className={classes.logout}onClick={authctx.logout} />
        </Link>
        <h1>Store</h1>
      <div>

        <Link className={classes.link} to='/home'> Home</Link>
      </div>
        
      
        
        <HeaderCartButton onclick={props.onclick}/>
      </header>
      
    
      
    </Fragment>
  );
};

export default Header