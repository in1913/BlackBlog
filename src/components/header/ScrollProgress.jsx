
import styled from 'styled-components';

const ScrollProgress = styled.div`
    left: 0;
    top: 50px;
    position: fixed;
    background: linear-gradient(to Right, rgba( 250, 224, 66, 0.8)
        ${props => props.scroll}, transparent 0);
        width: 100%;
        height: 4px;
        z-index: 3;
    )
`

export default ScrollProgress;