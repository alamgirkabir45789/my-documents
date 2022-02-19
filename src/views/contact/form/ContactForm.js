import React, { useState } from "react";
import { Button, Card, Col, FormGroup, Input, Label } from "reactstrap";
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
const ContactForm = () => {
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
    <Card className="m-2 p-5">
      <FormGroup row>
        <h2 id="contactHeader">Contact with me</h2>
        <FormGroup tag={Col} lg={6} sm={6} md={6} xs={6}>
          <Label htmlFor="firstName">First Name</Label>
          <Input
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
    </Card>
  );
};

export default ContactForm;
