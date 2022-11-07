import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Veganner_logo.png";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 65px;
  margin: 0 1.5vw;
  display: flex;
  align-items: center;
  font-family: "PP Neue Montreal";
`;

export const HeaderLogo = styled(Link)`
  width: 120px;
  height: 70px;
  background-image: url(${logo});
  background-size: cover;
  background-position: 50% 45%;
`;

export const Navbar = styled.nav`
  width: 200px;
  // background-color: #ffffff;
  font-size: 16px;
  /* margin-left: auto; */
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  margin: 0 20px;
  text-decoration-line: none;
  color: #212121;
  text-align: center;

  &:last-child {
    margin-left: 22vw;
  }
  @media (max-width: 1200px) {
    &:last-child {
      margin: 0 20px;
    }
  }
`;
