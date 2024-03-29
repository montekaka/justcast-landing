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
import {Context as ThemeContext} from '../context/ThemeContext'

const TopNavbars = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const handleNavItemClicked = () => {
    if(isOpen) {
      setIsOpen(false);
    }    
  }

  const {state} = useContext(PodcastContext)
  const themeContext = useContext(ThemeContext);
  const themeState = themeContext.state;
  const { navbarColorTheme, backgroundColor, buttonTextColor, buttonColor, cardBackgroundColor, textColor, linkColor} = themeState;
  // console.log({backgroundColor, cardBackgroundColor, textColor, linkColor})
  // navbar-light bg-white
  if(state.show.is_private) {
    return null;
  }
  
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${navbarColorTheme}`}>
        <div className="container-fluid">
          <Link             
            className="navbar-brand" 
            to={`/shows/${state.show.slug}/audioposts`}
            style={{color: textColor}}
          >
            {state.show.name}
          </Link>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
            <NavbarToggler onClick={toggle}>x</NavbarToggler>
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
              className="navbar-btn btn btn-sm lift ml-auto" 
              href={`${process.env.REACT_APP_RSS_FEED_BASE_PATH}/shows/${state.show.slug}/audioposts.rss`}
              target="_blank"
              style={{backgroundColor: buttonColor, color: buttonTextColor}}
            >
              RSS feed
            </a>            
          </Collapse>
        </div>
      </nav>
    </div>
  )
}

export default TopNavbars;