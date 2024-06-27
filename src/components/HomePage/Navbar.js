import React from "react";
import styled from "styled-components";
import { MenuOutline } from "@styled-icons/evaicons-outline/MenuOutline";

function Navbar() {
  return (
    <Wrapper>
      <MainWrapper>
        <LogoWrapper>
          <Logo>Ponto Pet</Logo>
        </LogoWrapper>

        <ItemsWrapper>
          <HomeItem>Home</HomeItem>
          <Item>Services</Item>
          <Item>About</Item>
          <Item>Contact</Item>
          <ProfileIconWrapper>
            <Login>Log In</Login>
          </ProfileIconWrapper>
        </ItemsWrapper>

        <IconWrapper>
          <MenuIcon />
        </IconWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div``;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 150px;
  padding-right: 20px;

  @media screen and (max-width: 1150px) {
    padding-left: 100px;
  }

  @media screen and (max-width: 1024px) {
    padding-right: 100px;
  }

  @media screen and (max-width: 670px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media screen and (max-width: 550px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const LogoWrapper = styled.div``;

export const Logo = styled.p`
  color: #1a4e8d;
  font-size: 24px;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 610px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const HomeItem = styled.p`
  background-color: #1a4e8d;
  color: #ffffff;
  width: 109px;
  border-radius: 50px;
  text-align: center;
  padding-top: 7px;
  padding-bottom: 7px;
  font-size: 14px;
`;

export const Item = styled.p`
  color: #1a4e8d;
  font-size: 14px;
`;

export const ProfileIconWrapper = styled.div``;

export const Login = styled.p`
  color: #1a4e8d;
`;

export const IconWrapper = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: initial;
  }
`;

export const MenuIcon = styled(MenuOutline)`
  color: #1a4e8d;
  width: 30px;
  height: 30px;
`;

export default Navbar;
