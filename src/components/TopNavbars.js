import React, { useState, useContext } from 'react';
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

const TopNavbars = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const {state} = useContext(PodcastContext)

  return (
    <div>
      <Navbar className="navbar navbar-expand-md navbar-dark bg-dark">
        <NavbarBrand href={`/shows/${state.show.id}`}>{
          state.show.name
        }</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href={`/shows/${state.show.id}`}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={`/shows/${state.show.id}/episodes`}>Episodes</NavLink>
            </NavItem>            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default TopNavbars;