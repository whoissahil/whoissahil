import React from "react";
import Slider from "react-slick";
import { Container } from "react-grid-system";
// Components
import Helmet from "../../components/common/Helmet";


const service = [
    {
        title: "Web Development",
        subtitle: "I have experience building Web Apps and Website using JavaScript, React, HTML, CSS, Django, Flask, and MEAN stack. Check my ",
        link: "https://github.com/whoissahil",
        linktext: "💻 Projects Mayhem",
        icon: "ti-ruler-alt-2",
    },
    {
        title: "Data Science & Analytics",
        subtitle: "Now I'm getting my hands dirty with Data Science & Analytics. View my certifications on ",
        subtitle2: "and my badges on",
        link: "https://www.coursera.org/user/e997007a6d05140b8d97e48fbbb69fee",
        linktext: "Coursera",
        icon: "ti-ruler-pencil",
    },
    {
        title: "Mobile App Development",
        subtitle: "I have also developed few hyrid apps for both Android and iOS for Hackathons and College Projects using XCode and Android Studio.",
        link: "",
        icon: "ti-paint-bucket",
    },  
];

function Service() {
    let sliderSettings = {
        dots: true,
        speed: 500,
        arrows: false,
        infinite: true,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 3,
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
                breakpoint: 993,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: 50,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 0,
                    slidesToScroll: 0,
                    centerMode: true,
                    centerPadding: 100,
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
        <div>
        <Helmet title="Your Expertise?" />
        <section className="section section-service section-service-5">
            <div className="display-spacing mb-0">
                <Container>
                    <header className="el-heading el-heading-center">
                        <div className="el-icon">
                            <h2 className="el-icon-title">
                                <span>EXPERTISE</span>
                            </h2>
                        </div>
                        <h3>Let's See My Expertise</h3>
                        <div className="divider divider-1-reverse divider-1-1"></div>
                        <div className="divider divider-1-reverse divider-1-2"></div>
                    </header>
                    <Slider className="el-slider el-slider-plr--15 mb-30" {...sliderSettings}>
                        {service.map((item, index) => (
                            <div className="service-wrap" key={index}>
                                <div className="service-item">
                                    <div className="service-head">
                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                    </div>
                                    <div className="service-body">
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}<a href={item.link} target="_blank" rel="noopener noreferrer">{item.linktext}</a> </p>
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

export default Service;
