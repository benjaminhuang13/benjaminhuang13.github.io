import styled from "styled-components";
import "../styles/font/stylesheet.css";

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 20, 0.75);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 48px;
  border-bottom: 1px solid rgba(0, 255, 0, 0.2);
  font-family: "lcd_solidregular", sans-serif;
`;

const Logo = styled.a`
  color: rgba(0, 255, 0, 0.75);
  font-size: 1rem;
  letter-spacing: 2px;
  text-decoration: none;
  &:hover {
    color: rgba(0, 255, 0, 1);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  letter-spacing: 1px;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: rgba(0, 255, 0, 0.75);
  }
`;

export default function Navbar() {
  return (
    <NavBar>
      <Logo href="/">BH</Logo>
      <NavLinks>
        <NavLink href="/learn">Learn</NavLink>
      </NavLinks>
    </NavBar>
  );
}
