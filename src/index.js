import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import "./index.css";
import App from "./App";

import { CartProvider } from "./store/Cart-context";

ReactDOM.render(
  <CartProvider>
  
    <App />
 
  </CartProvider>
  ,
  document.getElementById("root")
);
