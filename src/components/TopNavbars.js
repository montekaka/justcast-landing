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
      <nav className="navbar navbar-expand-lg navbar-dark navbar-togglable fixed-top">
        <div className="container">
          <a className="navbar-brand" href={`/shows/${state.show.id}`}>
            {state.show.name}
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>       

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><i class="fe fe-x"></i></button>
          </div>   

          <ul className="navbar-nav ml-auto"></ul>

          <a className="navbar-btn btn btn-sm btn-primary lift ml-auto" href="https://themes.getbootstrap.com/product/landkit/" target="_blank">
            RSS feed
          </a>
        </div>
      </nav>
    </div>
  )
}

export default TopNavbars;