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
import React ,{useEffect, useState} from 'react';
import Input_panel from './Input_panel';
import Output_panel from './Output_panel';
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col , Progress,Label,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import { useSelector } from 'react-redux';

function Admin_Panel() {
  
  const [isOpen,setOpen] = useState(false);
  const [results , setResults] = useState([]);  
  const permission = useSelector(state => state.permission);
  const is_auth = useSelector(state => state.is_auth);
  const toggleButton = () => {
    console.log(permission);
    console.log(is_auth);
    setOpen(!isOpen);
  }
  const CashChange = (event) => {
    let val = event.target.value;
    window.Cash(val);
  }

  const StopMining = () => {
    window.Stopming();
  }

  useEffect(() => {
    //console.log("####");
    window.admin();
  }, [])

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12" style={{backgroundColor : 'grey'}}>
            <Card className="card-plain">
              <CardHeader style={{fontSize:'32px'}}>BTC Miner Admin Panel</CardHeader>
              <CardBody>
                <div
                  id="map"
                  className="map"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                <Row style={{justifyContent:'center',textAlign:'center'}}>
                  <Label color='white' style={{fontSize:'42px'}}>
                      Cash Balance : <label id='cash' style={{fontSize:'42px'}}>$0</label>
                  </Label>  
                </Row>
                <Row style={{justifyContent:'center',textAlign:'center'}}>
                  <Label color='white' style={{fontSize:'42px'}}>
                      Bitcoin Balance : <label id='bitcoin' style={{fontSize:'42px'}}>$0</label>
                  </Label>  
                </Row>
                <Row style={{justifyContent:'center',marginTop:'30px'}}>
                  <Col md="8">
                    <div className="progress-container progress-danger" style={{height : '60px',borderStyle:'solid',borderWidth:'2px',borderRadius:'10px'}} id="prog">
                      {/* <span className="progress-badge">Primary</span> */}
                      <Progress max="100" value="25"   bar animated striped color='success' style={{height : '60px',borderRadius:'10px'}} id="progress">
                        <span className="progress-value">25%</span>
                      </Progress>
                    </div>
                  </Col>
                </Row>
                <Row style={{justifyContent:'center',marginTop:'30px'}}>
                  <Col md="3" style={{textAlign:'center'}}>
                  <ButtonDropdown isOpen={isOpen} toggle={toggleButton} >
                    <DropdownToggle caret color="success" >
                      Select Cash
                    </DropdownToggle>
                    <DropdownMenu flip={false} persist={true}>
                      <DropdownItem onClick={CashChange} value="3">0</DropdownItem>
                      <DropdownItem onClick={CashChange} value="1">100</DropdownItem>
                      <DropdownItem onClick={CashChange} value="2">1000</DropdownItem>
                      {/* <DropdownItem divider/> */}
                      
                    </DropdownMenu>
                  </ButtonDropdown>
                  </Col>
                  <Col md="3" style={{textAlign:'center'}}>
                    <button type="button" className="btn btn-success " onClick={StopMining}>
                      Stop mining
                    </button>
                  </Col>
                </Row>
                
  
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Admin_Panel;
