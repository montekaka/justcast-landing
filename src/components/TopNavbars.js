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
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <Link className="navbar-brand" to={`/shows/${state.show.slug}/audioposts`}>
            {state.show.name}
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <NavbarToggler onClick={toggle} >x</NavbarToggler>
            <Nav className="mr-auto ml-auto" navbar>
              <NavItem onClick={handleNavItemClicked}>
                <NavLink to={`/shows/${state.show.slug}/audioposts`} tag={Link}>HOME</NavLink>
              </NavItem>
              <NavItem onClick={handleNavItemClicked}>
                <NavLink to={`/shows/${state.show.slug}/about_us`} tag={Link}>ABOUT</NavLink>
              </NavItem>
              <NavItem onClick={handleNavItemClicked}>
                <NavLink to={`/shows/${state.show.slug}/episodes`} tag={Link}>EPISODES</NavLink>
              </NavItem>
              <NavItem onClick={handleNavItemClicked}>
                <NavLink to={`/shows/${state.show.slug}/subscribe`} tag={Link}>SUBSCRIBE</NavLink>
              </NavItem>                            
            </Nav>
            <a
              className="navbar-btn btn btn-sm btn-primary lift ml-auto" 
              href={`${process.env.REACT_APP_API_PROXY_SERVER_BASE_PATH}/shows/${state.show.slug}/audioposts.rss`}
              target="_blank">
              RSS feed
            </a>            
          </Collapse>
        </div>
      </nav>
    </div>
  )
}

export default TopNavbars;