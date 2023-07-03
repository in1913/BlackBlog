import React from 'react';
import styled from 'styled-components';

const MyFooter = styled.footer`
    width: 100%;
    height: 200px;
    background: #232323;
    font-family: 'Roboto Mono', monospace;
`
const LinkBox = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #eee;
`
const CopyBox = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #ccc;
    color: #333;
`
const Link = styled.a`
    color: #ccc;
    text-decoration: none;
    line-height: 20px;
`

const Footer = () => {
    return (
        <MyFooter>
            <LinkBox>
                <Link href="https://www.flaticon.com/free-icons/graphic-design" title="graphic design icons">Graphic design icons created by Freepik - Flaticon</Link>
                <Link href="https://www.flaticon.com/free-icons/python" title="python icons">Python icons created by Freepik - Flaticon</Link>
                <Link href="https://www.flaticon.com/free-icons/figma" title="figma icons">Figma icons created by Freepik - Flaticon</Link>
            </LinkBox>
            <CopyBox>
                &copy; Inyoung Choi. All rights reserved.                
            </CopyBox>        

        </MyFooter>
    );
};

export default Footer;