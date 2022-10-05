import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

const Container = styled.div`
    height: 80px;
    background-color: white;
    `;
const Wrapper = styled.div`
    padding:4px 30px;
    display: flex;
    justify-content: space-between;
    `;
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    `;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
    `;
const Right = styled.div`
    flex:1;   
    display : flex ;
    align-items: center;
    justify-content: flex-end;
    `;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;
const Input = styled.input`
   border: none; 
 `;
const Logo = styled.h1`
    font-weight: bold;
 `
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
 `
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontsize: "15" }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        PenShop
                    </Logo>
                </Center>
                <Right>
                    <MenuItem> Create Account </MenuItem>
                    <MenuItem>Sign Up</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>

        </Container>
    )
}

export default Navbar
