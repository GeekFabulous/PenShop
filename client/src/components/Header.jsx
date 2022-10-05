import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

const Header = () => {
    return (
        <Container>
            BIG PROMO! BUY ANYTHING UNDER N30,000 FOR FREE SHIPPING
        </Container>
    )
}

export default Header;
