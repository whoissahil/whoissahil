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
        title: "Data Analytics & Science",
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
        title: "Executive - Data Analyst",
        subtitle: "Dubai Integrated Economic Zone Authority (DIEZA) | Dubai",
        description: "Delivered an end-to-end Azure-based Data Lake and Warehouse solution, enabling access to unified enterprise data and accelerating real time analytics delivery. Streamlined near real time data integration from cloud and on-premise sources (e.g., Salesforce, Oracle, MS Dynamics), improving data availability for decision-making. Automated manual reporting by building Power BI dashboards, saving over 10 hours per week and generating actionable data insights. Improved CRM data quality by developing scalable PySpark/Scala pipelines, cleansing 25+ years of legacy records. Enabled timely business actions by building automated alerting systems using Python/PySpark over Lakehouse data. Supported strategic initiatives by migrating 5+ critical datasets to modern CRM platforms with zero data loss. Partnered with data scientist to build ML models for customer segmentation and sentiment analysis of inquiries and complaints; implemented business adoption strategies and set improvement targets for the most frequent negative sentiment categories. Driving a proof of concept on Microsoft Fabric to explore scalable data solutions and unlock new business insights. Working on POC using Microsoft Copilot (MCP) integrated with the Lakehouse semantic layer, enabling users to query enterprise data via natural language for improved self-service analytics.",
        date: "(Jun 2021 - Present)",
        icon: "ti-heart",
    },
    {
        title: "Web Developer",
        subtitle: "DLX Holiday Homes Rental LLC | Dubai",
        description: "Designed and developed a complete WordPress website for a sister company (Serviced Apartments), managing SEO, Google Analytics, Tag Manager, and digital marketing to boost online visibility. Built custom WordPress plugins using Python and PHP to meet specific business functionality needs. Co-developed a MERN stack-based CRM and booking management system handling 50+ daily bookings, improving operational efficiency. Created a website for a Property Maintenance Company, resulting in a 60% increase in customer acquisition and new business opportunities.",
        date: "(Jul 2019 - Jun 2021)",
        icon: "ti-ruler-alt-2",
    },
    {
        title: "Software Developer",
        subtitle: "Mpliphi Tech - FZE | Dubai",
        description: "Developed a WeChat Mini-Program for a Dubai real estate startup, enabling seamless property rental and sales access via mobile. Built and tested REST APIs, contributing to scalable backend systems and participating in code reviews for quality assurance. Co-developed and deployed responsive websites for AmsportME and Bits Pilani using PHP, delivering end-to-end solutions on platforms like Bluehost and ZOHO.",
        date: "(Jan 2019 - Jul 2019)",
        icon: "ti-pencil-alt",
    },
    {
        title: "Intern @ Software Development",
        subtitle: "Kemipex FZE | Dubai",
        description: "Developed in-house web applications and the main company website using PHP (Laravel), Python (Flask), and React to streamline CRM, label printing, and attendance tracking.",
        date: "(Aug 2018 - Jan 2019)",
        icon: "ti-heart",
    },
    {
        title: "Intern @ Software Development",
        subtitle: "FlyNava Technologies | Bangalore",
        description: "Led a team of three people and successfully completed the project in the given timeline. Developed an Android app for a web based software which displayed Market Performance and analysis in an organized manner and managed the UI module perfectly.",
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
