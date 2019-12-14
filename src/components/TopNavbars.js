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
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" id="navbar-text-color" href={`/shows/${state.show.id}`}>
            {state.show.name}
          </a>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <NavbarToggler onClick={toggle} >x</NavbarToggler>
            <Nav className="mr-auto ml-auto" navbar>
              <NavItem>
                <NavLink href={`/shows/${state.show.id}`}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={`/shows/${state.show.id}/episodes`} >Episodes</NavLink>
              </NavItem>
            </Nav>
            <a className="navbar-btn btn btn-sm btn-primary lift ml-auto" href="https://themes.getbootstrap.com/product/landkit/" target="_blank">
              RSS feed
            </a>            
          </Collapse>
        </div>
      </nav>
    </div>
  )
}

export default TopNavbars;