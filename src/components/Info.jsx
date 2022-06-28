import React from "react";
import styled from "styled-components";

const Wrapped = styled.div`
  display: flex;
  justify-content: center;
`;

const Left = styled.div`
  
`;

const Slogan = styled.div`
  width: 575px;
  height: 400px;
  background-color: gray;
  margin-top: 51px;
`;

const Right = styled.div`
  
`;

const FoodImg = styled.div`
  width: 677px;
  height: 677px;
  background-color: gray;
  margin-left: 56.5px;
  position: relative;
`;


const Policy = styled.div`
  width: 428px;
  height: 175px;
  background-color: #fff;
  border: black 1px solid;
  position: absolute;
  text-align: center;
  margin-top: 527.5px;
  margin-left: 146.5px;
`;


const Info = () => {
  return(
      <Wrapped>
        <Left>
          <Slogan>

          </Slogan>
        </Left>
        <Right>
          <FoodImg>
            <Policy>

            </Policy>
          </FoodImg>
        </Right>
      </Wrapped>
  )
}

export default Info