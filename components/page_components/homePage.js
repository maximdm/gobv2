


import React from "react";
import Slider from "react-slick";
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Intro() {
    const sliderSettings = {
        dots: true,
        arrows: false,
        autoplay: true
    }

    return (
        <section className="section section-hero section-hero-1 display-fit-screen">
            <div className="hero-content">
                <Slider className="el-slider" {...sliderSettings}>
                    <div className="slide">
                        <div className="image overlay-image" style={{ backgroundImage: `url(/images/main/home1.jpg)` }}></div>
                    </div>
                    <div className="slide">
                        <div className="image overlay-image" style={{ backgroundImage: `url(/images/main/home2.jpg)` }}></div>
                    </div>
                    <div className="slide">
                        <div className="image overlay-image" style={{ backgroundImage: `url(/images/main/home3.jpg)` }}></div>
                    </div>
                </Slider>
            </div>
            <div className="hero-sidebar overlay-color">
                <span className="bg-color bg-primary"></span>
                <div className="display-center">
                    <div className="content">
                        <h1>Mediul tău de afaceri prietenos</h1>
                        <p>Fii mai mult decât un simplu client.Fi un prieten</p>
                        <Link href={`/about`}>
                            <button className="button button-md button-light text-primary">
                                <span className="wave"></span>
                                <Link href="/about"><span className="text">Despre GO BV</span></Link>
                            </button>
                        </Link>
                        <div className="logo_go">
                        <img src="/images/logo_go.png" alt="My Avatar" />
                    </div>
                    </div>
                </div>
                <div className="hero-sidebar-links">
                    <ul>
                        <li>
                            <a href="/">
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
                    <p>Follow Me</p>
                </div>
            </div>
        </section>
    );
}

export default Intro;