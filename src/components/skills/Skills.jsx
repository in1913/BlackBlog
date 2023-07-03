import React from 'react';
import {Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { RiAttachment2 } from 'react-icons/ri';
import data from '../../data/data';
import SkillBar from './SkillBar';

const Container = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    font-family: 'Roboto Mono', monospace;
    padding: 10%;
    border-top: 1px solid #fff;
`
const Title = styled.div`
    font-weight: 600;
    font-size: 4vh;
    text-align: center;
`
const TopTitle = styled.h1`
    font-weight: 600;
    font-size: 20px;
`
const MiddleTitle = styled.h2`
    text-align: center;
    background: #ccc;
`
const BottomTitleBox = styled.div`
    height: 33px;
    display: flex;
    align-items: center;
`
const BottomTitle = styled.div`
    text-align: center;
`
const StackBox = styled.div`
    min-height: 180px;
`
const Stacks = styled.div`
    display: flex;
    flex-direction : column;
    align-items: center;
`

const skillData = data[0]["skills"][0];
const skillNameList = Object.keys(skillData);
const frontendNameList = Object.keys(skillData["FrontEnd"][0]);
const backendNameList = Object.keys(skillData["BackEnd"][0]);
const serverNameList = Object.keys(skillData["Server"][0]);
const Skills = () => {
    return (
        <Container id='skills'>
            <Title className='mb-5'>
                <RiAttachment2 style={{color: "#ccc"}}/>
                Skills
            </Title>
            <div className='d-flex justify-content-end mb-2' style={{height: "30px"}}>
                <div className='me-1 d-flex align-items-center'>0%</div>
                <SkillBar grade={5}/>
                <div className='d-flex align-items-center'>100%</div>
            </div>
            
            <Row>
                {/* frontend */}
                <Col xs={12} className='px-4 pb-3'>
                    <Row className='bg-secondary text-dark rounded'>
                        <TopTitle className='py-3'>{skillNameList[0]}</TopTitle>
                        {/* Web */}
                        <Col lg={8} md={12}>
                            <StackBox className='bg-white rounded overflow-hidden mb-3'>
                                <MiddleTitle className='p-2'>{frontendNameList[0]}</MiddleTitle>
                                <Row>
                                    {
                                        skillData["FrontEnd"][0]["Web"].map((list, index) => (
                                            <Col lg={2} md={4} sm={12} key={index}>
                                                <Stacks className='pt-3'>
                                                    {list.icon}
                                                    <BottomTitleBox>
                                                        <BottomTitle>
                                                            {list.skill}
                                                        </BottomTitle>
                                                    </BottomTitleBox>
                                                </Stacks>
                                                <div className='d-flex justify-content-center mb-2' style={{height: "20px"}}>
                                                    <SkillBar grade={list.grade}/>
                                                </div>

                                            </Col>
                                        ))
                                    }        
                                </Row>
                            </StackBox>
                        </Col>    

                        {/* Mobile */}
                        <Col lg={4} md={12}>
                            <StackBox className='bg-white rounded overflow-hidden mb-3'>
                                <MiddleTitle className='p-2'>{frontendNameList[1]}</MiddleTitle>
                                <Row>
                                    {
                                        skillData["FrontEnd"][0]["Mobile"].map((list, index) => (
                                            <Col lg={4} md={4} key={index}>
                                                <Stacks className='pt-3'>
                                                    {list.icon}
                                                    <BottomTitleBox>
                                                        <BottomTitle>
                                                            {list.skill}
                                                        </BottomTitle>
                                                    </BottomTitleBox>
                                                </Stacks>
                                                <div className='d-flex justify-content-center mb-2' style={{height: "20px"}}>
                                                    <SkillBar grade={list.grade}/>
                                                </div>
                                            </Col>
                                        ))
                                    }        
                                </Row>
                            </StackBox>
                        </Col>    
                    </Row>
                </Col>


                {/* backend & database */}
                <Col xs={12}>
                    <Row>
                        {/* backend */}
                        <Col lg={8} className='px-4 pb-3'>
                            <Row className='bg-secondary text-dark rounded'>
                                <TopTitle className='py-3'>{skillNameList[1]}</TopTitle>
                                {/* language */}
                                <Col lg={4} md={12}>
                                    <StackBox className='bg-white rounded overflow-hidden mb-3'>
                                        <MiddleTitle className='p-2'>{backendNameList[0]}</MiddleTitle>
                                        <Row>
                                            {
                                                skillData["BackEnd"][0]["language"].map((list, index) => (
                                                    <Col lg={6} md={6}>
                                                        <Stacks className='pt-3' key={index}>
                                                            {list.icon}
                                                            <BottomTitleBox>
                                                                <BottomTitle>
                                                                    {list.skill}
                                                                </BottomTitle>
                                                            </BottomTitleBox>
                                                        </Stacks>
                                                        <div className='d-flex justify-content-center mb-2' style={{height: "20px"}}>
                                                            <SkillBar grade={list.grade}/>
                                                        </div>
                                                    </Col>
                                                ))
                                            }        
                                        </Row>
                                    </StackBox>
                                </Col>    

                                {/* tools */}
                                <Col lg={8} md={12}>
                                    <StackBox className='bg-white rounded overflow-hidden mb-3'>
                                        <MiddleTitle className='p-2'>{backendNameList[1]}</MiddleTitle>
                                        <Row>
                                            {
                                                skillData["BackEnd"][0]["tool"].map((list, index) => (
                                                    <Col lg={3} md={6} sm={12} key={index}>
                                                        <Stacks className='pt-3'>
                                                            {list.icon}
                                                            <BottomTitleBox>
                                                                <BottomTitle>
                                                                    {list.skill}
                                                                </BottomTitle>
                                                            </BottomTitleBox>
                                                        </Stacks>
                                                        <div className='d-flex justify-content-center mb-2' style={{height: "20px"}}>
                                                            <SkillBar grade={list.grade}/>
                                                        </div>
                                                    </Col>
                                                ))
                                            }        
                                        </Row>
                                    </StackBox>
                                </Col>    
                            </Row>
                        </Col>

                        {/* database */}
                        <Col lg={4} className='px-4 pb-3'>
                            <Row className='bg-secondary text-dark rounded'>
                                <TopTitle className='py-3'>{skillNameList[2]}</TopTitle>
                                <Col lg={12} md={12}>
                                    <StackBox className='bg-white rounded overflow-hidden mb-3'>
                                        <Row>
                                            {
                                                skillData["Database"].map((list, index) => (
                                                    <Col lg={4} md={4} key={index}>
                                                        <Stacks className='pb-4' style={{paddingTop: "34px"}}>
                                                            {list.icon}
                                                            <BottomTitleBox>
                                                                <BottomTitle>
                                                                    {list.skill}
                                                                </BottomTitle>
                                                            </BottomTitleBox>
                                                        </Stacks>
                                                        <div className='d-flex justify-content-center mb-2' style={{height: "20px"}}>
                                                            <SkillBar grade={list.grade}/>
                                                        </div>
                                                    </Col>
                                                ))
                                            }        
                                        </Row>
                                    </StackBox>
                                </Col>    
                            </Row>
                        </Col>
                    </Row>
                </Col>


                {/* server & etc */}
                <Col xs={12}>
                    <Row>
                        {/* server */}
                        <Col lg={7} className='px-4 pb-3'>
                            <Row className='bg-secondary text-dark rounded'>
                                <TopTitle className='py-3'>{skillNameList[3]}</TopTitle>
                                {/* cloud */}
                                <Col lg={4} md={12}>
                                    <StackBox className='bg-white rounded overflow-hidden mb-3'>
                                        <MiddleTitle className='p-2'>{serverNameList[0]}</MiddleTitle>
                                        <Row>
                                            {
                                                skillData["Server"][0]["Cloud"].map((list, index) => (
                                                    <Col lg={6} md={6} key={index}>
                                                        <Stacks className='pt-3'>
                                                            {list.icon}
                                                            <BottomTitleBox>
                                                                <BottomTitle>
                                                                    {list.skill}
                                                                </BottomTitle>
                                                            </BottomTitleBox>
                                                        </Stacks>
                                                        <div className='d-flex justify-content-center mb-2' style={{height: "20px"}}>
                                                            <SkillBar grade={list.grade}/>
                                                        </div>
                                                    </Col>
                                                ))
                                            }        
                                        </Row>
                                    </StackBox>
                                </Col>    
                                {/* OS */}
                                <Col lg={2} md={6}>
                                    <StackBox className='bg-white rounded overflow-hidden mb-3'>
                                        <MiddleTitle className='p-2'>{serverNameList[1]}</MiddleTitle>
                                        <Row>
                                            {
                                                skillData["Server"][0]["OS"].map((list, index) => (
                                                    <Col lg={12} key={index}>
                                                        <Stacks className='pt-3'>
                                                            {list.icon}
                                                            <BottomTitleBox>
                                                                <BottomTitle>
                                                                    {list.skill}
                                                                </BottomTitle>
                                                            </BottomTitleBox>
                                                        </Stacks>
                                                        <div className='d-flex justify-content-center mb-2' style={{height: "20px"}}>
                                                            <SkillBar grade={list.grade}/>
                                                        </div>
                                                    </Col>
                                                ))
                                            }        
                                        </Row>
                                    </StackBox>
                                </Col>    
                                {/* Platform */}
                                <Col lg={2} md={6}>
                                    <StackBox className='bg-white rounded overflow-hidden mb-3'>
                                        <MiddleTitle className='p-2'>{serverNameList[2]}</MiddleTitle>
                                        <Row>
                                            {
                                                skillData["Server"][0]["Platform"].map((list, index) => (
                                                    <Col lg={12} key={index}>
                                                        <Stacks className='pt-3'>
                                                            {list.icon}
                                                            <BottomTitleBox>
                                                                <BottomTitle>
                                                                    {list.skill}
                                                                </BottomTitle>
                                                            </BottomTitleBox>
                                                        </Stacks>
                                                        <div className='d-flex justify-content-center mb-2' style={{height: "20px"}}>
                                                            <SkillBar grade={list.grade}/>
                                                        </div>
                                                    </Col>
                                                ))
                                            }        
                                        </Row>
                                    </StackBox>
                                </Col>    
                                {/* Web Server */}
                                <Col lg={2} md={6}>
                                    <StackBox className='bg-white rounded overflow-hidden mb-3'>
                                        <MiddleTitle className='p-2'>{serverNameList[3]}</MiddleTitle>
                                        <Row>
                                            {
                                                skillData["Server"][0]["WebServer"].map((list, index) => (
                                                    <Col lg={12} key={index}>
                                                        <Stacks className='pt-3'>
                                                            {list.icon}
                                                            <BottomTitleBox>
                                                                <BottomTitle>
                                                                    {list.skill}
                                                                </BottomTitle>
                                                            </BottomTitleBox>
                                                        </Stacks>
                                                        <div className='d-flex justify-content-center mb-2' style={{height: "20px"}}>
                                                            <SkillBar grade={list.grade}/>
                                                        </div>
                                                    </Col>
                                                ))
                                            }        
                                        </Row>
                                    </StackBox>
                                </Col>    
                                {/* Web Application Server */}
                                <Col lg={2} md={6}>
                                    <StackBox className='bg-white rounded overflow-hidden mb-3'>
                                        <MiddleTitle className='p-2'>{serverNameList[4]}</MiddleTitle>
                                        <Row>
                                            {
                                                skillData["Server"][0]["WAS"].map((list, index) => (
                                                    <Col lg={12} key={index}>
                                                        <Stacks className='pt-3'>
                                                            {list.icon}
                                                            <BottomTitleBox>
                                                                <BottomTitle>
                                                                    {list.skill}
                                                                </BottomTitle>
                                                            </BottomTitleBox>
                                                        </Stacks>
                                                        <div className='d-flex justify-content-center mb-2' style={{height: "20px"}}>
                                                            <SkillBar grade={list.grade}/>
                                                        </div>
                                                    </Col>
                                                ))
                                            }        
                                        </Row>
                                    </StackBox>
                                </Col>    
                            </Row>
                        </Col>

                        {/* ETC */}
                        <Col lg={5} className='px-4'>
                            <Row className='bg-secondary text-dark rounded'>
                                <TopTitle className='py-3'>{skillNameList[4]}</TopTitle>
                                <Col lg={12} md={12}>
                                    <StackBox className='bg-white rounded overflow-hidden mb-3'>
                                        <Row>
                                            {
                                                skillData["ETC"].map((list, index) => (
                                                    <Col lg={3} md={6} sm={12} key={index}>
                                                        <Stacks className='p-3'>
                                                            {list.icon}
                                                            <BottomTitleBox className='mt-3'>
                                                                <BottomTitle>
                                                                    {list.skill}
                                                                </BottomTitle>
                                                            </BottomTitleBox>
                                                        </Stacks>
                                                        <div className='d-flex justify-content-center mb-2' style={{height: "20px"}}>
                                                            <SkillBar grade={list.grade}/>
                                                        </div>
                                                    </Col>
                                                ))
                                            }        
                                        </Row>
                                    </StackBox>
                                </Col>    
                            </Row>
                        </Col>
                    </Row>
                </Col>

            </Row>
            
        </Container>
    );
};

export default Skills;