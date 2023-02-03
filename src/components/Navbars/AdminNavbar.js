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
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setAuth } from "../../Reducers/Auth";
import { useHistory } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  NavbarToggler,
  ModalHeader,
  Label,
  ModalBody,
  Row
} from "reactstrap";
import { Route, Switch } from "react-router-dom";
import { setPermission } from "../../Reducers/Auth";

function AdminNavbar(props) {
  const [collapseOpen, setcollapseOpen] = React.useState(false);
  const [modalSearch, setmodalSearch] = React.useState(false);
  const [modalLogout, setModalLogout] = React.useState(false);
  const [color, setcolor] = React.useState("navbar-transparent");
  const dispatch = useDispatch();
  const is_auth = useSelector(state => state.auth.is_auth);
  const history = useHistory();
  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  });
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setcolor("bg-white");
    } else {
      setcolor("navbar-transparent");
    }
  };
  // this function opens and closes the collapse on small devices
  const toggleCollapse = () => {
    if (collapseOpen) {
      setcolor("navbar-transparent");
    } else {
      setcolor("bg-white");
    }
    setcollapseOpen(!collapseOpen);
  };
  // this function is to open the Search modal
  const toggleModalSearch = () => {
    setmodalSearch(!modalSearch);
  };

  const toggleModalLogout = () => {
    setModalLogout(!modalLogout);
  };
  const getLog = () => {
    if(localStorage.getItem('logged') == 'loggedIn')
    {
      return (
        <><DropdownItem divider tag="li" /><NavLink>
          <DropdownItem className="nav-item" onClick={Logout}>Log out</DropdownItem>
        </NavLink></>
      );
    }
    else
    {
      return (
        <NavLink 
          //tag="li"
          href={'/admin/login'}
          className="nav-link"
          //activeClassName="active"
          onClick={props.toggleSidebar}
          >
          <DropdownItem className="nav-item">Log In</DropdownItem>
        </NavLink>
      )
    }
  }

  const Logout = () => {
    toggleModalLogout();
    //console.log('1');
  };

  const Logoutconfirm = () => {
    
    dispatch(setAuth(false));
    dispatch(setPermission(0));
    localStorage.setItem('logged','LoggedOut');
    toggleModalLogout();
    //window.location.href = "https://litigationbot.com/admin/Login";
    history.push('/admin/login');
  }
  return (
    <>
    
      <Navbar className={classNames("navbar-absolute", color)} expand="lg">
        
        <Container fluid>
          <div className="navbar-wrapper">
            <div
              className={classNames("navbar-toggle d-inline", {
                toggled: props.sidebarOpened
              })}
            >
              <NavbarToggler onClick={props.toggleSidebar}>
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </NavbarToggler>
            </div>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              {/* {props.brandText} */}
              BTC Miner
            </NavbarBrand>
          </div>
          <NavbarToggler onClick={toggleCollapse}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              {/* <InputGroup className="search-bar">
                <Button color="link" onClick={toggleModalSearch}>
                  <i className="tim-icons icon-zoom-split" />
                  <span className="d-lg-none d-md-block">Search</span>
                </Button>
              </InputGroup> */}
              {/* <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  nav
                >
                  <div className="notification d-none d-lg-block d-xl-block" />
                  <i className="tim-icons icon-sound-wave" />
                  <p className="d-lg-none">Notifications</p>
                </DropdownToggle>
                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Mike John responded to your email
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      You have 5 more tasks
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Your friend Michael is in town
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Another notification
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Another one
                    </DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="photo">
                    <img alt="..." src={is_auth ? require("assets/img/anime3.png") : require("assets/img/default-avatar.png")} />
                  </div>
                  <b className="caret d-none d-lg-block d-xl-block" />
                  <p className="d-lg-none">Log out</p>
                </DropdownToggle>
                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  
                    <NavLink 
                      //tag="li"                      
                      href={'/admin/register/'}
                      className="nav-link"
                      //activeClassName="active"
                      onClick={props.toggleSidebar}
                    >
                      <DropdownItem className="nav-item">Sign Up</DropdownItem>
                    </NavLink>
                    {getLog()}
                    {/* <NavLink 
                      //tag="li"
                      href={'/admin/login'}
                      className="nav-link"
                      activeClassName="active"
                      onClick={props.toggleSidebar}
                      >
                      <DropdownItem className="nav-item">Log In</DropdownItem>
                    </NavLink>
                    <DropdownItem divider tag="li" />
                    <NavLink 
                      //tag="li"
                    >
                      
                      <DropdownItem className="nav-item" onClick={Logout}>Log out</DropdownItem>
                    </NavLink> */}
                  </DropdownMenu>
                
              </UncontrolledDropdown>
              <li className="separator d-lg-none" />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal
        modalClassName="modal-secondary"
        isOpen={modalLogout}
        toggle={toggleModalLogout}
      >
        <ModalHeader style={{justifyContent:'center',alignItmes:'center'}}>
          <Label style={{fontSize:'20px'}}>Please click OK button to log out</Label>
          
        </ModalHeader>
        <ModalBody >
          <Row style={{justifyContent:'center',alignItmes:'center'}}>
            <Button className="btn-success" onClick={Logoutconfirm} style={{width:'150px'}}>OK</Button>
            <Button className="btn-danger" onClick={toggleModalLogout} style={{width:'150px'}}>CANCEL</Button>
          </Row>
        </ModalBody>
      </Modal>
      <Modal
        modalClassName="modal-search"
        isOpen={modalSearch}
        toggle={toggleModalSearch}
      >
        <ModalHeader>
          <Input placeholder="SEARCH" type="text" />
          <button
            aria-label="Close"
            className="close"
            onClick={toggleModalSearch}
          >
            <i className="tim-icons icon-simple-remove" />
          </button>
        </ModalHeader>
      </Modal>
    </>
  );
}

export default AdminNavbar;
