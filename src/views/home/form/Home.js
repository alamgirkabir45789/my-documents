import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import proImg from "../../../assets/images/AlamgirSmallSizePP.jpg";
import "../../../css/Home.css";

const initialState = {
  id: 0,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  message: "",
};
const Home = () => {
  let navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const [tableData, setTableData] = useState("");
  console.log(tableData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.id === 0) {
      const submitData = {
        id: Math.floor(Math.random() * 10),
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        phone: state.phone,
        address: state.address,
        message: state.message,
      };
      console.log(submitData);
      setTableData(...tableData, submitData);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const prevState = { ...state };
    prevState[name] = value;
    console.log(prevState);
    setState(prevState);
  };
  return (
    <div>
      <div style={{ color: "#000B49", textTransform: "uppercase" }}>
        <marquee direction="right">
          <strong>Welcome To Alamgir's Documentary</strong>
        </marquee>
      </div>

      <Card className="m-2 mt-0 p-1 mb-5 ">
        <CardTitle className="text-center"></CardTitle>
        <CardBody>
          <Row>
            <Col lg={6} sm={6} md={6} xs={6} xl={6}>
              <Row>
                <Col lg={6} sm={6} md={6} xs={6} xl={6}>
                  {/* <img src={proImg} height="200px" width="200px" alt="Image" /> */}
                  <CardImg
                    id="profile"
                    src={proImg}
                    height="200px"
                    width="200px"
                    alt="Image"
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Alamgir Kabir</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Jr.Software Developer
                    </CardSubtitle>{" "}
                    <CardSubtitle className="mb-2 text-muted " tag="h6">
                      Quadrion Technologies,Chittagong
                    </CardSubtitle>
                    <CardText>This is a wider card with</CardText>
                    <Button
                      id="project-link"
                      onClick={() => navigate("/project")}
                      className=" text-primary bg-light"
                      size="md"
                    >
                      Project
                    </Button>
                  </CardBody>

                  <div className="d-flex">
                    <nav id="socialMedia">
                      <ul>
                        <li>
                          <a href="#">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </li>{" "}
                        <li>
                          <a href="#">
                            <i class="fab fa-twitter"></i>
                          </a>
                        </li>{" "}
                        <li>
                          <a href="#">
                            <i class="fab fa-instagram"></i>
                          </a>
                        </li>{" "}
                        <li>
                          <a
                            href="https://www.linkedin.com/in/alamgir-kabir-38232b128/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </li>{" "}
                        <li>
                          <a
                            href="https://github.com/alamgirkabir45789?tab=repositories"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i class="fab fa-github"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Col>
                <Col lg={6} sm={6} md={6} xs={6} xl={6}>
                  <p id="profileContent">
                    As-salamu alaikum(ٱلسَّلَامُ عَلَيْكُمْ) .I am Alamgir
                    Kabir.I am a Web Developer.I Complete my graduation from
                    IDB-BISEW in{" "}
                    <b>
                      "Diploma in Enterprise Systems Analysis & Design - C#.NET
                      (ESAD-C#.NET)".
                    </b>
                    After that I Contine my Proffessional Career at Quadrion
                    Technology in Chittagong as a
                    <strong>"Software Developer"</strong>.In this project I
                    apply
                    <div className="d-flex justify-content-between ">
                      <div>
                        <ul>
                          <li>HTML</li>
                          <li>CSS3</li>
                          <li>Bootstrap</li> <li>ReactJs</li>
                          <li>Javascript</li>
                          <li>ES6</li>
                        </ul>
                      </div>
                      <div>
                        <ol>
                          <li>NodeJs</li>
                          <li>ExpressJs</li>
                          <li>Asp.Net Core Web Api</li> <li>MongoDB</li>
                          <li>JsonDB</li>
                        </ol>
                      </div>
                    </div>
                  </p>
                </Col>
              </Row>
            </Col>{" "}
            <Col
              lg={6}
              sm={6}
              md={6}
              xs={6}
              xl={6}
              className="text-black"
              id="contactForm"
            >
              <FormGroup row>
                <h2 id="contactHeader">Contact with me</h2>
                <FormGroup tag={Col} lg={6} sm={6} md={6} xs={6}>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    bsSize="sm"
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={state.firstName}
                    onChange={handleInputChange}
                  />
                </FormGroup>{" "}
                <FormGroup tag={Col} lg={6} sm={6} md={6} xs={6}>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    bsSize="sm"
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={state.lastName}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup tag={Col} lg={6} sm={6} md={6} xs={6}>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    bsSize="sm"
                    type="text"
                    name="email"
                    id="email"
                    value={state.email}
                    onChange={handleInputChange}
                  />
                </FormGroup>{" "}
                <FormGroup tag={Col} lg={6} sm={6} md={6} xs={6}>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    bsSize="sm"
                    type="text"
                    name="phone"
                    id="phone"
                    value={state.phone}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup tag={Col} lg={12} sm={12} md={12} xs={12}>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    bsSize="sm"
                    type="text"
                    name="address"
                    id="address"
                    value={state.address}
                    onChange={handleInputChange}
                  />
                </FormGroup>{" "}
                <FormGroup tag={Col} lg={12} sm={12} md={12} xs={12}>
                  <Label htmlFor="message">Message</Label>
                  <Input
                    bsSize="sm"
                    type="textarea"
                    name="message"
                    id="message"
                    value={state.message}
                    onChange={handleInputChange}
                  />
                </FormGroup>{" "}
                <FormGroup>
                  <Button
                    className="text-primary bg-light btn pull-right"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Save
                  </Button>
                </FormGroup>
              </FormGroup>
            </Col>
          </Row>
          <div>
            <div className="d-flex justify-content-center mb-2">
              <div className="spinner "></div>
              <div id="skill">
                <h2 style={{ color: "green" }}>My Skill</h2>
              </div>
              {/* <div className="">
                <h2>My Skill</h2>
              </div> */}
            </div>

            <Row id="skillDiv">
              <Col lg={2} sm={2} md={2} xs={2}>
                <ul className="skillList">
                  <li>HTML</li>
                  <li>CSS3</li>
                  <li>Bootstrap</li>
                  <li>Material UI</li>
                </ul>
              </Col>{" "}
              <Col lg={2} sm={2} md={2} xs={2}>
                <ul className="skillList">
                  <li>Javascript</li>
                  <li>ReactJs</li>
                  <li>NodeJs</li>
                  <li>ExpressJs</li>
                </ul>
              </Col>
              <Col lg={2} sm={2} md={2} xs={2}>
                <ul className="skillList">
                  <li>Angular</li>
                  <li>XML</li>
                  <li>SQL</li>
                  <li>MongoDB</li>
                </ul>
              </Col>{" "}
              <Col lg={2} sm={2} md={2} xs={2}>
                <ul className="skillList">
                  <li>C#</li>
                  <li>ASP.NET</li>
                  <li>ASP.NET MVC</li>
                  <li>ASP.NET CORE</li>
                </ul>
              </Col>{" "}
              <Col lg={2} sm={2} md={2} xs={2}>
                <ul className="skillList">
                  <li>ASP.NET CORE WEB API</li>
                  <li>WCF</li>
                  <li>AngularJs</li>
                  <li>UML</li>
                </ul>
              </Col>{" "}
              <Col lg={2} sm={2} md={2} xs={2}>
                <ul className="skillList">
                  <li>UML</li>
                  <li>ASP.NET</li>
                  <li>ASP.NET MVC</li>
                  <li>ASP.NET CORE</li>
                </ul>
              </Col>{" "}
              {/* <Col lg={6} sm={6} md={6} xs={6}>
                <div className="skill-div">
                  <ul>
                    <li className="html">HTML</li>
                    <li className="css3">CSS3</li>
                    <li className="bootstrap">Bootstrap</li>
                    <li className="materialUI">Material UI</li>
                    <li className="javascript">Javascript</li>
                    <li className="reactJs">ReactJs</li>{" "}
                    <li className="nodejs">NodeJs</li>
                    <li className="expressJs">ExpressJs</li>{" "}
                    <li className="angular">Angular</li>{" "}
                    <li className="xml">XML</li>{" "}
                  </ul>
                </div>
              </Col>
              <Col lg={6} sm={6} md={6} xs={6}>
                <div className="skill-div2">
                  <li className="sql">SQL</li>
                  <li className="c-sharp">C#</li>
                  <li className="aspNet">ASP.NET</li>{" "}
                  <li className="mvc">ASP.NET MVC</li>
                  <li className="core">ASP.NET CORE</li>{" "}
                  <li className="api">ASP.NET CORE WEB API</li>{" "}
                  <li className="wcf">WCF</li>
                  <li className="mongodb">MongoDB</li>
                  <li className="angularJs">AngularJs</li>
                  <li className="uml">UML</li>
                </div>
              </Col> */}
            </Row>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;
