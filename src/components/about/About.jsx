import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import MyInfo from './MyInfo';
import {Row, Col} from 'react-bootstrap';
import { RiAttachment2} from "react-icons/ri";
import data from '../../data/data';

const Container = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    font-family: 'Roboto Mono', monospace;
    padding: 10%;
    border-top: 1px solid #fff;
`
const Title = styled.h1`
    font-size: 3vh;
    font-weight: 600;
    line-height: 55px;
`
const Content = styled.div`
    width: 100%;
    padding: 40px;
    font-size: 16px;
`
const MyInfoBox = styled.div`
    margin-top: 40px;
    padding-left: 10px;
`
const ContentP = styled.p`
    line-height: 24px;
    word-break: break-word;
    width: 80%;
    font-weight: 300;
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

const About = () => {
    return (
        <Container id='about'>
            <Row /* style={{border: "1px solid #fff"}} */>
                <Col lg={8} sm={12}>
                    <Title>
                        <RiAttachment2 style={{color: "#ccc"}}/>
                        About Me <br />
                        
                        &nbsp;&nbsp;Hi, I'm <StrongName>Inyoung Choi</StrongName>.
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
                                    data[0]["about"][0]["row1"].map((list) => (
                                        <MyInfo id={list.id} content={list.content} num={list.num} icon={list.icon} key={list.num}></MyInfo>
                                    ))
                                }
                            </Row>
                            <Row>
                                {
                                    data[0]["about"][0]["row2"].map((list) => (
                                        <MyInfo id={list.id} content={list.content} num={list.num} icon={list.icon} key={list.num}></MyInfo>
                                    ))
                                }
                            </Row>
                        </MyInfoBox>
                    </Content>
                </Col>
                <Col style={{ position : "relative"}} lg={4} sm={12}>
                    <MyImg src="images/main.png" alt="me" />
                </Col>
            </Row>
        </Container>
    );
};

export default About;