import React from "react";
import {Container, Col, Row} from "react-bootstrap";


const FooterComp= () => {
    return(
        <div className="bg-dark mb-0">
            <Container>
                <footer class="py-3 my-0">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Beranda</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Galeri</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Layanan</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
                    </ul>
                <p class="text-center text-muted">© 2022 SMK 1 Bangkinang</p>
                </footer>
            </Container>
        </div>
    )
}

export default FooterComp;