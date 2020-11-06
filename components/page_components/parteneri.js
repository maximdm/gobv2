import React from "react";
import Link from 'next/link';
import Cards from '../common/portofoliu/card'

// Components
import { Container, Row, Col } from "react-grid-system";
import Headline from "../../components/common/Headline";
import portfolio from "../../components/common/tables/parteneri_table";


function Parteneri() {
    return (
        <section className="section section-portfolio section-portfolio-1 bg-gradient-side overlay-color">
            <span className="bg-color bg-dark-60"></span>
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="Portfolio" title="Let's See Our portfolio" divider_1={true} position="center" />
                    <Cards />
                   
                </Container>
            </div>
        </section>
    );
}

export default Parteneri;