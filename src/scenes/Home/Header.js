import React, { useState } from "react";
import { useRouteMatch, NavLink, Link } from "react-router-dom";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
    {
        title: "Home",
        path: "intro",
    },
    {
        title: "About",
        path: "about",
    },
    {
        title: "Resume",
        path: "resume",
    },
    {
        title: "Expertise",
        path: "expertise",
    },
    // {
    //     title: "Portfolio",
    //     path: "portfolio",
    // },
    {
        title: "Blog",
        path: "blog",
    },
    // {
    //     title: "Testimonial",
    //     path: "testimonial",
    // },
    {
        title: "Contact",
        path: "contact",
    },
];

function Header() {
    let { url } = useRouteMatch();

    const [displaySidenav, setDisplaySidenav] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setDisplaySidenav(!displaySidenav);
    };

    return (
        <>
            <header className="app-header app-header-1">
                <div className="header-logo">
                    <Link to={`/`.replace(/([^:])(\/\/+)/g, "$1/")}>Sahil.</Link>
                </div>
                <button className="button button-menu" onClick={(e) => handleClick(e)}>
                    <span></span>
                </button>
                <ul className="header-dots">
                    {links.map((item, index) => (
                        <li key={index}>
                            <NavLink to={`${url}${item.path}`} activeClassName="active">
                                <span className="circle"></span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <ul className="header-menu">
                    {links.map((item, index) => (
                        <li key={index}>
                            <NavLink to={`${url}${item.path}`} activeClassName="active">
                                <span className="anchor">{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="header-follow">
                    <ul>
                        <li>
                            <a href="https://twitter.com/whoissahil">
                                <FaTwitter className="icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/whoissahil">
                                <FaGithub className="icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/whoissahil/">
                                <FaLinkedin className="icon" />
                            </a>
                        </li>
                    </ul>
                    <p>Let's Connect :)</p>
                </div>
            </header>
            <div className={`app-sidenav ${displaySidenav && "active"}`}>
                <div className="sidenav-menu">
                    <div className="logo">
                        <Link to={``.replace(/([^:])(\/\/+)/g, "$1/")}>Sahil</Link>
                    </div>
                    <button className="button" onClick={(e) => handleClick(e)}></button>
                    <ul className="sidenav-nav">
                        {links.map((item, index) => (
                            <li key={index} onClick={(e) => handleClick(e)}>
                                <NavLink to={`${url}${item.path}`.replace(/([^:])(\/\/+)/g, "$1/")} activeClassName="active">
                                    <span className="anchor">{item.title}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="sidenav-links">
                        <ul>
                            <li>
                                <a href="https://twitter.com/whoissahil">
                                    <FaTwitter className="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/whoissahil">
                                    <FaGithub className="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/whoissahil/">
                                    <FaLinkedin className="icon" />
                                </a>
                            </li>
                        </ul>
                        <p>Let's Connect :)</p>
                    </div>
                </div>
                <span className="sidenav-close" />
            </div>
        </>
    );
}

export default Header;
