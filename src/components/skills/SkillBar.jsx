import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    display: flex;
`
const Border = styled.div`
    width: 20%;
    aspect-ratio: 1 / 1;
    padding: 3%;
`
const Box = styled.div`
    width: 100%;
    height: 100%;
`

const SkillBar = ({grade}) => {
    let result = [];
    for(let i = 0; i < grade; i++){
        result.push(
        <Border>
            <Box style={{background: `rgba(255, 0, 0, ${(i + 1) * 0.2})`}}/>
        </Border>);
    }
    for(let i = 0; i < 5 - grade; i++){
        result.push(
        <Border>
            <Box style={{background: `rgba(88, 88, 88, 0.2)`}}/>
        </Border>);
    }
    
    return (
            <Bar>
                {result}
            </Bar>
    );
};

export default SkillBar;