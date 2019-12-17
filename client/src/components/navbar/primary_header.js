import React, {useState} from 'react'
import {
  Link
} from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const PrimaryHeader = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Reactstrap</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={RRNavLink} exact to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} exact to="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} exact to="/contact">Contact</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default PrimaryHeader;
