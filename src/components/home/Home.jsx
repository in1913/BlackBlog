import React from 'react';
import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';

const Container = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto Mono', monospace;
`
const MainBox = styled.div`
    width: 400px;
    height: 300px;
`
const Typing = styled.p`
    margin-top: 10px;
    margin-left: 35px;
    font-size: 28px;
    line-height: 50px;
`
const Title = styled.h1`
    font-size: 30px;
`

const Home = () => {
    return (
        <>
            <Container id='home'>
                <MainBox>
                    <Title>$ Choi-inyoung</Title>
                    <Typing>
                    <Typewriter words={["Frontend & Backend / Developer"]}
                    loop cursor cursorStyle="_" delaySpeed={1000} typeSpeed={100} deleteSpeed={50}
                    />
                    </Typing>
                </MainBox>
            </Container>
        </>
    );
};

export default Home;