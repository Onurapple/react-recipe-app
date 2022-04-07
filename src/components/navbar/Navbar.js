import React, {useState} from 'react';
import {Nav, Logo, Hamburger, Menu, MenuLink} from './style';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to='/react-recipe-app/home'>
      <i>{'<Clarusway>'}</i>
      <span>recipe</span>
      </Logo>
      <Hamburger onClick={()=> setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to='/react-recipe-app/about'>ABOUT</MenuLink>
        <MenuLink to='' onClick={()=> window.location.href ='https://github.com/Onurapple'}>GITHUB</MenuLink>
        <MenuLink to='/react-recipe-app/'>LOGOUT</MenuLink>
      </Menu>
    </Nav>
  )
}

export default Navbar

