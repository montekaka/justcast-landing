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
  const {hide_subscribe_page, is_private, patreon_support_link, enabled_tip_jar, name, slug, navbarColorTheme, buttonTextColor, buttonColor, textColor} = props;

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleNavItemClicked = () => {
    if(isOpen) {
      setIsOpen(false);
    }    
  }

  const onClickRSS = () => 
    window.open(`${process.env.REACT_APP_RSS_FEED_BASE_PATH}/shows/${slug}/audioposts.rss`, '_blank');{
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
            <i className="fe fe-home"/>
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
              {
                !hide_subscribe_page && (<NavItem onClick={handleNavItemClicked}>
                  <NavLink to={`/shows/${slug}/subscribe`} tag={Link}>SUBSCRIBE</NavLink>
                </NavItem>)
              }

              {
                (enabled_tip_jar || patreon_support_link) ? <NavItem onClick={handleNavItemClicked}>
                  <NavLink to={`/shows/${slug}/support_us`} tag={Link}>SUPPORT US</NavLink>
                </NavItem> : null
              }                           
            </Nav>
            <div
              className="navbar-btn btn btn-sm lift ml-auto" 
              onClick={onClickRSS}
              target="_blank"
              style={{backgroundColor: buttonColor, color: buttonTextColor}}
            >
              RSS feed
            </div>            
          </Collapse>
        </div>
      </nav>
    </div>
  )
}

export default TopNavbars;