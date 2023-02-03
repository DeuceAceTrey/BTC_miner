/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import { useEffect } from "react";
import NotificationAlert from "react-notification-alert";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  Label,
  Modal,ModalBody,ModalHeader, Input,
} from "reactstrap";

function Users() {
  const [tbcontent, setTbcontent] = useState("");
  const [user_infos, setUser_infos] = useState([]);
  const notificationAlertRef = React.useRef(null);
  const [modalAddFunds, setModalAddFunds] = React.useState(false);
  const [currentUser , setCurrentUser] = useState('');
  const [fundAmount , setFundAmount] = useState(0);
  const [currentfund , setCurrentFund] = useState(0);
  const showToast = (place, type, message) => {
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>{message}</div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7,
    };
    notificationAlertRef.current.notificationAlert(options);
  };
  useEffect(() => {
    window.Stoprefresh();
    getUsers();
  }, []);

  // const AddFund = (event) => {
  //   let index = event.target.getAttribute("data_key");
  //   console.log(user_infos[index]);
  // };

  const ChangePermission = (event) => {
    let index = event.target.getAttribute("data_key");
    let user_data = user_infos[index];
    fetch("http://localhost:5000/data/changePermission", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        email: user_data["email"],
        permission: user_data["permission"],
      }),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        let result = res.data;
        if (result == "success") {
          showToast("tl", "success", "Successfully updated");
          getUsers();
        } else {
          showToast("tl", "danger", "Can not modify Super Admin.");
        }
      });
  };

  const getUsers = () => {
    fetch("http://localhost:5000/data/getUser", {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        let result = res.data;
        setUser_infos(result);
      });
  };

  const toggleModalAddFunds = (event) => {
    let index = event.target.getAttribute("data_key");
    if(index)
    {
      let user_data = user_infos[index];
      setCurrentUser(user_data['email']);
      setCurrentFund(user_data['funds']);
    }
    setModalAddFunds(!modalAddFunds);
  };

  const AddFundsconfirm = (event) => {
    
    toggleModalAddFunds(event);
    let added_fund = parseFloat(fundAmount) + parseFloat(currentfund);
    fetch("http://localhost:5000/data/addFunds", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        email: currentUser,
        funds: added_fund,
      }),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        let result = res.data;
        if (result == "success") {
          showToast("tl", "success", "Successfully updated");
          getUsers();
        } 
      });

    
  }

  return (
    <>
      <div className="content">
        <NotificationAlert ref={notificationAlertRef} />
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Simple Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>No</th>
                      <th>EMail</th>
                      <th>Verified</th>
                      <th className="text-center">Permission</th>
                      <th className="text-center">Funds</th>
                      <th className="text-center">Manage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user_infos.map((prop, key) => {
                      return (
                        <tr>
                          <td>{key + 1}</td>
                          <td>{prop["email"]}</td>
                          <td>
                            {prop["verified"] == 0
                              ? "Not Verified"
                              : "Verified"}
                          </td>
                          <td className="text-center">
                            <Button
                              className={
                                prop["permission"] > 0
                                  ? "btn-info"
                                  : "btn-success"
                              }
                              onClick={ChangePermission}
                              data_key={key}
                            >
                              {prop["permission"] == 0 ? "Client" : "Admin"}
                            </Button>
                          </td>
                          <td className="text-center">
                            {prop['funds']}
                          </td>
                          <td className="text-center">
                            <Button onClick={toggleModalAddFunds} data_key={key}>
                              Add Fund
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          {/* <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Table on Plain Background</CardTitle>
                <p className="category">Here is a subtitle for this table</p>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Country</th>
                      <th>City</th>
                      <th className="text-center">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">$36,738</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td className="text-center">$23,789</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td className="text-center">$56,142</td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                      <td className="text-center">$38,735</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td className="text-center">$63,542</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td className="text-center">$78,615</td>
                    </tr>
                    <tr>
                      <td>Jon Porter</td>
                      <td>Portugal</td>
                      <td>Gloucester</td>
                      <td className="text-center">$98,615</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col> */}
        </Row>
      </div>
      <Modal
        modalClassName="modal-secondary"
        isOpen={modalAddFunds}
        toggle={toggleModalAddFunds}
      >
        <ModalHeader style={{justifyContent:'center',alignItmes:'center'}}>
          <Label style={{fontSize:'20px'}}>Please click OK button to Add Funds</Label>
          
        </ModalHeader>
        <ModalBody >
          <Row style={{justifyContent:'center',alignItmes:'center'}}>
            <Label>EMail : {currentUser}</Label>
          </Row>
          <Row style={{justifyContent:'center',alignItmes:'center'}}>
            <Input value={fundAmount} onChange={(e)=>{setFundAmount(e.target.value)}} style={{color:'black',width:'50%'}}></Input>
          </Row>
          <Row style={{justifyContent:'center',alignItmes:'center'}}>
            <Button className="btn-success" onClick={AddFundsconfirm} style={{width:'150px'}}>ADD</Button>
            <Button className="btn-danger" onClick={toggleModalAddFunds} style={{width:'150px'}}>CANCEL</Button>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
}

export default Users;
