import React from "react";

import {Container, Row, Col} from "react-bootstrap";

const ServicesComp= () => {
return(
    <div className="min-vh-100 d-flex align-items-center" id="service">
        <Container className="mt-5">
            <Row>
                <Col>
                    <h1 className="text-center fw-bold">Services</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur.</p>
                </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-3 row-cols-sm-1 mt-5 g-3">
                <Col className="text-center py-5 border-bottom border-secondary">
                    <i className="fa-solid fa-coins fs-2 mb-2"></i>
                    <h5>Jurusan Terbaik</h5>
                    <p>Harga yang bersaing di pangsa nasional.</p>
                </Col>
                <Col className="text-center py-5 border-bottom border-secondary">
                    <i className="fa-solid fa-thumbs-up fs-2 mb-2"></i>
                    <h5>Fasilitas</h5>
                    <p>Harga yang bersaing di pangsa nasional.</p>
                </Col>
                <Col className="text-center py-5 border-bottom border-secondary">
                    <i className="fa-solid fa-shield-halved fs-2 mb-2"></i>
                    <h5>Ter-akreditasi</h5>
                    <p>Harga yang bersaing di pangsa nasional.</p>
                </Col>
            </Row>
        </Container>
    </div>
)
}

export default ServicesComp;