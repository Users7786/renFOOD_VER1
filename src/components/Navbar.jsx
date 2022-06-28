import React from "react";
import styled from "styled-components";
import { ShoppingCartOutlined } from "@mui/icons-material";

const Wrapper = styled.div`
  height: 93px;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const WrappedNav = styled.div`
  height: 52px;
  width: 1200px;
  margin-top: 42px;
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
`;

const Center = styled.div`
  font-weight: 400;
  font-size: 25px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  width: 159px;
  justify-content: space-between;
`;

const OrangeSide = styled.div`
  color: #ff7e00;
  font-weight: 600;
  font-size: 32px;
`;

const Links = styled.div`
  display: flex;
  margin-left: 23px;
`;
const Link = styled.a`
  text-decoration: none;
`;
const LinkObj = styled.div`
  padding-left: 40px;
`;

const SignIn = styled.div`
  width: 117px;
  height: 40px;
  background-color: #FF7E00;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  align
  font-size: 22px;
  color: #fff;
  margin-left: 46px;
`;

const Orange = {
  color: "#FF7E00",
};

const Cart = styled.div`
  margin-left: 138px;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <WrappedNav>
        <Left>
          <Logo>
            <OrangeSide>REN</OrangeSide>
            FOOD
          </Logo>
        </Left>
        <Center>
          <Links>
            <LinkObj>
              <Link>Home</Link>
            </LinkObj>
            <LinkObj>
              <Link>Page</Link>
            </LinkObj>
            <LinkObj>Page</LinkObj>
            <LinkObj>Page</LinkObj>
            <LinkObj style={Orange}>+7 700 777 7070</LinkObj>
          </Links>
        </Center>
        <Right>
          <Cart>
            <ShoppingCartOutlined sx={{ fontSize: 52, marginTop: "8px" }} />
          </Cart>
          <SignIn>sign up</SignIn>
        </Right>
      </WrappedNav>
    </Wrapper>
  );
};

export default Navbar;
