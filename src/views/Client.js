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
import { Card, CardHeader, CardBody, Row, Col , Progress,Label,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input} from "reactstrap";

function Admin() {
  
  const [results , setResults] = useState([]);  
  
  
  const StartMining = () => {
    window.mining();
  }

  const WithDraw = () => {
    window.withraw();
  }

  useEffect(() => {
    //console.log("####");
    window.init();
  }, [])

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12" style={{backgroundColor : 'grey'}}>
            <Card className="card-plain">
              <CardHeader style={{fontSize:'32px'}}>BTC Miner</CardHeader>
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
                <Row style={{justifyContent:'center',alignItems:'center',marginTop:'20px'}}>
                  
                  <Col md="6" style={{display:'flex',alignItems:'center'}}>
                    <Label style={{marginBottom:'0px',marginRight:'30px',fontSize:'24px'}}>
                      Password
                    </Label>
                    <Input id='code'>
                    </Input>
                  </Col>
                </Row>
                <Row style={{justifyContent:'center',marginTop:'30px'}}>
                  <Col md="3" style={{textAlign:'center'}}>
                    <button type="button" className="btn btn-success " onClick={StartMining}>
                        Start Mining
                    </button>
                  </Col>
                  <Col md="3" style={{textAlign:'center'}}>
                    <button type="button" className="btn btn-success " onClick={WithDraw}>
                      WithDraw
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

export default Admin;
