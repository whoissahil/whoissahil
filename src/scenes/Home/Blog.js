import React from "react";
import Slider from "react-slick";
import { Container } from "react-grid-system";
import { Link, useRouteMatch } from "react-router-dom";
// Components
import Headline from "../../components/common/Headline";
import Helmet from "../../components/common/Helmet";


const posts = [
    {
        title: "Project Setup — Python Automation",
        image: "/assets/images/blog/1-1.jpg",
        date: "Jan 12th, 2020",
        link: "/Project-Setup-Python-Automation",
        icon: "ti-light-bulb",
    },
    {
        title: "Opening a new hotel in New York — Data Analysis and Clustering",
        image: "/assets/images/blog/2-1.jpg",
        date: "Apr 8th, 2020",
        link: "/Opening-A-New-Hotel-In-New-York-Data-Analysis-And-Clustering",
        icon: "ti-mobile",
    },
];

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

    const { path } = useRouteMatch();

    return (
        <div>
        <Helmet title="What do you write about?" />
        <section className="section section-blog section-blog-1">
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="Blog" title="Let's See My Work" divider_1={true} position="center" />
                    <Slider className="el-slider el-slider-plr--15" {...sliderSettings}>
                        {posts.map((item, index) => (
                            <div key={index} className="post-item">
                                <Link to={`${path}${item.link}`.replace(/([^:])(\/\/+)/g, "$1/")}>
                                    <div className="post-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                                </Link>
                                <div className="post-content">
                                    <div className="el-icon">
                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                    </div>
                                    <div className="post-data">
                                        <h4 className="post-title">
                                            <Link to={`${path}${item.link}`.replace(/([^:])(\/\/+)/g, "$1/")}>{item.title}</Link>
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
        </div>
    );
}

export default Blog;
