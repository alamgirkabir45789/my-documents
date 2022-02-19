import _ from "lodash";
import React, { Fragment, useState } from "react";
import {
  Badge,
  Card,
  Col,
  Collapse,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
import CustomModal from "../../../utility/customComponent/CustomModal";
import productData from "../model/ProductData";
const sizeData = {
  width: 0,
  length: 0,
  total: 6,
  sizeDetails: [
    { id: 1, sizeName: "S", sizeQuantity: 1 },
    { id: 2, sizeName: "M", sizeQuantity: 2 },
    { id: 3, sizeName: "L", sizeQuantity: 3 },
  ],
};
const masterData = {
  cutPlanNo: "CUT-1",
  startDate: new Date().toLocaleDateString(),
  style: "Style-1",
  styleCategory: "Category-1",
  buyerName: "Buyer-1",
  totalQty: 0,
  totalLayCount: 0,
  layPerCut: 0,
};

const ProductAddForm = () => {
  const [orderDetails, setOrderDetails] = useState(
    productData.map((m) => ({
      ...m,
      isOpen: true,
      details: m.details.map((n) => ({ ...n, isChecked: false })),
    }))
  );

  const [sizeInfo, setSizeInfo] = useState(sizeData);

  const [masteInfo, setMasteInfo] = useState(masterData);
  const [openModal, setOpenModal] = useState(false);
  const [sizeRatio, setSizeRatio] = useState([]);

  const handleChangeCutQty = (e, index, ndx) => {
    const { value } = e.target;
    const _cutQtyDetails = [...orderDetails];

    const totalSizeAmount = sizeInfo.total;
    const checkedItem = _cutQtyDetails[index];
    const clickItem = [...checkedItem.details];
    const clickIndex = clickItem[ndx];
    clickIndex.cutQuantity = Number(value);
    if (clickIndex.cutQuantity > clickIndex.balance) {
      clickIndex.cutQuantity = 0;
    }
    const layInfo = clickIndex.cutQuantity / totalSizeAmount;
    clickIndex.layCount = Number.isInteger(layInfo) ? layInfo : 0;
    const masterTotal = _cutQtyDetails.map((m) =>
      m.details.filter((f) => f.isChecked)
    );
    const master = masterTotal.flat();
    let masterQty = 0;
    let masterLayInfo = 0;
    for (let element of master) {
      masterQty += element.cutQuantity;
      masterLayInfo += element.layCount;
    }

    clickIndex.balance =
      clickIndex.withExtra - (clickIndex.cutQuantity + clickIndex.previous);

    _cutQtyDetails[clickIndex] = clickIndex;
    setOrderDetails(_cutQtyDetails);
    setMasteInfo({
      ...masteInfo,
      totalQty: masterQty,
      totalLayCount: masterLayInfo,
    });
  };

  const handleChangeExtra = (e, index, ndx) => {
    const { value } = e.target;
    const _extraDetails = [...orderDetails];
    const checkedItem = _extraDetails[index];
    const clickedItem = [...checkedItem.details];
    const clickIndex = clickedItem[ndx];
    clickIndex.extra = Number(value);
    // const withExtraValue = (clickIndex.orderQty * clickIndex.extra) / 100;
    clickIndex.withExtra =
      clickIndex.orderQty + (clickIndex.orderQty * clickIndex.extra) / 100;
    clickIndex.balance = clickIndex.withExtra - clickIndex.previous;
    _extraDetails[clickIndex] = checkedItem;
    setOrderDetails(_extraDetails);
  };

  const handleCheckBoxChange = (e, index, ndx) => {
    const _details = [...orderDetails];
    const clickItem = _details[index];
    const checkedItem = [...clickItem.details];
    const clickIndex = checkedItem[ndx];
    clickIndex.isChecked = !clickIndex.isChecked;

    const remainTotal = masteInfo.totalQty - clickIndex.cutQuantity;
    const remainLayTotal = masteInfo.totalLayCount - clickIndex.layCount;
    if (!e.target.checked) {
      clickIndex.cutQuantity = 0;
      clickIndex.layCount = 0;
      clickIndex.balance = clickIndex.withExtra - clickIndex.previous;
      clickIndex.extra = 0;
      setMasteInfo({
        ...masteInfo,
        totalQty: remainTotal,
        totalLayCount: remainLayTotal,
      });
    }
    // _details[clickIndex] = clickIndex;
    setOrderDetails(_details);
  };

  const handleClick = (index) => {
    const _orderDetails = [...orderDetails];
    const clickItem = _orderDetails[index];
    clickItem.isOpen = !clickItem.isOpen;
    _orderDetails[index] = clickItem;
    setOrderDetails(_orderDetails);
  };

  const onSizeQuantityChange = (e, sId) => {
    const { value } = e.target;
    console.log(value);
    const _sizeInfo = _.cloneDeep(sizeInfo);
    const inputItem = _sizeInfo.sizeDetails;
    const inputData = inputItem[sId];
    inputData.sizeQuantity = Number(value);
    const totalSizeQty = inputItem.reduce((acc, curr) => {
      acc = Number(acc + curr.sizeQuantity);
      return acc;
    }, 0);
    _sizeInfo.total = totalSizeQty;
    _sizeInfo[inputData] = inputItem;
    setSizeInfo(_sizeInfo);
  };

  const handleOpenModal = () => {
    console.log("click");
    setOpenModal(!openModal);
  };
  const handleModalSubmit = () => {
    setOpenModal(!openModal);
  };
  const handleToogleModalClose = () => {
    setOpenModal(!openModal);
  };

  return (
    <Card className="m-2 p-3">
      <Row>
        <Col lg={6} sm={6} md={6} xs={6}>
          <FormGroup row>
            <FormGroup tag={Col} xs={6}>
              <Label for="cutPlan">Cut Plan No</Label>
              <Input type="text" value={masteInfo.cutPlanNo} />
            </FormGroup>
            <FormGroup tag={Col} xs={6}>
              <Label for="cutPlan">Start Date</Label>
              <Input type="text" value={masteInfo.startDate} />
            </FormGroup>{" "}
            <FormGroup tag={Col} xs={6}>
              <Label for="cutPlan">Style</Label>
              <Input type="text" value={masteInfo.style} />
            </FormGroup>
            <FormGroup tag={Col} xs={6}>
              <Label for="cutPlan">Style Category</Label>
              <Input type="text" value={masteInfo.styleCategory} />
            </FormGroup>{" "}
            <FormGroup tag={Col} xs={6}>
              <Label for="cutPlan">Buyer Name</Label>
              <Input
                type="text"
                placeholder="Cut Plan No"
                value={masteInfo.buyerName}
              />
            </FormGroup>
            <FormGroup tag={Col} xs={6}>
              <Label for="cutPlan">Total Quantity</Label>
              <Input type="text" value={masteInfo.totalQty} />
            </FormGroup>{" "}
            <FormGroup tag={Col} xs={6}>
              <Label for="cutPlan">Total Lay Count</Label>
              <Input type="text" value={masteInfo.totalLayCount} />
            </FormGroup>
            <FormGroup tag={Col} xs={6}>
              <Label for="cutPlan">Lay Per Cut</Label>
              <Input type="text" value={masteInfo.layPerCut} />
            </FormGroup>
          </FormGroup>
        </Col>{" "}
        <Col lg={6} sm={6} md={6} xs={6}>
          <FormGroup row>
            <FormGroup tag={Col} xs={6}>
              <Input disabled placeholder="Size" />
            </FormGroup>{" "}
            <FormGroup tag={Col} xs={6}>
              <Input disabled placeholder="Quantity" />
            </FormGroup>
            {sizeInfo.sizeDetails.map((m, sId) => (
              <Fragment key={m.id}>
                <FormGroup tag={Col} xs={6}>
                  <Input disabled value={m.sizeName} />
                </FormGroup>{" "}
                <FormGroup tag={Col} xs={6}>
                  <Input
                    value={m.sizeQuantity}
                    onFocus={(e) => e.target.select()}
                    onChange={(e) => {
                      onSizeQuantityChange(e, sId);
                    }}
                  />
                </FormGroup>
              </Fragment>
            ))}
            <FormGroup tag={Col} xs={6}>
              <Input disabled placeholder="Total" />
            </FormGroup>{" "}
            <FormGroup tag={Col} xs={6}>
              <Input disabled value={sizeInfo.total} />
            </FormGroup>{" "}
            <FormGroup tag={Col} xs={6}>
              <Label for="width">Width</Label>
              <Input type="text" placeholder="Width" />
            </FormGroup>{" "}
            <FormGroup tag={Col} xs={6}>
              <Label for="Length">Length</Label>
              <Input type="text" placeholder="Length" />
            </FormGroup>
          </FormGroup>
        </Col>
      </Row>
      <div className="border rounded rounded-3 mr-1 mt-1 ml-1 mb-2">
        <FormGroup
          tag={Col}
          xs="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"
          className="mt-n1"
        >
          <Badge color="primary">{`PO Details`}</Badge>
        </FormGroup>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>PO No</th>
              <th>Destination</th>
              <th>Inspection Date</th>
              <th>Shipment Mode</th>
              <th>Shipment Date</th>
              <th>Order Qty</th>
              <th>Order UOM</th>
              <th>Excess Qty</th>
              <th>Wastage Qty</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.map((m, index) => {
              return (
                <Fragment key={m.id}>
                  <tr>
                    <td>
                      <button onClick={() => handleClick(index)}>open</button>
                    </td>
                    <td>{m.poNo}</td>
                    <td>{m.destination}</td>
                    <td>{m.inspectionDate}</td>
                    <td>{m.shipmentMode}</td>
                    <td>{m.shipmentDate}</td>
                    <td>{m.orderQty}</td>
                    <td>{m.orderUOM}</td>
                    <td>{m.excess}</td>
                    <td>{m.wastage}</td>
                  </tr>
                  <tr>
                    <td colSpan={10}>
                      <Collapse isOpen={m.isOpen}>
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Color</th>
                              <th>Order Qty</th>
                              <th>Extra</th>
                              <th>With Extra</th>
                              <th>Previous</th>
                              <th>Lay Count</th>
                              <th>Cut Qty</th>
                              <th>RC</th>
                              <th>Balance</th>
                            </tr>
                          </thead>
                          <tbody>
                            {m.details.map((n, ndx) => {
                              return (
                                <tr key={n.id}>
                                  <td>
                                    <input
                                      type="checkbox"
                                      value={n.isChecked}
                                      onChange={(e) => {
                                        handleCheckBoxChange(e, index, ndx);
                                      }}
                                    />
                                  </td>
                                  <td>{n.color}</td>
                                  <td>{n.orderQty}</td>
                                  <td>
                                    {n.isChecked ? (
                                      <Input
                                        type="number"
                                        value={n.extra}
                                        onFocus={(e) => e.target.select()}
                                        onChange={(e) =>
                                          handleChangeExtra(e, index, ndx)
                                        }
                                      />
                                    ) : (
                                      n.extra
                                    )}
                                  </td>
                                  <td>{n.withExtra}</td>
                                  <td>{n.previous}</td>
                                  <td>{n.layCount}</td>
                                  <td>
                                    {n.isChecked ? (
                                      <Input
                                        type="text"
                                        value={n.cutQuantity}
                                        onFocus={(e) => e.target.select()}
                                        onChange={(e) => {
                                          handleChangeCutQty(e, index, ndx);
                                        }}
                                      />
                                    ) : (
                                      n.cutQuantity
                                    )}
                                  </td>

                                  <td>
                                    <span>
                                      <button
                                        onClick={() => {
                                          handleOpenModal();
                                        }}
                                      >
                                        open
                                      </button>
                                    </span>
                                  </td>
                                  <td>{n.balance}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </Collapse>
                    </td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </Table>
      </div>
      <CustomModal
        openModal={openModal}
        handleToogleModalClose={handleToogleModalClose}
        handleModalSubmit={handleModalSubmit}
      >
        <Table>
          <thead>
            <tr>
              <th>Size</th>
              <th>Ratio</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>A</td>
            <td>A</td>
            <td>A</td>
          </tr>
          </tbody>
        </Table>
      </CustomModal>
    </Card>
  );
};

export default ProductAddForm;
