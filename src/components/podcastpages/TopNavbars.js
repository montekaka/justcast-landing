import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom'
import {
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const TopNavbars = (props) => {
  const {is_private, name, slug, navbarColorTheme, buttonTextColor, buttonColor, textColor} = props;

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleNavItemClicked = () => {
    if(isOpen) {
      setIsOpen(false);
    }    
  }
  
  // console.log({backgroundColor, cardBackgroundColor, textColor, linkColor})
  // navbar-light bg-white
  if(is_private) {
    return null;
  }
  
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${navbarColorTheme}`}>
        <div className="container-fluid">
          <Link             
            className="navbar-brand" 
            to={`/shows/${slug}/audioposts`}
            
          >
            {name}
          </Link>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
            <NavbarToggler onClick={toggle}>x</NavbarToggler>
            <Nav className="mr-auto ml-auto" navbar>
              <NavItem onClick={handleNavItemClicked}>
                <NavLink to={`/shows/${slug}/audioposts`} tag={Link}>HOME</NavLink>
              </NavItem>
              <NavItem onClick={handleNavItemClicked}>
                <NavLink to={`/shows/${slug}/about_us`} tag={Link}>ABOUT</NavLink>
              </NavItem>
              <NavItem onClick={handleNavItemClicked}>
                <NavLink to={`/shows/${slug}/episodes`} tag={Link}>EPISODES</NavLink>
              </NavItem>
              <NavItem onClick={handleNavItemClicked}>
                <NavLink to={`/shows/${slug}/subscribe`} tag={Link}>SUBSCRIBE</NavLink>
              </NavItem>
            </Nav>
            <a
              className="navbar-btn btn btn-sm lift ml-auto" 
              href={`${process.env.REACT_APP_API_PROXY_SERVER_BASE_PATH}/shows/${slug}/audioposts.rss`}
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