import React from "react";
import { Container, Row, Col } from "react-grid-system";
// Components
import ProgressBar from "../../components/common/ProgressBar";
import Helmet from "../../components/common/Helmet";


const skills = [
    {
        title: "Web Development",
        percent: 90,
    },
    {
        title: "Mobile Apps",
        percent: 80,
    },
    {
        title: "Software Development",
        percent: 75,
    },
    {
        title: "Data Science",
        percent: 80,
    },
    {
        title: "Management",
        percent: 90,
    },
    {
        title: "Wordpress",
        percent: 90,
    },
];
const education = [
    {
        title: "BE Hons. in Computer Science",
        subtitle: "BITS Pilani, Dubai Campus | Dubai",
        description: "Courses - Artificial Intelligence, Cloud Computing, Compiler Construction, Computer Architecture, Cryptography, Data Structures & Algorithms, Design & Analysis Of Algorithm, Computer Networks",
        date: "(2014-2018)",
        icon: "ti-crown",
        linktext: "",
        link: "#",
    },
    {
        title: "IBM Data Science Specialization",
        subtitle: "Coursera | Dubai",
        description: "Courses - What is Data Science?, Machine Learning with Python, Tools for Data Science, Databases and SQL for Data Science, Data Science Methodology, Applied Data Science Capstone, Python for Data Science and AI, Data Analysis with Python, Data Visualization with Python",
        date: "(2016-2018)",
        icon: "ti-cup",
        linktext: " | Link",
        link: "https://www.coursera.org/account/accomplishments/professional-cert/NG6Q5QHADMFY",
    },
    {
        title: "Deep Learning Specialization",
        subtitle: "Coursera | Dubai",
        description: "Courses - Sequence Models, Structuring Machine Learning Projects, Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization, Convolutional Neural Networks, Neural Networks and Deep Learning",
        date: "(2016-2018)",
        icon: "ti-ruler-alt-2",
        linktext: " | Link",
        link: "https://www.coursera.org/account/accomplishments/specialization/AYDJZG5YM2A2",
    },
    {
        title: "Show & Tech, 2018 – In5 Lab & MeltingPot2020",
        subtitle: "Dubai",
        description: "Implemented the backend of the project solely. Developed a solution for carpooling services based on a blockchain platform using IBM Watson Cloud. The solution was shortlisted in the top 25 ideas pitched in the event.",
        date: "(2018)",
        icon: "ti-ruler-alt-2",
    },
];
const experience = [
    {
        title: "Web Developer",
        subtitle: "DLX Holiday Homes Rental LLC | Dubai",
        description: "Designed the user experience for the website and finalize the technology stack for the consumer-facing digital channels. Solely developed the website for a sister company called ​Serviced Apartments​ using Wordpress. Handled the Designing, Developing, Digital Marketing, Google Analysis, Google Tag Manager, and SEO of the company. Created Landing Pages for specific projects which successfully increased the company's business by 20%. Created a website for a Property Maintenance Company which brought the business a wide number of new opportunities and increased the number of customers by 60%.",
        date: "(Jul 2019 - Present)",
        icon: "ti-pencil-alt",
    },
    {
        title: "Intern @ Software Development",
        subtitle: "Kemipex FZE | Dubai",
        description: "Successfully completed multiple project and implemented them which helped the company save time and increase their efficiency. Created a scorecard to improve channel partners sales and service performance. Implemented the scorecard across 6 cities and more than 100 channel partners. Utilized analytical tools such as SPSS, Access, Excel to generate models for analysis. Undertook thorough market scans to identify performance of client vis-à-vis its competitors. Created analytical models to identify network enhancement requirements based on multiple variables. Developed the main website of the company detailing the Product offerings and the commerce features using PHP.",
        date: "(Aug 2018 - Jan 2019)",
        icon: "ti-heart",
    },
    {
        title: "Intern @ Software Development",
        subtitle: "FlyNava Technologies | Bangalore",
        description: "Led a team of three people and successfully completed the project in the given timeline. Developed an Android app for the software named Jupiter. The app displayed Market Performance and analysis in an organized manner and managed the UI module perfectly.",
        date: "(Jun 2017 - Aug 2017)",
        icon: "ti-paint-bucket",
    },
];

function Resume() {
    return (
        <div>
        <Helmet title="Brag 'bout you?" />
        <section className="section section-resume section-resume-1">
            <div className="display-spacing">
                <header className="el-heading el-heading-center">
                    <div className="el-icon">
                        <h2 className="el-icon-title">
                            <span>RESUME</span>
                        </h2>
                    </div>
                    <h3>Education &amp; Experience</h3>
                    <div className="divider divider-1-reverse divider-1-1"></div>
                    <div className="divider divider-1-reverse divider-1-2"></div>
                </header>
                <Container className="mb-spacing">
                    <Row>
                        <Col md={6}>
                            <div className="resume-row">
                                <h4 className="resume-title">Education &amp; Achievements</h4>
                                <ul>
                                    {education.map((item, index) => (
                                        <li key={index}>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <div className="el-icon">
                                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <h6>{item.subtitle}  <a href={item.link} target="_blank" rel="noopener noreferrer">{item.linktext}</a> <small>{item.date}</small></h6> 
                                                </div>
                                                <div className="resume-body">
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="resume-row">
                                <h4 className="resume-title">Experience</h4>
                                <ul>
                                    {experience.map((item, index) => (
                                        <li key={index}>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <div className="el-icon">
                                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <h6>
                                                        {item.subtitle} <small>{item.date}</small>
                                                    </h6>
                                                </div>
                                                <div className="resume-body">
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        {skills.map((item, index) => (
                            <Col key={index} sm={6} xl={4}>
                                <div className="skills-item">
                                    <ProgressBar label={item.title} percent={item.percent} />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </section>
        </div>
    );
}

export default Resume;
