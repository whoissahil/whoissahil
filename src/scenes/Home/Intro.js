import React from "react";
import TextLoop from "react-text-loop";
import Particles from "react-particles-js";
import { Container } from "react-grid-system";

function Intro() {
    return (
        <section className="section section-hero section-hero-5 overlay-image" style={{ backgroundImage: `url(/assets/images/intro/intro.png)` }} >
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 120,
                            density: {
                                enable: true,
                                value_area: 1500,
                            },
                        },
                        line_linked: {
                            enable: true,
                            opacity: 0.02,
                        },
                        move: {
                            direction: "right",
                            speed: 0.05,
                        },
                        size: {
                            value: 1,
                        },
                        opacity: {
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.05,
                            },
                        },
                    },
                    interactivity: {
                        events: {
                            onclick: {
                                enable: true,
                                mode: "push",
                            },
                        },
                        modes: {
                            push: {
                                particles_nb: 1,
                            },
                        },
                    },
                    retina_detect: true,
                }}
                className="el-particles"
            />
            <div className="display-center">
                <Container>
                    <div className="el-heading">
                        <h1>
                            I'm a{" "}
                            <TextLoop>
                                <span>Data Analyst</span>
                                <span>Web Developer</span>
                                <span>Writer</span>
                            </TextLoop>
                            <br />
                            Based in Dubai, UAE.
                        </h1>
                        <div className="el-icon">
                            <p className="el-icon-title">
                                <span role="img" aria-label="document">📄</span> <a href="https://docs.google.com/document/d/1eQoTG7tInq4b5CXQ6gOepA0_LCQz9eaP7YY-W3jxxyQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Brag-Sheet (CV)</a>
                            </p>
                        </div>
                        <br />
                        <div className="el-icon">
                            <h4 className="el-icon-title">
                                <span role="img" aria-label="document">👋</span> <a href="mailto:hello@whoissahil.com" target="_blank" rel="noopener noreferrer">hello@whoissahil.com</a>
                            </h4>
                        </div> 
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Intro;
