import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, X } from 'lucide-react';
import { theme } from '../styles/components';

const Nav = styled.nav`
  background: ${theme.colors.surface};
  border-bottom: 1px solid ${theme.colors.border};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.9);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Logo = styled(Link)`
  font-size: ${theme.typography.h3};
  font-weight: 700;
  color: ${theme.colors.primary};
  text-decoration: none;
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: ${theme.spacing.lg};
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.md}) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: ${theme.colors.surface};
    flex-direction: column;
    padding: ${theme.spacing.lg};
    border-bottom: 1px solid ${theme.colors.border};
    transform: translateY(${props => props.isOpen ? '0' : '-100%'});
    transition: transform 0.3s ease;
    opacity: ${props => props.isOpen ? '1' : '0'};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  }
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: ${props => props.isActive ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${theme.colors.primary};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${theme.spacing.xs};
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resume', path: '/resume' },
  { name: 'Cover Letter', path: '/cover-letter' },
  { name: 'Contact', path: '/contact' }
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Portfolio</Logo>
        
        <NavLinks isOpen={isOpen}>
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              isActive={location.pathname === item.path}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </NavLinks>
        
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </MenuButton>
      </NavContainer>
    </Nav>
  );
};

export default Navigation;