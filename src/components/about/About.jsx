import React, {useState} from 'react';
import styled from 'styled-components';
import MyInfo from './MyInfo';
import {Row, Col} from 'react-bootstrap';
import data from '../../data/data';
import Media from 'react-media';
import {RxDownload} from 'react-icons/rx';

const Container = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    font-family: 'Roboto Mono', monospace;
    padding: 10%;
    border-top: 1px solid #fff;
`
const Title = styled.h1`
    font-size: 4vh;
    font-weight: 600;
    line-height: 55px;
`
const Content = styled.div`
    width: 100%;
    font-size: 16px;
    margin-top: 3vh;
`
const MyInfoBox = styled.div`
    margin-top: 40px;
`
const ContentP = styled.p`
    line-height: 24px;
    word-break: break-word;
    width: 80%;
    font-weight: 300;
`
const DownloadLink = styled.a`
    color: #000;
    background: #fff;
    text-decoration : none;
    display: block;
    width: 300px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    border-radius: 10px;
    font-size: 18px;
`
const StrongName = styled.span`
    color: blueviolet;
`
const MyImg = styled.img`
    width: 100%;
    margin-top: 40px;
    height: 90%;
    object-fit: cover;
    box-shadow: -20px -20px 10px rgba(255,255,255,0.5);    
`

const About = () =>{
        const [isHover, setIsHover] = useState(false);
        const handleMouseOver = () => {
            setIsHover(true);
        }
        const handleMouseOut = () => {
            setIsHover(false);
        }
        return (
            <>
                <Media query="(min-width : 768px)" render={() => (
                    <Container id='about'>
                    <Row>
                        <Col lg={8} sm={12}>
                            <Title>
                                Hi, I'm <StrongName>Inyoung Choi</StrongName>.
                            </Title>
                            <Content>
                                {
                                    data[0]["about"][0]["intro"].map((list, index) => (
                                        <ContentP key={index}>{list.content}</ContentP>
                                    ))
                                }
                                <MyInfoBox>
                                    <Row>
                                        {
                                            data[0]["about"][0]["info"].map((list) => (
                                                <MyInfo id={list.id} content={list.content} num={list.num} icon={list.icon} key={list.num}></MyInfo>
                                            ))
                                        }
                                    </Row>
                                </MyInfoBox>
                                <DownloadLink 
                                    href="#" 
                                    className={isHover ? "big mt-5": "small mt-5"}
                                    onMouseOut={handleMouseOut}
                                    onMouseOver={handleMouseOver}
                                >
                                자기소개서 다운로드 &nbsp;
                                <RxDownload color="#333" size={30}/>
                                </DownloadLink>
                            </Content>
                        </Col>
                        <Col style={{ position : "relative"}} lg={4} sm={12}>
                            <MyImg src="images/main.png" alt="me" />
                        </Col>
                    </Row>
                </Container>
                )}
                />
                <Media query="(max-width : 768px)" render={() => (
                    <Container id='about'>
                    <Row>
                        <Col style={{ position : "relative"}} lg={4} sm={12}>
                            <MyImg src="images/main.png" alt="me" />
                        </Col>
                        <Col lg={8} sm={12}>
                            <Title>
                                Hi, I'm <StrongName>Inyoung Choi</StrongName>.
                            </Title>
                            <Content>
                                {
                                    data[0]["about"][0]["intro"].map((list, index) => (
                                        <ContentP key={index}>{list.content}</ContentP>
                                    ))
                                }
                                <MyInfoBox>
                                    <Row>
                                        {
                                            data[0]["about"][0]["info"].map((list) => (
                                                <MyInfo id={list.id} content={list.content} num={list.num} icon={list.icon} key={list.num}></MyInfo>
                                            ))
                                        }
                                    </Row>
                                </MyInfoBox>
                                <DownloadLink 
                                    href="#" 
                                    className={isHover ? "big mt-5": "small mt-5"} style={{marginLeft: "auto", marginRight: "auto"}}
                                    onMouseOut={handleMouseOut}
                                    onMouseOver={handleMouseOver}
                                >
                                자기소개서 다운로드 &nbsp;
                                <RxDownload color="#333" size={30}/>
                                </DownloadLink>
                            </Content>
                        </Col>
                        
                    </Row>
                </Container>
                )}
                />
            </>
            
        );
    }
    


export default About;