import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Packet from "../icons/packet_1.png";
import Avatar from "../icons/avatar.png";

const Wrapper = styled.div`
  position: absolute;
  width: 742px;
  height: 51px;
  left: 120px;
  top: 50px;
`;

const OrderSmth = styled.div`
  position: absolute;
  left: 30%;
  right: 0%;
  top: 15.22%;
  bottom: 15.22%;
`;

const Menu = styled.div`
  position: relative;
  left: 120px;
  right: 0%;
  top: 0%;
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

const Cart = styled.div`
  position: absolute;
  width: 137px;
  height: 43px;
  left: 894px;
  top: 10%;
`;

const CartText = styled.p`
  position: absolute;
  width: 83px;
  height: 21px;
  left: 50px;
  top: 20%;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 94.8%;
  /* identical to box height, or 21px */

  color: #000000;
`;

const Pack = styled.div`
  position: absolute;
  width: 138px;
  height: 43px;
  left: 120%;
  top: 0px;
`;

const PackText = styled.div`
  position: absolute;
  width: 83px;
  height: 21px;
  left: 160%;
  top: 20%;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 94.8%;
  /* identical to box height, or 21px */

  color: #000000;
`;

const Avtr = styled.div`
  position: absolute;
  width: 53px;
  height: 53px;
  left: 1252px;
  top: 0px;
`;

function CartHeader() {
  return (
    <Wrapper>
      <Menu>
        <MenuIcon sx={{ width: 51, height: 51 }} />
      </Menu>

      <OrderSmth>
        <OrderSmthText>Закажи что-нибудь</OrderSmthText>
      </OrderSmth>

      <Form>
        <SearchInput placeholder="Название"></SearchInput>
        <SearchButton>
          <SearchIcon sx={{ fontSize: 23 }} />
        </SearchButton>
      </Form>
      <Cart>
        <ShoppingCartOutlinedIcon sx={{ width: 33, height: 33 }} />
        <CartText>Заказы</CartText>
        <Pack>
          <img src={Packet} alt="packet img" />
        </Pack>
        <PackText>Пакеты</PackText>
      </Cart>
      <Avtr>
        <img src={Avatar} alt="avatar"></img>
      </Avtr>
    </Wrapper>
  );
}

export default CartHeader;
