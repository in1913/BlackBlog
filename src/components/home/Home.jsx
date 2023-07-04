import React from 'react';
import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';
import Media from 'react-media';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto Mono', monospace;
`
const MainBox = styled.div`
    width: 40vh;
    height: 30vh;
`
const Typing = styled.p`
    margin-top: 10px;
    margin-left: 35px;
    font-size: 3vh;
    line-height: 50px;
`
const Title = styled.h1`
    font-size: 3vh;
`

class Home extends React.Component {
    render(){
        return (
            <>
                <Media query="(max-width : 768px)" render={() => (
                    <Container id='home' style={{aspectRatio : "9 / 16"}}>
                    <MainBox>
                        <Title>$ Choi-inyoung</Title>
                        <Typing>
                        <Typewriter words={["Frontend & Backend / Developer"]}
                        loop cursor cursorStyle="_" delaySpeed={1000} typeSpeed={100} deleteSpeed={50}
                        />
                        </Typing>
                    </MainBox>
                </Container>
                )} 
                />
                <Media query="(min-width : 768px)" render={() => (
                    <Container id='home' style={{aspectRatio : "16 / 9"}}>
                    <MainBox>
                        <Title>$ Choi-inyoung</Title>
                        <Typing>
                        <Typewriter words={["Frontend & Backend / Developer"]}
                        loop cursor cursorStyle="_" delaySpeed={1000} typeSpeed={100} deleteSpeed={50}
                        />
                        </Typing>
                    </MainBox>
                </Container>
                )} 
                />
                
                
            </>
        );
}
};

export default Home;