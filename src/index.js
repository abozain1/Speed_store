import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { Authcontextprovider } from "./store/autth-context";

ReactDOM.render(
  <Authcontextprovider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Authcontextprovider>
  ,
  document.getElementById("root")
);
