import React from "react";
import Slider from "react-slick";

// Components
import Icon from "../about_icon";

const service = [
    {
        title: "Comunitatea",
        subtitle: "Fi parte a unei comunități ce iubește Brasșovul și poate contura o față acestui loc",
        link: "/about",
        icon: "ti-heart",
    },
    {
        title: "Opinii",
        subtitle: "Află ce considerăm topul divertismentului în Brașov",
        link: "/",
        icon: "ti-ruler-pencil",
    },
    {
        title: "Oferte",
        subtitle: "Fii primul care află ofertele din Brașov",
        link: "/",
        icon: "ti-paint-bucket",
    },
    {
        title: "Imagine",
        subtitle: "Creează-ți o imagine prorpie în cadrul GoBrașov",
        link: "/",
        icon: "ti-cup",
    },
    {
        title: "Transparență",
        subtitle: "Vezi tot ce se întâmplă în interiorul afacerilor din grup",
        link: "/",
        icon: "ti-ruler-alt-2",
    },
    {
        title: "Împrietenește-te",
        subtitle: "Grupul pornește de la ideea că fiecare comerciant poate fi atât relația ta dar mia ales prietenuil tău drag",
        link: "/",
        icon: "ti-brush-alt",
    },
];

function Service() {
    let sliderSettings = {
        dots: true,
        speed: 500,
        arrows: false,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="section section-service section-service-1 display-fit-screen">
            <div className="display-full-screen">
                <div className="overlay-image" style={{ backgroundImage: `url(/images/main/servicii.jpg)` }}>
                    <Slider className="el-slider" {...sliderSettings}>
                        {service.map((item, index) => (
                            <div className="item box" key={index}>
                                <div className="inner">
                                    <div className="service-item">
                                        <div className="service-head">
                                            <Icon label={`0${index + 1}.`} title={item.title}>
                                                <span className={item.icon} />
                                            </Icon>
                                        </div>
                                        <div className="service-body">
                                            <p>{item.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Service;
