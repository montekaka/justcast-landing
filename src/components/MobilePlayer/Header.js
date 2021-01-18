import React from "react";
import { useAtom } from 'jotai';
import { toggleModal } from '../../jotai'

const Header = () => {
  const [, toggleModalSet] = useAtom(toggleModal);

  return (
    <div className="music-top-icon">
      <p>Playing Now</p>
      <div className="music-bar" onClick={toggleModalSet}>
        <i className="fe fe-menu"/>
      </div>
    </div>    
  )
}

export default Header;