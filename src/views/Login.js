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
import React ,{useState} from 'react';
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col,InputGroup,Input,Label, Button,Alert,
  UncontrolledAlert,} from "reactstrap";
import NotificationAlert from "react-notification-alert";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { setAuth ,setPermission } from '../Reducers/Auth'




function Login() {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const notificationAlertRef = React.useRef(null);
  const permission = useSelector((state) => state.auth.permission);
  const dispatch = useDispatch()
  const history = useHistory();
  const showToast = (place,type,message) => {
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            {message}
          </div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };
    notificationAlertRef.current.notificationAlert(options);
  }

  const login = () => {
      fetch('http://localhost:5000/data/login', {
          method: 'POST',
          mode : 'cors',
          body:  JSON.stringify({'email' : email, 'password' : password}),
          headers: {
              'Access-Control-Allow-Origin': '*',
          }
      }).then(response => response.json()).then(res => 
      {
        let result = res.data
        
        if(result == 'fail0')
        {
            showToast('tl','danger','User not exists. Please register first');
            history.push('/admin/register');      
        }
        else if(result == 'fail1')
        {
            showToast('tl','warning','User not verified. Please verify your account in your Email')  ;      
        }
        else if(result == 'fail2')
        {
            showToast('tl','danger','Password incorrect. Please try again');
        }
        else
        {
            localStorage.setItem('logged','loggedIn');
            showToast('tl','success','Welcome to BTC Miner.');
            dispatch(setAuth(true));
            dispatch(setPermission(result));
            
            if(result > 0)
              history.push('/admin/admin');
            else
              history.push('/admin/client')
        }
        //console.log(res.data)
      })
    
  }

  return (
    <>
    
      <div className="content" style={{padding:"78px 30px 30px 30px ",backgroundColor:'grey'}}>
      <NotificationAlert ref={notificationAlertRef} />
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader style={{justifyContent:'center',alignItems:'center',display:'flex',fontSize:'36px'}}>WELCOME TO BTC Miner</CardHeader>
              <CardBody>
                <Row style={{justifyContent:'center',alignItems:'center'}}>
                  <Col lg="4" style={{marginTop:'100px'}}>
                    <Label style={{fontSize:'24px'}}>
                      EMail
                    </Label>
                    <Input type='text' placeholder='Please insert your email here' bsSize='sm' style={{fontSize:'24px'}} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                  </Col>
                </Row>
                <Row style={{justifyContent:'center',alignItems:'center'}}>
                  <Col md="4" style={{marginTop:'50px'}}>
                    <Label style={{fontSize:'24px'}}>
                      Password
                    </Label>
                    <Input type='password' placeholder='Please insert your password here' bsSize='sm' style={{fontSize:'24px'}} value={password} onChange={(e)=>{setPassword(e.target.value)}} onKeyDown={(e)=>(e.key == "Enter" ? login() : null)}/>
                  </Col>
                </Row>
                <Row style={{justifyContent:'center',alignItems:'center'}}>
                    <Button className='btn-fill btn-primary' style={{marginTop:'30px',backgroundImage:'linear-gradient(to bottom left, #CBA557, #CBA557, #CBA557)',width:'20%'}} onClick={login}>Log In</Button>                  
                </Row>
                
                
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Login;
