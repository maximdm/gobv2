import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

// Components
import Icon from "../about_icon";
import Headline from "../../components/common/headline";

function Contact() {
    return (
        <section className="section section-contact section-contact-1 display-fit-screen">
            <div className="section-inner-sidebar overlay-image" style={{ backgroundImage: `url(/images/main/contact.jpg)` }}>
                <div className="social-links">
                    <ul>
                        <li>
                            <a href="/#">
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
                    <p>Urmăriți-ne:</p>
                </div>
            </div>
            <div className="section-inner-content">
                <div className="display-spacing">
                    <Container className="container">
                        <Headline title="Contact" divider_2={true} subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua. Ut enim ad minim enim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                        <form className="form form-1">
                            <Row>
                                <Col xs={12} sm={12} md={6}>
                                    <div className="form-item">
                                        <input type="text" placeholder="Numele Dumneavoastră" />
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <div className="form-item">
                                        <input type="email" placeholder="Email-ul Dumneavoastră" />
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={12}>
                                    <div className="form-item">
                                        <textarea placeholder="Mesajul Dumneavoastră"></textarea>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={12}>
                                    <button type="button" className="button button-block button-primary">
                                        Trimite mesaj
                                    </button>
                                </Col>
                            </Row>
                        </form>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={4}>
                                <Icon title="Telefon" subtitle="+123 456-789-000">
                                    <span className="ti-mobile"></span>
                                </Icon>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={4}>
                                <Icon title="Email" subtitle="Example@domain.com">
                                    <span className="ti-email"></span>
                                </Icon>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={4}>
                                <Icon title="Adresă" subtitle="California, USA">
                                    <span className="ti-direction"></span>
                                </Icon>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    );
}

export default Contact;
