import React, { useState } from 'react';
import {Link } from 'react-scroll';
import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';

const Container = styled.header`
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 20px;
    font-family: 'Roboto Mono', monospace;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;    
    background: #101010;
    z-index: 1000;
`
const Navigation = styled.ul`
    display: flex;
    margin-left: auto;
`

const Header = () => {
    const [mobile, setMobile] = useState(false);
    return (
        <Container>
            <Link to="home" spy={true} smooth={false} 
                style={{
                    color: "#fff", 
                    textDecoration : "none", 
                    display : "inline-block",
                    padding : "0",
                    cursor : "pointer"
                }}>
                <span style={{color : "greenyellow", fontWeight: "600"}}>IY@Blog</span>
                <span style={{color : "#fff"}}>:</span>
                <span style={{color : "blueviolet"}}>~</span>
                <span style={{color : "#fff"}}>$</span><Typewriter words={[""]} loop cursor cursorStyle="_" typeSpeed={200}/></Link>
            <Navigation className={mobile ? "gnb-mobile" : "gnb"}>
                <li>
                    <Link spy={true} smooth={false}
                        to="about"
                        style={{color: "#fff",
                                textDecoration: "none",
                                display: "inline-block",
                                cursor : "pointer",
                                padding: "0 15px"}}
                        >About Me</Link>
                </li>
                <li>
                    <Link spy={true} smooth={false}
                        to="skills"
                        style={{color: "#fff",
                                textDecoration: "none",
                                display: "inline-block",
                                cursor : "pointer",
                                padding: "0 15px"}}
                        >Skills</Link>
                </li>
                <li>
                    <Link spy={true} smooth={false}
                        to="portfolio" 
                        style={{color: "#fff",
                                textDecoration: "none",
                                display: "inline-block",
                                cursor : "pointer",
                                padding: "0 15px"}}
                        >Portfolio</Link>
                </li>
                <li>
                    <Link spy={true} smooth={false}
                        to="resume"
                        style={{color: "#fff",
                                textDecoration: "none",
                                display: "inline-block",
                                cursor : "pointer",
                                padding: "0 15px"}}
                        >Resume</Link>
                </li>
                <li>
                    <Link spy={true} smooth={false}
                        to="contact"
                        style={{color: "#fff",
                                textDecoration: "none",
                                display: "inline-block",
                                cursor : "pointer",
                                padding: "0 15px"}}
                        >Contact</Link>
                </li>
            </Navigation>
        </Container>
    );
};

export default Header;