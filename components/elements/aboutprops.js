
import { Container, Row, Col } from "react-grid-system";
import React, { Component } from 'react';
import { FaFacebook, FaGlobe, FaInstagram } from "react-icons/fa";

// Components
import Icon from "../about_icon";

  

class AboutProps  extends Component {
    render() 
    {
     let { imgSrc,subtitle,icontitle1,title,icontitle2,icontitle3,icontitle4,icontitle5,icontitle6,
        iconsubtitle1,iconsubtitle2,iconsubtitle3,iconsubtitle4,iconsubtitle5,iconsubtitle6,text1,text2,text3,text4,text5,text6, facebook_link,web_link}  = this.props;

    return (
        <section className="section section-about section-about-1 section-about-6">
            <div className="display-full-screen">
                <div className="display-center">
                    <div className="about-me">
                        <Container className="container">
                            <div className="my-avatar">
                                <img src={imgSrc} alt="My Avatar" />
                            </div>
                            <h2>{title}</h2>
                            <h3>{subtitle}</h3>
                        </Container>
                    </div>
                </div>
                <span className="el-scroll"></span>
                <span className="el-scroll-line"></span>
            </div>
            <div className="section-resume section-resume-1 my-resume">
                <Container className="container">
                    <div className="box">
                        <Row nogutter>
                            <Col xs={12} sm={12} md={12} lg={12} xl={6} className="bg-primary">
                                <div className="inner">
                                    <div className="resume-row resume-dark">
                                        <h4 className="resume-title">Despre</h4>
                                        <ul>
                                            <li>
                                                <div className="resume-item">
                                                    <div className="resume-head">
                                                        <Icon title={icontitle1} subtitle={iconsubtitle1} small="(2016-2018)">
                                                            <span className="ti-paint-bucket"></span>
                                                        </Icon>
                                                    </div>
                                                    <div className="resume-body">
                                                        <p>{text1}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="resume-item">
                                                    <div className="resume-head">
                                                        <Icon title={icontitle2}  subtitle={iconsubtitle2} small="(2018-2019)">
                                                            <span className="ti-cup"></span>
                                                        </Icon>
                                                    </div>
                                                    <div className="resume-body">
                                                        <p>{text2}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="resume-item">
                                                    <div className="resume-head">
                                                        <Icon title={icontitle3}  subtitle={iconsubtitle3}small="(2019-2020)">
                                                            <span className="ti-ruler-alt-2"></span>
                                                        </Icon>
                                                    </div>
                                                    <div className="resume-body">
                                                        <p>{text3}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                                <div className="inner">
                                    <div className="resume-row resume-light">
                                        <h4 className="resume-title">Date Contact</h4>
                                        <ul>
                                            <li>
                                                <div className="resume-item">
                                                    <div className="resume-head">
                                                        <Icon title={icontitle4}  subtitle={iconsubtitle4} className="el-icon-dark" small="(2016-2017)">
                                                            <span className="ti-pencil-alt"></span>
                                                        </Icon>
                                                    </div>
                                                    <div className="resume-body">
                                                        <p>{text4}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="resume-item">
                                                    <div className="resume-head">
                                                        <Icon title={icontitle5}  subtitle={iconsubtitle5} className="el-icon-dark" small="(2017-2019)">
                                                            <span className="ti-heart"></span>
                                                        </Icon>
                                                    </div>
                                                    <div className="resume-body">
                                                        <p>{text5}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="resume-item">
                                                    <div className="resume-head">
                                                        <Icon title={icontitle6} subtitle={iconsubtitle6} className="el-icon-dark" small="(2019-2020)">
                                                            <span className="ti-paint-bucket"></span>
                                                        </Icon>
                                                    </div>
                                                    <div className="resume-body">
                                                        <p>{text6}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div><div className="my-avatar">
                                <img src="/images/logo_go.png" alt="My Avatar" />
                                </div>
                                <div className="sidenav-links, socialIcons">
                               
                                        <a href={web_link}>
                                            <FaGlobe className="icon" />
                                        </a>
                                  
                                        <a href={facebook_link}>
                                            <FaFacebook className="icon" />
                                        </a>
                                  
                                       
                              
                            </div>
                        
                            </Col>
                            
                        </Row>
                        
                    </div>
                    
                </Container>
            </div>
        </section>
        
    );
}
}

export default AboutProps;
