import React, { Component } from 'react';
import {BrowserRouter as Route, Link} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import setAuthToken from "../../utils/setAuthToken";
import { logout, fetchUserData } from "../../Actions/CompanyAction";
import 'react-toastify/dist/ReactToastify.css';
import history from '../../history'


import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
    Row,
  Col,
  NavbarBrand
} from "reactstrap";


class Header extends React.Component {
	constructor(props) {
      super(props);
      this.state = {
         isOpen: false
      };
  }
  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  componentDidMount() {
    console.log("Header loaded")
    setAuthToken()
    this.props.fetchUserData().then((result)=>{
      this.props.getAuth()
    }).catch((err)=>{
    })
  }


  render() {
    var isUserLoggedin =  this.props && this.props.login && this.props.login.loggedIn
    var menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    
	 return (
    <div>

      <ToastContainer position="top-right" />
      <Navbar  className="navbar navbar-expand-lg navbar-dark bg-primary"  expand="lg" >
          <Container>
            <NavbarBrand href="/" onClick={e => e.preventDefault()}>
               <img src="logo.png" alt="logo" />
            </NavbarBrand>
            <button
              aria-controls="navbar-default"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-default"
              data-toggle="collapse"
              id="navbar-default"
              type="button"  >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-default">
              <Nav className="ml-lg-auto" navbar>
                   <Nav className="navbar-nav-hover align-items-lg-center ml-lg-auto" navbar>
                      <NavItem> 
                          <Link className="nav-link" to="/">Home</Link>
                      </NavItem>
                      <NavItem> 
                          <Link className="nav-link" to="/about">About Us</Link>
                      </NavItem>
                      <NavItem> 
                         <Link className="nav-link" to="/deelears">Deelears</Link>
                      </NavItem>
                      <NavItem>
                         <Link className="nav-link" to="/testnimonial">Testnimonial</Link> 
                      </NavItem>
                      { isUserLoggedin &&
                          <UncontrolledDropdown nav>
                            <DropdownToggle nav>
                              <span className="nav-link-inner--text">Stock <i class="fa fa-caret-down" aria-hidden="true"></i></span>
                            </DropdownToggle>
                            <DropdownMenu>
                             <Link class="dropdown-item" to="add-stock">Add Stock</Link>
                             <Link class="dropdown-item" to="list-stock">List Stock</Link>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        }
                        {isUserLoggedin && 
                           <NavItem> 
                              <Link className="nav-link loggin-menu" onClick={(e) => {e.preventDefault(); this.props.logoutRequest();  window.location.reload();}} >Logout</Link>
                          </NavItem>
                        }
                        {!isUserLoggedin && 
                            <NavItem> 
                                <Link className="nav-link loggin-menu" to="/login">User Login</Link>
                            </NavItem>
                        }
                        {!isUserLoggedin && 
                            <NavItem> 
                                <Link className="nav-link loggin-menu" to="/sign-up">User Register</Link>
                            </NavItem>
                        }
                        <NavItem> 
                               <Link className="nav-link contact-menu" to="/contactus">Contact Us</Link>
                        </NavItem>
                  </Nav>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>

      

      </div>
      
      )
	}
}


const mapStateToProps = (state) => {
  return {
    login: state.login,
    user: state.user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAuth: () => dispatch({type:'GET_AUTH'}),
    logoutRequest: () => dispatch(logout()),
    fetchUserData: () => dispatch(fetchUserData())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);