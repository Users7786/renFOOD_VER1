import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Wrapper = styled.div`
  position: absolute;
  width: 742px;
  height: 51px;
  left: 120px;
  top: 50px;
`;

const OrderSmth = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 15.22%;
  bottom: 15.22%;
`;

const Menu = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 15.22%;
  bottom: 15.22%;
`;

const OrderSmthText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 94.8%;
`;

const Form = styled.form`
  position: absolute;
  width: 263px;
  height: 48px;
  left: 599px;
  top: 10px;
`;

const SearchInput = styled.input`
  outline: none;
  border: none;
  height: 19px;
  width: 150px;
  margin-left: 25px;
  font-size: 20px;
  color: #585858;
`;

const SearchButton = styled.button`
  margin-left: 34px;
  height: 23px;
  width: 23px;
  outline: none;
  border: none;
  background-color: #fff;
  z-index: 1000;
`;

function CartHeader() {
  return (
    <Wrapper>
      <Menu>
        <MenuIcon />
      </Menu>

      <OrderSmth>
        <OrderSmthText>Закажите что-нибудь</OrderSmthText>
      </OrderSmth>

      <Form>
        <SearchInput placeholder="Название"></SearchInput>
        <SearchButton>
          <SearchIcon sx={{ fontSize: 23 }} />
        </SearchButton>
      </Form>
    </Wrapper>
  );
}

export default CartHeader;
