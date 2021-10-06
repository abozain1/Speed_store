// import { useHistory } from "react-router-dom";
import React, { useState } from "react";

const Barcontext = React.createContext({
  isshown: true,
  show: () => {},
 
});
export const Barcontextprovider = (props) => {
 
  const [show, setshow] = useState(false);
 
  const showhandler = () => {
    setshow(!show);
   
  };

  const contextvalue = {
   
    isshown:show ,
    show: showhandler,
  
  };
  return (
    <Barcontext.Provider value={contextvalue}>
      {props.children}
    </Barcontext.Provider>
  );
};
export default Barcontext;
