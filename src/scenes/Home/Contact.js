import React from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";
import emailjs from 'emailjs-com';
// Components
import Helmet from "../../components/common/Helmet";


function Contact() {

  function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('whoissahil', 'template_3xe5sfq', e.target, 'user_gVib2887wQbRgZz3JXOf7')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (
        <div>
        <Helmet title="Let's grab a Coffee?" />
        <section className="section section-contact section-contact-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Hidden xs sm md>
                            <Col lg={5}>
                                <div className="contact-image">
                                    <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/contact/1-1.jpg)` }}></div>
                                </div>
                            </Col>
                        </Hidden>
                        <Col lg={7}>
                            <div className="contact-content">
                                <header className="el-heading">
                                    <h2 className="el-icon">
                                        <span className="el-icon-title">CONTACT ME</span>
                                    </h2>
                                    <h3>
                                        <span>Get in touch with me today.</span>
                                    </h3>
                                    <div className="divider divider-1"></div>
                                    <p>Open to discuss about the followinig - 
                                        <li>Ideas that can change the world</li>
                                        <li>Harry Potter</li>
                                        <li>Football</li>
                                    </p>    
                                    <p>Let's grab a coffee :)</p>
                                </header>
                                <form className="form form-1 pt-15" onSubmit={sendEmail}>
                                    <Row className="row">
                                        <Col xs={12} sm={12} md={6}>
                                            <div className="form-item">
                                                <input type="text" id="form-item-name" name="name" />
                                                <label htmlFor="form-item-name">Your Name</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={6}>
                                            <div className="form-item">
                                                <input type="email" id="form-item-email" name="email" />
                                                <label htmlFor="form-item-email">Your Email</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={12}>
                                            <div className="form-item">
                                                <textarea id="form-item-message" name="message"></textarea>
                                                <label htmlFor="form-item-message">Your Message</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={12}>
                                            <button className="button button-md button-primary" type="submit" >Send Message</button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
        </div> 
    );
}


export default Contact;
