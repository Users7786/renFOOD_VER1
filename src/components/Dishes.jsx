import styled from "styled-components";
import React from "react";
import {Restaurants} from "../Data/RestData";
import Dish from "./Dish";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  margin-top: 50px;
`;


const Dishes = () => {
    return (
        <Wrapper>
            <Container>
                {Restaurants.map((item) => (
                    <Dish item={item} key={item.id} />
                ))}
            </Container>
        </Wrapper>
    );
};

export default Dishes;