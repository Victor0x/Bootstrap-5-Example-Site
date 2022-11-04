import {React, useState} from "react";


import {Container, Col, Row, Card} from "react-bootstrap";
// galeri gambar.
import Gallery2 from "../assets/img/Gallery/2.jpg";
// end gambar.

const JurusanComp = () => {
    const [Text1, setText1] = useState('Selengkapnya');
    const [Text2, setText2] = useState('Selengkapnya');
    const [Text3, setText3] = useState('Selengkapnya');
    
    const onSubmit1 = (e) => {
        e.preventDefault();
        
        setText1('Menuju Halaman');
        
      };
      const onSubmit2 = (e) => {
        e.preventDefault();
        
        setText2('Menuju Halaman');
        
      };
      const onSubmit3 = (e) => {
        e.preventDefault();
        
        setText3('Menuju Halaman');
        
      };

      //on hover event

      

   
    
                return (
                <div>
                    <Container>
                        <p className="text-center display-3" id="jurusan">Jurusan</p>
                        <Row className="row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4">
                            <Col>
                                <Card className="mx-auto cardAnimation">
                                    <img className={"card-img-top"} src={Gallery2} />
                                    <div className={"card-body"}>
                                        <h5 className={"card-title text-center"}>RPL</h5>
                                        <p className={"card-text text-center"}>Suasana sangat nyaman dengan AC segar dingin.</p>
                                        <a href={'#'} className={"btn btn-primary d-flex justify-content-center"} onClick={onSubmit1}>{Text1}</a>
                                    </div>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="mx-auto">
                                    <img className={"card-img-top"} src={Gallery2} />
                                    <div className={"card-body"}>
                                        <h5 className={"card-title text-center"}>TKJ</h5>
                                        <p className={"card-text text-center"}>Suasana sangat nyaman dengan AC segar dingin.</p>
                                        <a href={'#'} className={"btn btn-primary d-flex justify-content-center"} onClick={onSubmit2}>{Text2}</a>
                                    </div>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="mx-auto">
                                    <img className={"card-img-top"} src={Gallery2} />
                                    <div className={"card-body"}>
                                        <h5 className={"card-title text-center"}>MM</h5>
                                        <p className={"card-text"}>Suasana sangat nyaman dengan AC segar dingin.</p>
                                        <a href={'#'} className={"btn btn-primary d-flex justify-content-center"} onClick={onSubmit3}>{Text3}</a>
                                    </div>
                                </Card>
                        </Col>
                        </Row>
                    </Container>
                </div>
    )
}

export default JurusanComp;