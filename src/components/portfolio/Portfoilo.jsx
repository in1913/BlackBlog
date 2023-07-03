import React from 'react';
import { RiAttachment2 } from 'react-icons/ri';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Project from './Project';
import data from '../../data/data';

const Container = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    border-top: 1px solid #fff;
    font-family: 'Roboto Mono', monospace;
    padding: 10%;
`
const Title = styled.h1`
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 40px;
    text-align: center;
`
const Datas = data[0]["portfolio"];
const Portfoilo = () => {
    return (
        <Container id='portfolio'>
            <Title>
                <RiAttachment2 style={{color: "#ccc"}}/>
                Portfolio
            </Title>
            <Row style={{paddingBottom : "30px"}}>
            {
                Datas.map((list, index) => (
                    <Col lg={4} sm={12} md={6}>
                        <Project
                            title={list.title} 
                            date={list.date}
                            people={list.people}
                            thumbnail={list.thumbnail}
                            description={list.description}
                            role={list.role}
                            key={index}
                        ></Project>
                    </Col>
                ))
            }
        </Row>
            
        </Container>
    );
};

export default Portfoilo;