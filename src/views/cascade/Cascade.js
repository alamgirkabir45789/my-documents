import moment from "moment";
/* eslint-disable no-empty */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import {
  Card,
  CardBody,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";

const countries = [
  {
    name: "Germany",
    states: [
      {
        name: "A",
        cities: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"],
      },
    ],
  },
  { name: "Spain", states: [{ name: "B", cities: ["Barcelona"] }] },
  { name: "USA", states: [{ name: "C", cities: ["Downers Grove"] }] },
  { name: "Mexico", states: [{ name: "D", cities: ["Puebla"] }] },
  {
    name: "India",
    states: [
      { name: "E", cities: ["Delhi", "Kolkata", "Mumbai", "Bangalore"] },
    ],
  },
];

const dropDownCategory = [
  {
    value: "Fabric",
    label: "Fabric",
  },
  { value: "Accessories", label: "Accessories" },
];
const dropDownPO = [
  {
    value: "PO-01",
    label: "PO-01",
  },
  { value: "PO-02", label: "PO-02" },
];
const dropDownStyle = [
  {
    value: "Style-01",
    label: "Style-01",
  },
  { value: "Style-02", label: "Style-02" },
];
const dropDownBuyer = [
  {
    value: "Buyer-01",
    label: "Buyer-01",
  },
  { value: "Buyer-02", label: "Buyer-02" },
];
const dropDownBudget = [
  {
    value: "Budget-01",
    label: "Budget-01",
  },
  { value: "Budget-02", label: "Budget-02" },
];

const ProcurementAddForm = () => {
  let navigate = useNavigate();
  const [addForm, setAddForm] = useState(false);

  const [divisionsState] = useState([
    { value: 1, label: "Dhaka" },
    { value: 2, label: "Chattogram" },
  ]);
  const [districtsState, setDistricts] = useState([]);

  const districts = [
    { value: 1, label: "Gazipur", divisionId: 1 },
    { value: 2, label: "Narsingdi", divisionId: 1 },
    { value: 3, label: "Manikganj", divisionId: 1 },
    { value: 4, label: "Munshiganj", divisionId: 1 },
    { value: 5, label: "Narayanganj", divisionId: 1 },
    { value: 6, label: "Rangamati", divisionId: 2 },
    { value: 7, label: "Bandarban", divisionId: 2 },
    { value: 8, label: "Khagrachhari", divisionId: 2 },
    { value: 9, label: "Feni", divisionId: 2 },
  ];

  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");

  const onDivisionChange = (e) => {
    const divId = e.target.value;
    setDivision(divId);
    const filteredDistrict = districts.filter(
      (dis) => dis.divisionId === parseInt(divId)
    );
    setDistricts(filteredDistrict);
  };

  const onDistrictChange = (e) => {
    const disId = e.target.value;
    setDistrict(disId);
  };

  const handleAddProcurementForm = () => {
    setAddForm(!addForm);
  };

  const handleClearProcurementForm = () => {
    setAddForm(!addForm);
  };
  return (
    <>
      <Card className="m-2 p-3">
        <CardBody>
          <div>
            <select value={division} onChange={onDivisionChange}>
              {divisionsState.map((div) => (
                <option value={div.value}> {div.label} </option>
              ))}
            </select>

            <select value={district} onChange={onDistrictChange}>
              {districtsState.map((div) => (
                <option value={div.value}> {div.label} </option>
              ))}
            </select>
          </div>
          <Row>
            <FormGroup tag={Col} lg={2} xl={2} sm={12} md={12} xs={12}>
              <CreatableSelect
                placeholder="Select Buyer"
                id="buyerId"
                name="buyerId"
                options={dropDownBuyer}
                isSearchable
                isClearable
                //  value={buyer}

                classNamePrefix="select"
              />
            </FormGroup>
            <FormGroup tag={Col} lg={2} xl={2} sm={12} md={12} xs={12}>
              <CreatableSelect
                placeholder="Select Budget"
                id="BudgetId"
                name="BudgetId"
                // isDisabled={dropDownBuyers}
                options={dropDownBudget}
                // value={budget}

                isSearchable
                isClearable
                classNamePrefix="select"
              />
            </FormGroup>
            <FormGroup tag={Col} lg={2} xl={2} sm={12} md={12} xs={12}>
              <Select
                placeholder="Select Style"
                id="styleId"
                name="styleId"
                options={dropDownStyle}
                // value={style}
                isSearchable
                isClearable
                classNamePrefix="select"
              />
            </FormGroup>
            <FormGroup tag={Col} lg={2} xl={2} sm={12} md={12} xs={12}>
              <Select
                placeholder="Select PO"
                id="BuyerPo"
                name="BuyerPo"
                isMulti
                options={dropDownPO}
                // value={po}
                isSearchable
                isClearable
                classNamePrefix="select"
              />
            </FormGroup>
            <FormGroup tag={Col} lg={2} xl={2} sm={12} md={12} xs={12}>
              <Select
                placeholder="Select Category"
                id="categoryId"
                name="categoryId"
                options={dropDownCategory}
                // value={category}
                isSearchable
                isClearable
                classNamePrefix="select"
              />
            </FormGroup>
            <Col
              lg={2}
              xl={2}
              sm={12}
              md={12}
              xs={12}
              className="d-flex justify-content-end"
            >
              <div>
                <button
                  onClick={() => {
                    handleAddProcurementForm();
                  }}
                  disabled={addForm}
                >
                  Search
                </button>
                <button
                  onClick={() => {
                    handleClearProcurementForm();
                  }}
                  disabled={!addForm}
                >
                  Clear
                </button>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
      {addForm ? (
        <Card className="m-2 p-3">
          <CardBody>
            <Row>
              <Col>
                <div className="divider divider-left pt-0">
                  <div className="divider-text text-secondary font-weight-bolder">
                    New Procurement Info
                  </div>
                </div>
                <div className="border rounded rounded-3 p-1">
                  <Row>
                    <Col lg={8} xl={8} sm={12} md={12} xs={12}>
                      <div className="d-flex-row">
                        <div className="d-flex justify-content-between">
                          <FormGroup
                            tag={Col}
                            lg={4}
                            xl={4}
                            sm={4}
                            md={4}
                            xs={4}
                          >
                            <Label
                              className="text-dark font-weight-bolder"
                              for="supplier"
                            >
                              Supplier
                            </Label>
                            <Select
                              placeholder="Select Supplier"
                              id="supplier"
                              options={dropDownPO}
                              isSearchable
                              isClearable
                              classNamePrefix="select"
                            />
                          </FormGroup>
                          <FormGroup
                            tag={Col}
                            lg={4}
                            xl={4}
                            sm={4}
                            md={4}
                            xs={4}
                          >
                            <Label
                              className="text-dark font-weight-bolder"
                              for="currency"
                            >
                              Currency
                            </Label>
                            <Select
                              placeholder="Select Currency"
                              id="currency"
                              options={dropDownPO}
                              isSearchable
                              isClearable
                              classNamePrefix="select"
                            />
                          </FormGroup>
                          <FormGroup
                            tag={Col}
                            lg={4}
                            xl={4}
                            sm={4}
                            md={4}
                            xs={4}
                          >
                            <Label
                              className="text-dark font-weight-bolder"
                              for="wareHouse"
                            >
                              Warehouse
                            </Label>
                            <Select
                              placeholder="Select Ware House"
                              id="wareHouse"
                              options={dropDownPO}
                              isSearchable
                              isClearable
                              classNamePrefix="select"
                            />
                          </FormGroup>
                        </div>
                        <div className="d-flex justify-content-between">
                          <FormGroup
                            tag={Col}
                            lg={3}
                            xl={3}
                            sm={3}
                            md={3}
                            xs={3}
                          >
                            <Label
                              className="text-dark font-weight-bolder"
                              for="orderDate"
                            >
                              Order Date
                            </Label>
                            <Input
                              id="orderDate"
                              type="date"
                              name="orderDate"
                              defaultValue={moment(new Date()).format(
                                "yy-MM-DD"
                              )}
                            />
                          </FormGroup>
                          <FormGroup
                            tag={Col}
                            lg={3}
                            xl={3}
                            sm={3}
                            md={3}
                            xs={3}
                          >
                            <Label
                              className="text-dark font-weight-bolder"
                              for="receivedDate"
                            >
                              Received Date
                            </Label>
                            <Input
                              id="receivedDate"
                              type="date"
                              name="receivedDate"
                              defaultValue={moment(new Date()).format(
                                "yy-MM-DD"
                              )}
                            />
                          </FormGroup>
                          <FormGroup
                            tag={Col}
                            lg={3}
                            xl={3}
                            sm={3}
                            md={3}
                            xs={3}
                          >
                            <Label
                              className="text-dark font-weight-bolder"
                              for="term"
                            >
                              Term
                            </Label>
                            <Select
                              placeholder="Select Term"
                              id="term"
                              options={dropDownPO}
                              isSearchable
                              isClearable
                              classNamePrefix="select"
                            />
                          </FormGroup>
                          <FormGroup
                            tag={Col}
                            lg={3}
                            xl={3}
                            sm={3}
                            md={3}
                            xs={3}
                          >
                            <Label
                              className="text-dark font-weight-bolder"
                              for="purchaseTerm"
                            >
                              Purchase Term
                            </Label>
                            <Select
                              placeholder="Select Purchase Term"
                              id="purchaseTerm"
                              options={dropDownPO}
                              isSearchable
                              isClearable
                              classNamePrefix="select"
                            />
                          </FormGroup>
                        </div>
                        <div className="d-flex justify-content-between">
                          <FormGroup
                            tag={Col}
                            lg={12}
                            xl={12}
                            sm={12}
                            md={12}
                            xs={12}
                          >
                            <Label
                              className="text-dark font-weight-bolder"
                              for="remarksId"
                            >
                              Remarks
                            </Label>
                            <Input
                              placeholder="Remarks"
                              id="remarksId"
                              type="textarea"
                              name="remarks"
                              bsSize="sm"
                            />
                          </FormGroup>
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} xl={4} sm={12} md={12} xs={12}>
                      <Table size="sm">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Style</th>
                            <th>PO</th>
                            <th>Order Qty</th>
                            <th>Shipment Date</th>
                            <th>Exporter</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Style </td>
                            <td>PO</td>
                            <td>Order Qty</td>
                            <td>Shipment Date</td>
                            <td>Exporter</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="divider divider-left pt-0">
                  <div className="divider-text text-secondary font-weight-bolder">
                    Fabric Details
                  </div>
                </div>
                <div className="border rounded rounded-3 p-1">
                  <Table size="sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Item Group</th>
                        <th>Item Sub Group</th>
                        <th>Costing Amount</th>
                        <th>BOM Amount</th>
                        <th>Additional BOM Amount</th>
                        <th>Costing/PC(avg)</th>
                        <th>BOM Amount/PC(avg)</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            id="checkbox"
                            name="checkbox"
                            value="checkbox"
                          />
                        </td>
                        <td>Item Group</td>
                        <td>Item Sub Group</td>
                        <td>Costing Amount</td>
                        <td>BOM Amount</td>
                        <td>Additional BOM Amount</td>
                        <td>Costing PC</td>
                        <td>BOM Amount PC</td>
                        <td>Action</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      ) : null}
    </>
  );
};

export default ProcurementAddForm;
