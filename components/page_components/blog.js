import React from "react";
import Slider from "react-slick";
import  Link  from "next/link";
import { Container } from "react-grid-system";

// Components
import Headline from "../../components/common/Headline";
import posts from "../../components/common/tables/blog_table";



function Blog() {
    let sliderSettings = {
        dots: true,
        speed: 500,
        arrows: false,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: 30,
        draggable: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="section section-blog section-blog-2">
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="Articole" title="Urmărește ce se întâmplă în lume GO" divider_1={true} position="center" />
                    <Slider className="el-slider el-slider-plr--15" {...sliderSettings}>
                        {posts.map((item, index) => (
                            <div key={index} className="post-item">
                                <Link href={`/home-2${item.link}`}>
                                    <div className="post-image bg-primary">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                </Link>
                                <div className="post-content">
                                    <div className="post-data">
                                        <h4 className="post-title">
                                            <Link href={`/home-1${item.link}`}>{item.title}</Link>
                                        </h4>
                                        <div className="post-date">
                                            <i className="ti-time"></i>
                                            {item.date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </div>
        </section>
    );
}

export default Blog;