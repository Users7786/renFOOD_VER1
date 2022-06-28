import React from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 161px;
  
`;

const TopSide = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  font-size: 40px;
  font-weight: 500;
`;

const Right = styled.div`
  
`;

const Form = styled.form`
  width: 255.1px;
  height: 48px;
  border: 1px solid #585858;
  border-radius: 5px;
  display: flex;
  align-items: center;
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
  
`

const Rest = () => {
  return(
      <Wrapper>
          <TopSide>
              <Left>
                  Рестораны
              </Left>
              <Right>
                <Form>
                    <SearchInput placeholder="Поиск" >

                    </SearchInput>
                    <SearchButton>
                        <SearchIcon sx={{fontSize: 23}}/>
                    </SearchButton>
                </Form>
              </Right>
          </TopSide>
      </Wrapper>
  )
};

export default Rest