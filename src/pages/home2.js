import classes from "./home2.module.css";
import Navbar from "../components/charts/navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Sidenav from "../components/charts/sidenav";
import { BiPlay } from "react-icons/bi";
import { VscGraph } from "react-icons/vsc";
import { BiListOl } from "react-icons/bi";
import Horzinbar from "../components/charts/horzinchart";
import Radar from "../components/charts/radar";
import { Barcontextprovider } from "../store/sidebarcontex";
import Vertbar from "../components/charts/vertbar";
import Cartform from "../components/carts/cart";
import { useState } from "react";




const Homepage2 = () => {
  
  const [active, setactive] = useState(true);
  const [show, setshow] = useState(true);
  const togglelist = () => {
    setactive(false);
    setshow(false);
  };
  const togglechart = () => {
    setactive(true);
    setshow(true);
  };
  return (
    <div className={classes.body}>
      <Barcontextprovider>
      <Navbar />
      <Sidenav />
     
<div className={classes.alpha}>
      <Container className={classes.first}>
        <Row>
          <Col  className={classes.col1}>
            <p className={classes.headline}>71.028 EGP</p>
            <p>Total Value</p>
            <div className={classes.downiconholder}>
              <BiPlay className={classes.downicon} />
              <p>2%</p>
            </div>
          </Col>
          <Col  className={classes.col2}>
          <p className={classes.headline}>20.000 shoe</p>
            <p>Total Sales</p>
            <div className={classes.upiconholder}>
              <BiPlay className={classes.upicon} />
              <p>%5 </p>
            </div>
          </Col>
          <Col  className={classes.col3}>
          <p className={classes.headline}>20.000 shoe</p>
            <p>Avg Sales</p>
            <div className={classes.downiconholder}>
              <BiPlay className={classes.downicon} />
              <p>%5</p>
            </div>
          </Col>
          <Col className={classes.col4}>
          <p className={classes.headline}>1567</p>
            <p>Total Transaction</p>
            <div className={classes.upiconholder}>
              <BiPlay className={classes.upicon} />
              <p>20%</p>
            </div>
          </Col>
        </Row>
        <Row >
          <div className={classes.switchholder}>
            <div
              onClick={togglelist}
              className={`${classes.switch1} ${!active ? classes.active : ""}`}
              >
              <BiListOl />
              List
            </div>
            <div
              onClick={togglechart}
              className={`${classes.switch2} ${active ? classes.active : ""}`}
              >
              <VscGraph />
              Graph
            </div>
          </div>
          <Col  >
            {!show && <Cartform />}
            {show && <Vertbar />}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          
              <Col className={classes.radarholder} >
                <div className={classes.radar}>
                  <p>Hourly Sales</p>
                  <Radar/>
                
                </div>
              </Col>
        </Row>
        <Row>
          <Col  >
            <Horzinbar />
          </Col>

        </Row>
      </Container>
      </div>
      </Barcontextprovider>
    </div>
  );
};
export default Homepage2;


