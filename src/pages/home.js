import classes from "./home.module.css";
import Navbar from "../components/navs/navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Fragment } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { AiFillBug } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
// import Radarbar from "../components/charts/radar2";
import Vertbar from "../components/charts/vertbar";
const Homepage = () => {
  return (
    <Fragment>
      <Navbar />
      <div className={classes.container}>
        <h3 className={classes.hi}>Hi, Welcome back</h3>
      </div>
      {/* <Radarbar/> */}
      <Vertbar/>

      <Container className={classes.first}>
        <Row>
          <Col className={classes.col1}>
            <FcSalesPerformance className={classes.icon} />
            <h3>714k</h3>
            <p>Weekly Sales</p>
          </Col>
          <Col className={classes.col2}>
            <FiUserCheck className={classes.icon} />
            <h3>1.45m</h3>
            <p>New User</p>
          </Col>
          <Col className={classes.col3}>
            <FaCheckCircle className={classes.icon} />
            <h3>2m</h3>
            <p>Item Ordered</p>
          </Col>
          <Col className={classes.col4}>
            <AiFillBug className={classes.icon} />
            <h3>230</h3>
            <p>Bug reports</p>
          </Col>
        </Row>
        <div className={classes.progress}>
          <h3>Conversion Rates</h3>

          <Row className={classes.bar}>
            <Col>
              <ProgressBar now={23} label="italy 400" />
            </Col>
          </Row>
          <Row  className={classes.bar}  >
            <Col>
              <ProgressBar now={30} label="japan 460" />
            </Col>
          </Row>
          <Row  className={classes.bar}   >
            <Col>
              <ProgressBar now={35} label="china 534" />
            </Col>
          </Row>
          <Row  className={classes.bar}   >
            <Col>
              <ProgressBar now={40} label="korea 600" />
            </Col>
          </Row>
          <Row   className={classes.bar}  >
            <Col>
              <ProgressBar now={45} label="turkey 679" />
            </Col>
          </Row>
          <Row  className={classes.bar}   >
            <Col>
              <ProgressBar now={50} label="usa 765" />
            </Col>
          </Row>
          <Row   className={classes.bar}  >
            <Col>
              <ProgressBar now={60} label="uk 877" />
            </Col>
          </Row>
          <Row  className={classes.bar}   >
            <Col>
              <ProgressBar now={70} label="Russia 955" />
            </Col>
          </Row>
          <Row   className={classes.bar}  >
            <Col>
              <ProgressBar now={80} label="canada 1223" />
            </Col>
          </Row>
        </div>
        <div className={classes.trafficcontainer}>
          <h3>Traffic By Site</h3>
          <Row className={classes.traffic}>
            <Col className={classes.colfacebook}>
              <FaFacebookF className={classes.icon} />
              <h4>53.66K</h4>
              <h4>FaceBook</h4>
            </Col>
            <Col className={classes.colinkdein}>
              <FaLinkedinIn className={classes.icon} />
              <h4>76.34K</h4>
              <h4>Linkedin</h4>
            </Col>
            <Col className={classes.colgoogle}>
              <FaGoogle className={classes.icon} />
              <h4>34.55K</h4>
              <h4>Google</h4>
            </Col>
            <Col className={classes.coltwitter}>
              <IoLogoTwitter className={classes.icon} />
              <h4>35.23K</h4>
              <h4>Twitter</h4>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default Homepage;
