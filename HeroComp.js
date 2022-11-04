
import React from "react";
import {Container, Row, Col} from "react-bootstrap";



function HeroComp (){
    return(
        <div className="img-fluid hero min-vh-100 w-100" id="home">
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-white text-center animate__animated animate__wobble">SMKN 1 Bangkinang</h1>
                        <p className="text-white-50 text-center animate__animated animate__fadeInUp animate__delay-1s">Mengukir Prestasi Berfaedahlah Diri</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}



export default HeroComp;