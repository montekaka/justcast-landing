import React, { useState, useContext } from 'react';
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

const TopNavbars = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const handleNavItemClicked = () => {
    if(isOpen) {
      setIsOpen(false);
    }    
  }

  const {state} = useContext(PodcastContext)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" id="navbar-text-color" to={`/shows/${state.show.id}`}>
            {state.show.name}
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <NavbarToggler onClick={toggle} >x</NavbarToggler>
            <Nav className="mr-auto ml-auto" navbar>
              <NavItem onClick={handleNavItemClicked}>
                <NavLink to={`/shows/${state.show.id}`} tag={Link}>Home</NavLink>
              </NavItem>
              <NavItem onClick={handleNavItemClicked}>
                <NavLink to={`/shows/${state.show.id}/episodes`} tag={Link}>Episodes</NavLink>
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