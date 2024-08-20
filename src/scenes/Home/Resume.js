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
        description: "Design and build an end to end analytics Data lake and Data Warehouse using Azure Cloud Services in a team. Data integration components using a mix of On-Premise and Cloud data sources using Azure Data Factory. Data integration from technologies like database as well as modern cloud based sources like Web Services, APIs etc. Proficient in using data sources like Salesforce, Oracle CRM, Oracle EBS(On-Premise), Oracle Fusion, MS Dynamics CRM and MS Dynamics Finance & Operations ERP. Data transformations, Enrichment and Processing using Azure Databricks. Design and Build Lakehouse components using Hive tables (In-Memory & External) in Azure Databricks. Design and build PySpark based scripts for data processing within the lakehouse. Built automated dashboards on Power BI to visualize KPIs, trends and actionable insights saving 10 hours per week of manual reporting work. Build Business Alerts through emails over lakehouse using PySpark/Python components. Developed automated scripts for Data Quality based on business requirements in PySpark and Scala to clean 25+ years old data in an automated way.Design and build an end to end analytics Data lake and Data Warehouse using Azure Cloud Services in a team. Data integration components using a mix of On-Premise and Cloud data sources using Azure Data Factory. Data integration from technologies like database as well as modern cloud based sources like Web Services, APIs etc. Proficient in using data sources like Salesforce, Oracle CRM, Oracle EBS(On-Premise), Oracle Fusion, MS Dynamics CRM and MS Dynamics Finance & Operations ERP. Data transformations, Enrichment and Processing using Azure Databricks. Design and Build Lakehouse components using Hive tables (In-Memory & External) in Azure Databricks. Design and build PySpark based scripts for data processing within the lakehouse. Built automated dashboards on Power BI to visualize KPIs, trends and actionable insights saving 10 hours per week of manual reporting work. Build Business Alerts through emails over lakehouse using PySpark/Python components. Developed automated scripts for Data Quality based on business requirements in PySpark and Scala to clean 25+ years old data in an automated way. Part of the Data Migration team. Developed automated Scripts to prepare the data for CRM Migration.",
        date: "(Jun 2021 - Present)",
        icon: "ti-heart",
    },
    {
        title: "Web Developer",
        subtitle: "DLX Holiday Homes Rental LLC | Dubai",
        description: "Developed and delivered the website for a sister company called Serviced Apartments using Wordpress. Handled the Designing, Developing, Digital Marketing, Google Analysis, Google Tag Manager, and SEO of the company. Developed Wordpress plugins based on business requirements using Python and PHP. Developed and implemented the CRM and booking management system which handled 50+ bookings per day in a team using MERN stack (Mongo DB, Express JS, React and Node JS) in a team of 3 people. Created a website for a Property Maintenance Company which brought the business a wide number of new opportunities and increased the number of customers by 60%",
        date: "(Jul 2019 - Jun 2021)",
        icon: "ti-ruler-alt-2",
    },
    {
        title: "Software Developer",
        subtitle: "Mpliphi Tech - FZE | Dubai",
        description: "Developed a Mini-Program App on WeChat for a Real Estate startup catering to rental & sale for properties in Dubai. REST API and data model development in a Java/Spring MVC web application. Successfully conducted the testing of the APIs. Participated in code reviews and provided constructive feedback to improve code quality and maintainability. Developed a responsive site along with a team of two for AmsportME and Bits Pilani based on PHP. Designed, Developed and Deployed the solutions on various hosting providers like Bluehost and ZOHO.",
        date: "(Jan 2019 - Jul 2019)",
        icon: "ti-pencil-alt",
    },
    {
        title: "Intern @ Software Development",
        subtitle: "Kemipex FZE | Dubai",
        description: "Created a scorecard to improve channel partners sales and service performance. Implemented the scorecard across 6 cities and more than 100 channel partners. Developed in-house web-applications catering to business needs like “In-House CRM” using PHP (Laravel), “Label Printing App” using Python (Flask) and “Attendance System” (React). Developed the main website of the company detailing the Product offerings and the commerce features using HTML, JaveScript, CSS and PHP.",
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
