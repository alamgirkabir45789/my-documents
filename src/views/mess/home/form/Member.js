import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
const Member = () => {
  //#region States
  const [state, setState] = useState({
    id: 0,
    name: "",
  });
  const [member, setMember] = useState([]);
  const getMember = async () => {
    const res = await axios.get("http://localhost:5005/member");
    setMember(res.data);
  };
  //#region Effects
  useEffect(() => {
    getMember();
  }, []);

  const handleSubmit = async () => {
    if (state.id !== 0) {
      console.log("called");
      await axios.put("http://localhost:5005/member/" + state.id, {
        id: state.id,
        name: state.name,
      });
    } else {
      await axios.post("http://localhost:5005/member/", {
        id: Math.floor(Math.random() * 100),
        name: state.name,
      });
    }

    getMember();
    setState({ name: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const prev = { ...state };
    prev[name] = value;
    setState(prev);
  };

  const handleEdit = (item) => {
    const updateState = {
      id: item.id,
      name: item.name,
    };
    setState(updateState);
  };
  const handleDelete = async (id) => {
    await axios.delete("http://localhost:5005/member/" + id);
    getMember();
  };
  return (
    <Fragment>
      <Card className="m-2 p-3">
        <Row>
          <Col lg={4} sm={4} xs={4} md={4}>
            <FormGroup>
              <Label for="name">Create Member</Label>
            </FormGroup>{" "}
            <FormGroup className="d-flex">
              <FormGroup className="mr-2">
                <Label for="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={state.name}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <div className="ml-5 mt-4">
                <Button type="submit" onClick={handleSubmit}>
                  Add
                </Button>
              </div>
            </FormGroup>{" "}
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {member?.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <Button onClick={() => handleEdit(item)}>Edit</Button>
                      <Button onClick={() => handleDelete(item.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col lg={8} sm={8} xs={8} md={8}>
            <FormGroup>
              <Label for="month">Assign Meal</Label>
            </FormGroup>{" "}
            <FormGroup>
              <Label for="month">Select Date</Label>
              <Input id="month" name="month" type="date" />
            </FormGroup>
            <FormGroup>
              <Table>
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>Morning</th>
                    <th>Noon</th>
                    <th>Evening</th>
                    <th>Night</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>B</td>
                    <td>
                      <Input type="number" placeholder="1" />
                    </td>{" "}
                    <td>
                      <Input type="number" placeholder="1" />
                    </td>{" "}
                    <td>
                      <Input type="number" placeholder="1" />
                    </td>{" "}
                    <td>
                      <Input type="number" placeholder="1" />
                    </td>
                  </tr>{" "}
                </tbody>
              </Table>
            </FormGroup>
            <FormGroup>
              <Button>Add</Button>
            </FormGroup>
          </Col>
        </Row>
      </Card>
      <Card className="m-2 p-3">
        <Row>
          <Col lg={5} sm={5} xs={5} md={5}>
            <Table>
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Morning</th>
                  <th>Noon</th>
                  <th>Evening</th>
                  <th>Night</th>

                  <th>Expence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>B</td>
                  <td>01/02/2022</td>
                  <td>1</td> <td>1</td> <td>1</td> <td>1</td>
                  <td>
                    <Input type="text" />
                  </td>{" "}
                </tr>{" "}
                <tr>
                  <td>1</td>
                  <td>B</td>
                  <td>01/02/2022</td>
                  <td>1</td> <td>1</td> <td>1</td> <td>1</td>
                  <td>
                    <Input type="text" />
                  </td>{" "}
                </tr>{" "}
              </tbody>
            </Table>
          </Col>
          <Col lg={7} sm={7} xs={7} md={7}>
            <Table responsive>
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>Morning</th>
                  <th>Noon</th>
                  <th>Evening</th>
                  <th>Night</th>
                  <th>Total M</th>

                  <th>Total Expence</th>
                  <th>Rate</th>
                  <th>M Total</th>
                  <th>Extra</th>
                  <th>NetTotal</th>
                  <th>Due</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>B</td>
                  <td>01/02/2022</td>
                  <td>1</td> <td>1</td> <td>1</td> <td>1</td>
                  <td>
                    <Input type="text" />
                  </td>{" "}
                  <td>
                    <Input type="text" />
                  </td>{" "}
                  <td>
                    <Input type="text" />
                  </td>{" "}
                  <td>
                    <Input type="text" />
                  </td>{" "}
                  <td>
                    <Input type="text" />
                  </td>{" "}
                  <td>
                    <Input type="text" />
                  </td>
                  <td>Pending</td>
                </tr>{" "}
                <tr>
                  <td>1</td>
                  <td>B</td>
                  <td>01/02/2022</td>
                  <td>1</td> <td>1</td> <td>1</td> <td>1</td>
                  <td>
                    <Input type="text" />
                  </td>{" "}
                  <td>
                    <Input type="text" />
                  </td>{" "}
                  <td>
                    <Input type="text" />
                  </td>{" "}
                  <td>
                    <Input type="text" />
                  </td>{" "}
                  <td>
                    <Input type="text" />
                  </td>{" "}
                  <td>
                    <Input type="text" />
                  </td>
                  <td>Pending</td>
                </tr>{" "}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Card>
    </Fragment>
  );
};

export default Member;
