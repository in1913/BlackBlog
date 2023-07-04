import React from 'react';
import {Col} from 'react-bootstrap';
import styled from 'styled-components';

const Icons = styled.div`
    margin-top: 10px;
`
const Right = styled.div`
    margin-left: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    margin-bottom: 20px;
    font-size: 12px;
`
const Content = styled.p`
    font-weight: 300;
    font-size: 2vh;
`

const MyInfo = ({id, content, icon}) => {
    return (
            <Col style={{marginBottom: "40px", display : "flex"}} lg={4} md={6} sm={12}>
                <Icons>
                {icon}
                </Icons>
                <Right>
                    <Title>
                        {id}
                    </Title>
                    <Content>{content}</Content>

                </Right>
                
            </Col>
    );
};

export default MyInfo;