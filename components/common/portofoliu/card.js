import React from "react";
import Link from 'next/link';
import { Container, Row, Col } from "react-grid-system";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";


import portfolio from "../tables/parteneri_table";


function Cards() {
    return (
       
            
        <Tabs className={`el-tabs el-tabs-1 ${portfolio.class}`}selectedTabClassName="active">
        <TabList className={`el-tabs-links ${portfolio.class}`}>
            {portfolio.map((category, categoryIndex) => (
                <Tab key={categoryIndex}>{category.name}</Tab>
            ))}
        </TabList>
        {portfolio.map((category, categoryIndex) => (
            <TabPanel key={categoryIndex}>
                <Row className="row-center mb--30">
                    {category.items.map((item, index) => (
                        <Col key={index} xs={6} sm={6} md={6} lg={3} xl={3}>
                            <div className="portfolio-item">
                                <Link href={`/parteneri_details${item.link}`}>
                                    <div className="portfolio-card">
                                        <div className="image overlay-image" style={{ backgroundImage: `url(${item.image})` }} />
                                        <div className="content">
                                            <span>{item.title}</span>
                                            <h3>{item.subtitle}</h3>
                                        </div>
                                        <p className = {category.class}>{item.title}</p>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            </TabPanel>
        ))}
    </Tabs>
             
    );
}

export default Cards;