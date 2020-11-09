import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import { useStateValue } from '../StateProvider/StateProvider';
import './Header.css'
import logo from '../../images/carousel/logo.png'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const Header = () => {
  const[{user},dispatch] = useStateValue();
  const[{basket},basketDispatch] = useStateValue();
  const handleAuthentication = () => {
    if(user){
      auth.signOut();
  }
  }

    return (
    <nav className="pt-4 container nav-text" >
    <Navbar bg="white" expand="lg">
        <Navbar.Brand href="#home">
        <img className="header-logo" width="200" src={logo} alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto align-items-center">
            <ShoppingCartOutlinedIcon ></ShoppingCartOutlinedIcon>
            <Link to="/checkout" className="mr-3 ml-3 align-items-center" ><h4 className="text-dark">Cart</h4> </Link>
          <Link to="/checkout">
          
             <span className="header-optionLineTwo header-basketCount warning text-dark">
              {basket?.length}
             </span>
          
        </Link>
            <Nav.Link className="mr-5 align-items-center"><PermIdentityIcon></PermIdentityIcon></Nav.Link>
     
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </nav>
       

      
    );
};

export default Header;