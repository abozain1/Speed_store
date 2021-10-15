// import { useHistory } from "react-router-dom";
import React, { useState } from "react";

const Authcontext = React.createContext({
  name:'',
  token: "",
  islogged: false,
  login: (token) => {},
  logout: () => {},
});
export const Authcontextprovider = (props) => {
    const initialtoken = localStorage.getItem('token');
    
//   const history = useHistory();
  const [token, settoken] = useState(initialtoken);
  const [name, setname] = useState('');
  
  const userislogged = !!token;
  
  const loginhandler = (token,name) => {
    settoken(token);
    setname(name);
    localStorage.setItem('token',token);
    localStorage.setItem('name',name);
  };
  const logouthandler = () => {
    settoken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('name');
  };
  const initialname = localStorage.getItem('name');
  const contextvalue = {
    name:initialname||name,
    token: token,
    islogged: userislogged,
    login: loginhandler,
    logout: logouthandler,
  };
  return (
    <Authcontext.Provider value={contextvalue}>
      {props.children}
    </Authcontext.Provider>
  );
};
export default Authcontext;
