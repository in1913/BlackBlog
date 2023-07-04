import React, { useState } from 'react';
import {Link } from 'react-scroll';
import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';
import {GiHamburgerMenu} from 'react-icons/gi';
import Media from 'react-media';
import ScrollProgress from './ScrollProgress';
import './header.css';

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
    margin-left: auto;
`

const Header = () => {
    const showMobileNavi = () => {
        const mobileNavi = document.getElementsByClassName("gnb-mobile")[0];
        mobileNavi.classList.toggle("active");
    }
    return (
        <Container>
            <Link to="home" spy={true} smooth={false} className='nav-home'>
                <span style={{color : "greenyellow", fontWeight: "600"}}>IY@Blog</span>
                <span style={{color : "#fff"}}>:</span>
                <span style={{color : "blueviolet"}}>~</span>
                <span style={{color : "#fff"}}>$</span>
                <Typewriter words={[""]} loop cursor cursorStyle="_" typeSpeed={200}/></Link>
                <Media query="(max-width: 768px)" render={() =>
                    (
                        <>
                        <GiHamburgerMenu style={{marginLeft : "auto", cursor: "pointer"}} onClick={showMobileNavi} size={25}/>
                        <Navigation className="gnb-mobile">
                            <li>
                                <Link spy={true} smooth={false} className='nav-links'
                                    to="about">About Me</Link>
                            </li>
                            <li>
                                <Link spy={true} smooth={false} className='nav-links'
                                    to="skills">Skills</Link>
                            </li>
                            <li>
                                <Link spy={true} smooth={false} className='nav-links'
                                    to="portfolio" >Portfolio</Link>
                            </li>
                            <li>
                                <Link spy={true} smooth={false} className='nav-links'
                                    to="resume">Resume</Link>
                            </li>
                            <li>
                                <Link spy={true} smooth={false} className='nav-links'
                                    to="contact">Contact</Link>
                            </li>
                        </Navigation>
                    </>
                    )}
                />
                <Media query="(min-width: 768px)" render={() =>
                    (
                        <Navigation className="gnb">
                            <li>
                                <Link spy={true} smooth={false} className='nav-links'
                                    to="about">About Me</Link>
                            </li>
                            <li>
                                <Link spy={true} smooth={false} className='nav-links'
                                    to="skills">Skills</Link>
                            </li>
                            <li>
                                <Link spy={true} smooth={false} className='nav-links'
                                    to="portfolio" >Portfolio</Link>
                            </li>
                            <li>
                                <Link spy={true} smooth={false} className='nav-links'
                                    to="resume">Resume</Link>
                            </li>
                            <li>
                                <Link spy={true} smooth={false} className='nav-links'
                                    to="contact">Contact</Link>
                            </li>
                        </Navigation>
                    )}
                />
                
                <ScrollProgress scroll="100%"/>
        </Container>
    );
};

export default Header;