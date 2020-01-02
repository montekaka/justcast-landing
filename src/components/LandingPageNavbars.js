import React, { useState } from 'react';
import {Link} from 'react-router-dom'
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

import {Context as PodcastContext} from '../context/PodcastContext'

const LandingPageNavbars = ({navItems}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const handleNavItemClicked = () => {
    if(isOpen) {
      setIsOpen(false);
    }
  }

  const _navItems = navItems.map((navItem, index) => 
    <NavItem onClick={handleNavItemClicked} key={index}>
      <NavLink to={navItem.url} tag={Link}>{navItem.label}</NavLink>
    </NavItem>
  )

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link className="navbar-brand" to={`/`}>
            JustCast
          </Link>
          <NavbarToggler onClick={toggle} />   
          <Collapse isOpen={isOpen} navbar>
            <NavbarToggler onClick={toggle} >x</NavbarToggler>
            <Nav className="mr-auto ml-auto" navbar>
              {_navItems}           
            </Nav>
            <a className="navbar-btn btn btn-sm btn-primary lift ml-auto" href={`${process.env.REACT_APP_DASHBOARD_BASE_PATH}/signin`} target="_blank">
              Sign in
            </a>
          </Collapse>
        </div>
      </nav>
    </div>
  )
}

export default LandingPageNavbars;