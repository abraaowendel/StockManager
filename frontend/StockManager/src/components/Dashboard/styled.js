import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DashboardArea = styled.div`
  min-height: 100vh;
  background-color: #1F2A40;
  padding: 20px;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const ButtonLogout = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 1;
  position: fixed;
  bottom: 10px;
  left: 180px;
`;

export const Img = styled.img`
  height: 65px;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 23px;
  margin-left: 10px;
`;

export const Nav = styled.nav`
  padding: 10px;
`;

export const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const Li = styled.li`
  display: flex;
  margin: 10px 0;
`;
export const TitleNav = styled.h5`
  margin: 10px 0;
  color: #ccc;
  letter-spacing: 2px;
`;

export const Section = styled.section`
  padding: 20px;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  margin: 0 15px;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #ccc;
  }
`;
