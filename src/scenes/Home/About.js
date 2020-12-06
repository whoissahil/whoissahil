import React from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";
import Helmet from "../../components/common/Helmet";


function About() {
    return (
        <div>
        <Helmet title="Tell me 'bout you?" />
        <section className="section section-about section-about-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Hidden xs sm md>
                            <Col lg={5}>
                                <div className="about-image">
                                    <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/about/about.jpg)` }}></div>
                                </div>
                            </Col>
                        </Hidden>
                        <Col lg={7}>
                            <div className="about-content">
                                <header className="el-heading">
                                    <h2 className="el-icon">
                                        <span className="el-icon-title">ABOUT ME</span>
                                    </h2>
                                    <h3>
                                        <span>Hello, I am Sahil Sharma.</span>
                                    </h3>
                                    <div className="divider divider-1"></div>
                                    <p>I am a Computer Science Engineer from BITS Pilani, Dubai Campus. A business-focused individual who aspires to contribute through my experience in Data Science and Analytics. I have experience in Full Stack Web Development / App Development and have proficiency in more than five computer languages including Python, JavaScript, C/C++ and more.</p>
                                    <p>Good with management skills and public speaking. I've also worked across a wide array of industry 4.0 technologies including Big Data, Blockchain, machine learning, AI, AR, and IoT. Basically, While ( ! ( succeed = try() ) ); </p>
                                </header>
                                <Row className="pt-30">
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Web Design &amp; Development</h5>
                                                <p>Designed &amp; Developer over 10+ websites</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-mobile"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Mobile Development</h5>
                                                <p>Developer hybrid mobile applications</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-brush-alt"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Data Science &amp; Analytics</h5>
                                                <p>Gettin my hands dirty with Data Science</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Management</h5>
                                                <p>Managed and Delivered multiple projects within the given timeline</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
        </div>
    );
}

export default About;
