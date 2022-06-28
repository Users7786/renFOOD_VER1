import styled from "styled-components";
import React from "react";
import {Restaurants} from "../Data/RestData";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 211px;
`;

const Image = styled.img`
  width: 282px;
  height: 230px;
`

const InfoBlock = styled.div`
  width: 282px;
  height: 246px;
  margin-top: 141px;
  position: absolute;
  background: #FFFFFF;
  border: 0.1px solid #C1C1C1;
  box-shadow: inset -4px -4px 4px rgba(207, 207, 207, 0.25);
  border-radius: 10px;
`;

const InnerBlock = styled.div`
  margin: 21px 24px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

const Star = styled.div`
  
`;

const Location = styled.div`
  margin-left: 21px;
  display: flex;  
`
const LocationInfo = styled.div`
  
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DishButton = styled.button`
  background: #FF7E00;
  border-radius: 5px;
  color: white;
  width: 243px;
  height: 35px;
  border: none;
  margin-top: 24px;
`



const Dish = ({item}) => {
    return (
        <Container>
            <Image src={item.img} />
            <InfoBlock>
                <InnerBlock>
                    <Title>
                        {item.title}
                    </Title>
                    <Star>
                        {item.star}
                    </Star>
                </InnerBlock>
                <Location>
                    <LocationOnOutlinedIcon color = '#FF7E00'/>
                    <LocationInfo>
                        {item.location}
                    </LocationInfo>
                </Location>
                <Location>
                    icon
                    {item.shed}
                </Location>
                <Location>
                    средний чек:{item.average}
                </Location>
                <Location>
                    {item.cat}
                </Location>
                <Wrapper>
                    <DishButton>
                        посмотреть меню
                    </DishButton>

                </Wrapper>
            </InfoBlock>
        </Container>
    );
};

export default Dish;