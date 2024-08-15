import { useState } from "react"
import axios from "axios"
import { CarouselCaption } from "react-bootstrap"
import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/Container"
import "../src/App.css"

export default function HomePage (props){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Container>
             <Carousel activeIndex={index} onSelect={handleSelect} controls={true}>
                <Carousel.Item>
                    <img className="carousel-item-img" src="../src/assets/group-picture.jpg" alt="" />
                    <Carousel.Caption>
                        <p>This is some placeholder text</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-item-img" src="../src/assets/girls_on_fire_poster.jpg" alt="" />
                    <Carousel.Caption>
                        <p>This is some more placeholder text</p>
                    </Carousel.Caption>
                </Carousel.Item>
             </Carousel>
             </Container>
        </>
    )
}