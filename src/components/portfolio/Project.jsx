import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap';
import "./portfolio.css";
const Project = ({title, date, people, thumbnail, description, role}) => {
    const [isHover, setIsHover] = useState(false);
    const handleMouseOver = () => {
        setIsHover(true);
    }
    const handleMouseOut = () => {
        setIsHover(false);
    }
    return (
        <Card 
            style={{background : "#fff", color: "#000"}} 
            className={isHover ? "mb-5 big" : "mb-5 small"}
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
            >
            <Card.Img variant='top' src={thumbnail} style={{width: "100%"}}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{date}</Card.Subtitle>
                <Card.Subtitle>{people}</Card.Subtitle>
                <Card.Subtitle>{role}</Card.Subtitle>
                <Card.Text>
                    {description[0]["introduce"]}
                    </Card.Text>
                    <div className='mt-3'>
                        <Button href={description[0]["github"]} className='me-3 '>Github</Button>
                        <Button href={description[0]["website"]}>Website</Button>
                    </div>
            </Card.Body>
        </Card>
    );
};

export default Project;