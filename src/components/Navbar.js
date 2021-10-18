import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from "react-icons/fa";
import logoimg from '../images/logo.png';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 60px;
`;

const NavLink = css`
  display: flex;
  align-items: center;
  color: #fff;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  margin: 10px 0;
  img {
    width: 80%;
  }
`;

const MenuBars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 10px;
    right: 10px;
    transform: translate(-50%, 25%);
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NabBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const Navbar = ({toggle}) => {
  return (
    <Nav>
      <Logo to='/'><img src={logoimg} alt="logo" /></Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
        <NabBtn>
          <Button to='/contact' primary='ture'>Contact Us</Button>
        </NabBtn>
    </Nav>
  )
}

export default Navbar
