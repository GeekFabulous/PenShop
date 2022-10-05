import { ArrowBack, ArrowForward } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

 const Container = styled.div`
    width : 100%;
    height: 100vh;
    display: flex;
    background-color: aqua; 
    position: relative;
     `;

    const Arrow = styled.div`
    width : 50px;
    height: 50px;
    display: flex;
    background-color: whitesmoke;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.position === "left" && "10px"};
    right: ${(props) => props.position === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.9;
     `;
const Wrapper = styled.div`
    height: 100%;
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
`;

const PhotoContainer = styled.div`
    flex: 1 ;
    
`;
const MsgConainer = styled.div`
    flex: 1 `;

const Image = styled.div`
    
`;

const Carousel = () => {
  return (
    <Container>
        <Arrow position="left">
            <ArrowBack/>
        </Arrow>
        <Wrapper>
            <PhotoContainer>
            <Image src />
            </PhotoContainer>
            <MsgConainer>
            </MsgConainer>
        </Wrapper>
        <Arrow position="right">
            <ArrowForward/>
        </Arrow>
    </Container>
  )
}

export default Carousel
