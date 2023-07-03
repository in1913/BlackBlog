import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    border-top: 1px solid #fff;
    font-family: 'Roboto Mono', monospace;
    padding: 15vh;
`

const Resume = () => {
    return (
        <Container id='resume'>
            Resume
        </Container>
    );
};

export default Resume;