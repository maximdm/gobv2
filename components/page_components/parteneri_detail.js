import React, { Component } from 'react';
import { Container } from "react-grid-system";
import { FaQuoteRight } from "react-icons/fa";

// Components
import Headline from "../../components/common/headline";

class  PortfolioDetails extends Component {
    render() 
    {
     let { bckgrImg,text1, text2, text3,quoteauthor, quote, title  } = this.props;

    return (
        <div className="section section-details section-portfolio-details display-fit-screen">
        
            <div className="section-inner-sidebar overlay-image" style={{ backgroundImage:  `url(${bckgrImg})` }}></div>
            <div className="section-inner-content">
                <div className="display-spacing">
                    <Container>
                    
                        <Headline title={title} divider_2={true} />
                        <div className="el-page-content">
                        
                            <p>{text1}</p>
                            <p>{text2}</p>
                            <p>{text3}</p>
                            <div className="el-blockquote">
                                <div className="el-blockquote-icon">
                                    <FaQuoteRight></FaQuoteRight>
                                </div>
                                <p>{quote}</p>
                                <span className="el-blockquote-author">{quoteauthor}</span>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
}
}

export default PortfolioDetails;