import classes from "./register.module.css";
import { Fragment, useContext } from "react";
import Form from "react-bootstrap/Form";

import { useHistory } from "react-router-dom";
import { useState, useRef } from "react";

import Authcontext from "../store/autth-context";

export const Registerpage = () => {
  const [login, setlogin] = useState(true);
  // const [namestate, setnamestate] = useState({});
  const authctx = useContext(Authcontext);
  const [namestate, setnamestate] = useState({});
  const [passstate, setpassstate] = useState({});
  const [emailstate, setemailstate] = useState({});
  const [nameisvalid, setnameisvalid] = useState({ input: true, func: false });
  const [emailisvalid, setemailisvalid] = useState({
    input: true,
    func: false,
  });
  const [passisvalid, setpassisvalid] = useState({ input: true, func: false });

  const enteredemail = useRef();
  const enteredpass = useRef();
  const enteredname = useRef();
  const history = useHistory();

  const emailvalidation = () => {
    // setformisvalid(true);
    const email = enteredemail.current.value;
    const emailvalid = email.match(
      /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]+)$/
    );
    if (!emailvalid) {
      setemailisvalid({
        input: false,
        func: false,
      });
    }
    if (emailvalid) {
      setemailisvalid({
        input: true,
        func: true,
      });
      setemailstate(email);
    }
  };
  const namevalidation = () => {
    // setdisable(true);
    const name = enteredname.current.value;
    const namevalid = name.match(
      /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
    );
    if (!namevalid) {
      setnameisvalid({
        input: false,
        func: false,
      });
    }
    if (namevalid) {
      setnameisvalid({
        input: true,
        func: true,
      });
    }
    setnamestate(name);
  };
  const passvalidation = () => {
    // setdisable(true);
    const pass = enteredpass.current.value;
    const passvalid = pass.match(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#!$%^&*]).*$/
    );
    if (!passvalid) {
      setpassisvalid({
        input: false,
        func: false,
      });
    }
    if (passvalid) {
      setpassisvalid({
        input: true,
        func: true,
      });
      setpassstate(pass);
    }
  };
  const formisvalid = passisvalid.func && nameisvalid.func && emailisvalid.func;

  const switchhandler = () => {
    setlogin(!login);
   
    setnameisvalid({
      input: true,
      func: false,
    });
    setpassisvalid({
      input: true,
      func: false,
    });
    setemailisvalid({
      input: true,
      func: false,
    });
    
  };

  const formsubmithandler = (e) => {
    e.preventDefault();
    let url;
    if (login) {
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBD3KNHJSa54i2wOA54N5CEbCxICzA-IXo';
    } else {
       url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBD3KNHJSa54i2wOA54N5CEbCxICzA-IXo';
    }

    fetch(
      url,
      {
        method: "post",
        body: JSON.stringify({
          email: emailstate,
          password: passstate,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        if (res.ok) {
          // alert("good");
          return res.json();
        } else {
          return res.json().then((data) => {
            console.log(data);
            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        authctx.login(data.idToken, namestate);
        history.replace("/home");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <Fragment>
      
      {login && (
        <Form className={classes.form}>
          <div className={classes.headline}>
            {login && (
              <p onClick={switchhandler} className={classes.headlinetext}>
                Login?
              </p>
            )}
            {!login && (
              <p onClick={switchhandler} className={classes.headlinetext}>
                {" "}
                SignUp?
              </p>
            )}
          </div>
          {!nameisvalid.input && (
            <p className={classes.invalid}>Enter a valid Name</p>
          )}
          <div className={classes.forminputholder}>
            <Form.Group className={classes.forminput} >
              <Form.Control
                onChange={namevalidation}
                ref={enteredname}
                type="text"
                placeholder=" First name"
              />
            </Form.Group>
            <Form.Group className={classes.forminput} >
              <Form.Control type="text" placeholder=" Last name" />
            </Form.Group>
          </div>
          <Form.Group className={classes.forminput2} >
            <Form.Control type="number" placeholder=" age" />
          </Form.Group>

          <Form.Group className={classes.forminput2} >
            {!emailisvalid.input && (
              <p className={classes.invalid}>Enter a valid Email</p>
            )}
            <Form.Control
              onChange={emailvalidation}
              ref={enteredemail}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group
            className={classes.forminput2}
            
          >
            {!passisvalid.input && (
              <p className={classes.invalid}>
                Password must contain at least a number, uppercase letter,
                lowercase letter and a special character
              </p>
            )}
            <Form.Control
              onChange={passvalidation}
              ref={enteredpass}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <button
            disabled={!formisvalid}
            onClick={formsubmithandler}
            className={`${classes.btn} ${formisvalid ? "" : classes.disable}`}
          >
            Submit
          </button>
        </Form>
      )}

      {!login && (
        <Form className={classes.form}>
          <div className={classes.headline}>
            {login && (
              <p onClick={switchhandler} className={classes.headlinetext}>
                Login?
              </p>
            )}
            {!login && (
              <p onClick={switchhandler} className={classes.headlinetext}>
                {" "}
                SignUp?
              </p>
            )}
          </div>
        
          <Form.Group className={classes.forminput2} >
          
            {!nameisvalid.input && (
              <p className={classes.invalid}>Enter a valid Name</p>
            )}
            <Form.Control
              onChange={namevalidation}
              ref={enteredname}
              type="name"
              placeholder="Enter Name"
            />
        
          </Form.Group>
          <Form.Group className={classes.forminput2} >
           
            {!emailisvalid.input && (
              <p className={classes.invalid}>Enter a valid Email</p>
            )}
            <Form.Control
              onChange={emailvalidation}
              ref={enteredemail}
              type="email"
              placeholder="Enter email"
            />
        
          </Form.Group>

          <Form.Group className={classes.forminput2} >
         
            {!passisvalid.input && (
              <p className={classes.invalid}>
                Password must contain at least a number, uppercase letter,
                lowercase letter and a special character
              </p>
            )}
            <Form.Control
              onChange={passvalidation}
              ref={enteredpass}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <button
            disabled={!formisvalid}
            onClick={formsubmithandler}
            className={`${classes.btn} ${formisvalid ? "" : classes.disable}`}
          >
            Submit
          </button>
        </Form>
      )}

     
    </Fragment>
  );
};

export default Registerpage;
