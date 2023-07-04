import {
    RiUser3Fill, 
    RiCalendarCheckLine, 
    RiGraduationCapFill, 
    RiMailSendFill, 
    RiMapPin2Fill, 
    RiPhoneFill,
    RiHtml5Fill, 
    RiCss3Fill, 
    RiJavascriptFill, 
    RiReactjsFill, 
    RiAndroidFill, 
    RiBootstrapFill
} from "react-icons/ri";
import {
    SiApachecordova, 
    SiSpring, 
    SiSpringboot, 
    SiEclipseide, 
    SiMariadb, 
    SiOracle, 
    SiJquery, 
    SiAmazonaws,
    SiDocker,
    SiNginx,
    SiApachetomcat,
    SiGithub,
} from 'react-icons/si';
import {
    GrMysql, 
    GrUbuntu
} from 'react-icons/gr';
import {FaJava, FaNodeJs} from 'react-icons/fa';

const data = [
    {
        "about" : 
        [
            {
                "info" : 
                [
                    {
                        "num" : 0,
                        "id" : "이름",
                        "content" : "최인영",
                        "icon" : <RiUser3Fill size={30}/>
                    },
                    {
                        "num" : 1,
                        "id" : "생년월일",
                        "content" : "1996.08.20",
                        "icon" : <RiCalendarCheckLine size={30}/>
                    },
                    {
                        "num" : 2,
                        "id" : "주소지",
                        "content" : "경기도 김포시",
                        "icon" : <RiMapPin2Fill size={30}/>
                    },
                    {
                        "num" : 3,
                        "id" : "연락처",
                        "content" : "010-5435-2982",
                        "icon" : <RiPhoneFill size={30}/>
                    },
                    {
                        "num" : 4,
                        "id" : "이메일",
                        "content" : "sbchzdlt@naver.com",
                        "icon" : <RiMailSendFill size={30}/>
                    },
                    {
                        "num" : 5,
                        "id" : "학력",
                        "content" : "수원대학교 수학과",
                        "icon" : <RiGraduationCapFill size={30}/>
                    }
                ],
                "intro" :
                [
                    {
                        "content" : "안녕하세요. 코딩과 관련된 공부가 너무 즐거운 풀스텍 웹 개발자입니다. 원하는 결과가 있으면 끝까지 파고드는 것이 제 장점입니다."
                    }
                ]
            }
        ],
        "skills" :
        [
            {
                "FrontEnd" :
                [
                    {
                        "Web" : 
                        [
                            {
                                "skill" : "HTML5",
                                "icon" : <RiHtml5Fill color="#f06529" size={80}/>,
                                "grade" : "5"
                            },
                            {
                                "skill" : "CSS3",
                                "icon" : <RiCss3Fill color="#2965f1" size={80}/>,
                                "grade" : "4"
                            },
                            {
                                "skill" : "JS",
                                "icon" : <RiJavascriptFill color="#F0DB4F" size={80}/>,
                                "grade" : "4"
                            },
                            {
                                "skill" : "React",
                                "icon" : <RiReactjsFill color="#61DBFB" size={80}/>,
                                "grade" : "4"
                            },
                            {
                                "skill" : "Bootstrap",
                                "icon" : <RiBootstrapFill color="purple" size={80}/>,
                                "grade" : "5"
                            },
                            {
                                "skill" : "JQuery",
                                "icon" : <SiJquery color="#292689" size={80}/>,
                                "grade" : "5"
                            }
                        ],
                        "Mobile" :
                        [
                            {
                                "skill" : "React Native",
                                "icon" : <RiReactjsFill color="#61DBFB" size={80}/>,
                                "grade" : "3"
                            },
                            {
                                "skill" : "Cordova",
                                "icon" : <SiApachecordova color="#A6A6A6" size={80}/>,
                                "grade" : "3"
                            },
                            {
                                "skill" : "Android Studio",
                                "icon" : <RiAndroidFill color="#3DDC84" size={80}/>,
                                "grade" : "3"
                            }
                        ]
                    }
                ],
                "BackEnd" : 
                [
                    {
                        "language" : 
                        [
                            {
                                "skill" : "Java",
                                "icon" : <FaJava color="#5382a1" size={80}/>,
                                "grade" : "4"
                            },
                            {
                                "skill" : "NodeJS",
                                "icon" : <FaNodeJs color="#3DDC84" size={80}/>,
                                "grade" : "1"
                            }
                        ],
                        "tool" :
                        [
                            {
                                "skill" : "eclipse",
                                "icon" : <SiEclipseide color="#423181" size={80}/>,
                                "grade" : "5"
                            },
                            {
                                "skill" : "Spring",
                                "icon" : <SiSpring color="#6DB23F" size={80}/>,
                                "grade" : "5"
                            },
                            {
                                "skill" : "Spring FrameWork",
                                "icon" : <img src="images/spring-framework.svg" alt="springframework" style={{width: "82px", margin: "3px 0"}}/>,
                                "grade" : "4"
                            },
                            {
                                "skill" : "SpringBoot",
                                "icon" : <SiSpringboot color="#6DB23F" size={80}/>,
                                "grade" : "5"
                            }
                        ]
                    }
                ],
                "Database" : 
                [
                    {
                        "skill" : "MySQL",
                        "icon" : <GrMysql color="#5382a1" size={70}/>,
                        "grade" : "5"
                    },
                    {
                        "skill" : "MariaDB",
                        "icon" : <SiMariadb color="brown" size={70}/>,
                        "grade" : "5"
                    },
                    {
                        "skill" : "Oracle",
                        "icon" : <SiOracle color="red" size={70}/>,
                        "grade" : "2"
                    }
                ],
                "Server" :
                [
                    {
                        "Cloud" :
                        [
                            {
                                "skill" : "Oracle",
                                "icon" : <SiOracle color="#5382a1" size={80}/>,
                                "grade" : "4"
                            },
                            {
                                "skill" : "AWS",
                                "icon" : <SiAmazonaws color="#FF9900" size={80}/>,
                                "grade" : "4"
                            }
                        ],
                        "OS" :
                        [
                            {
                                "skill" : "Ubuntu",
                                "icon" : <GrUbuntu color="#DD4814" size={80}/>,
                                "grade" : "5"
                            }
                        ],
                        "Platform" :
                        [
                            {
                                "skill" : "Docker",
                                "icon" : <SiDocker color="#0db7ed" size={80}/>,
                                "grade" : "5"
                            }
                        ],
                        "WebServer" :
                        [
                            {
                                "skill" : "Nginx",
                                "icon" : <SiNginx color="green" size={80}/>,
                                "grade" : "5"
                            }
                        ],
                        "WAS" :
                        [
                            {
                                "skill" : "tomcat",
                                "icon" : <SiApachetomcat color="#000" size={80}/>,
                                "grade" : "5"
                            }
                        ]
                    }
                ],
                "ETC" : 
                [
                    {
                        "skill" : "GitHub",
                        "icon" : <SiGithub color="#171515" size={80}/>,
                        "grade" : "3"
                    },
                    {
                        "skill" : "Adobe PhotoShop",
                        "icon" : <img src="images/photoshop.png" alt="python" style={{width: "80px"}} />,
                        "grade" : "1"
                    },
                    {
                        "skill" : "Figma",
                        "icon" : <img src="images/figma.png" alt="python" style={{width: "80px"}} />,
                        "grade" : "1"
                    },
                    {
                        "skill" : "Python",
                        "icon" : <img src="images/python.png" alt="python" style={{width: "80px"}} />,
                        "grade" : "2"
                    }
                ]
                
            }
        ],
        "portfolio" : 
        [
            {
                "title" : "EzenCinema",
                "date" : "2023.06.15 ~ 진행중",
                "people" : "7",
                "thumbnail" :  "images/4041.png",
                "description" : 
                [
                    {
                        "introduce" : "blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah",
                        "github" : "https://github.com/in1913/ezenCinema",
                        "website" : "https://ezencinema.com",
                        "Database" : "MySQL",
                        "Deployment" : "AWS(EC2)"
                    }
                ],
                "role" : "FrontEnd & BackEnd",
            },
            {
                "title" : "EzenCinema",
                "date" : "2023.06.15 ~ 진행중",
                "people" : "7",
                "thumbnail" :  "images/4041.png",
                "description" : 
                [
                    {
                        "introduce" : "blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah",
                        "github" : "https://github.com/in1913/ezenCinema",
                        "website" : "https://ezencinema.com",
                        "Database" : "MySQL",
                        "Deployment" : "AWS(EC2)"
                    }
                ],
                "role" : "FrontEnd & BackEnd",
            },
            {
                "title" : "EzenCinema",
                "date" : "2023.06.15 ~ 진행중",
                "people" : "7",
                "thumbnail" :  "images/4041.png",
                "description" : 
                [
                    {
                        "introduce" : "blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah",
                        "github" : "https://github.com/in1913/ezenCinema",
                        "website" : "https://ezencinema.com",
                        "Database" : "MySQL",
                        "Deployment" : "AWS(EC2)"
                    }
                ],
                "role" : "FrontEnd & BackEnd",
            },
            {
                "title" : "EzenCinema",
                "date" : "2023.06.15 ~ 진행중",
                "people" : "7",
                "thumbnail" :  "images/4041.png",
                "description" : 
                [
                    {
                        "introduce" : "blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah",
                        "github" : "https://github.com/in1913/ezenCinema",
                        "website" : "https://ezencinema.com",
                        "Database" : "MySQL",
                        "Deployment" : "AWS(EC2)"
                    }
                ],
                "role" : "FrontEnd & BackEnd",
            },
            {
                "title" : "EzenCinema",
                "date" : "2023.06.15 ~ 진행중",
                "people" : "7",
                "thumbnail" :  "images/4041.png",
                "description" : 
                [
                    {
                        "introduce" : "blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah",
                        "github" : "https://github.com/in1913/ezenCinema",
                        "website" : "https://ezencinema.com",
                        "Database" : "MySQL",
                        "Deployment" : "AWS(EC2)"
                    }
                ],
                "role" : "FrontEnd & BackEnd",
            },
            {
                "title" : "EzenCinema",
                "date" : "2023.06.15 ~ 진행중",
                "people" : "7",
                "thumbnail" :  "images/4041.png",
                "description" : 
                [
                    {
                        "introduce" : "blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah",
                        "github" : "https://github.com/in1913/ezenCinema",
                        "website" : "https://ezencinema.com",
                        "Database" : "MySQL",
                        "Deployment" : "AWS(EC2)"
                    }
                ],
                "role" : "FrontEnd & BackEnd",
            },
        ]
    }
]

export default data;