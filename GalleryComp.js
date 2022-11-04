import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import Gallery1 from "../assets/img/Gallery/1.jpg";
import Gallery2 from "../assets/img/Gallery/2.jpg";
import Gallery4 from "../assets/img/Gallery/4.jpg";

const GalleryComp=()=> {
    return(
   
    <div className="gallery min-vh-100 d-flex align-items-center justify-content-center">
        <Container>
        <p class="text-center display-3" id="galeri">Gallery</p>
            <Row className="row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4 d-flex justify-content-center">

                <Col>
                  <img src={Gallery1} alt="unplash.com" />
                </Col>
                <Col>
                    <img src={Gallery2} alt="unplash.com" />
                </Col>
                <Col>
                    <img src={Gallery4} alt="unsplash.com" />
                </Col>
                <Col>
                  <img src={Gallery1} alt="unplash.com" />
                </Col>
                <Col>
                    <img src={Gallery2} alt="unplash.com" />
                </Col>
                <Col>
                    <img src={Gallery4} alt="unsplash.com" />
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default GalleryComp;