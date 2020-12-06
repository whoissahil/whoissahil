import React, { useEffect } from "react";
import { Route, Redirect, useRouteMatch } from "react-router-dom";
// Sections
import Blog from "./Blog";
import About from "./About";
import Intro from "./Intro";
import Header from "./Header";
import Resume from "./Resume";
import Expertise from "./Expertise";
import Contact from "./Contact";
// import Portfolio from "./Portfolio";
// import Testimonial from "./Testimonial";

// Import Blogs
import Blog1ProjectSetupPythonAutomation from "./Blogs/Blog1ProjectSetupPythonAutomation";
import Blog2OpeningANewHotelInNewYorkDataAnalysisandClustering from "./Blogs/Blog2OpeningANewHotelInNewYorkDataAnalysisandClustering";

// Components
import Helmet from "../../components/common/Helmet";
import Switch from "../../components/common/Switch";
import RedirectAs404 from "../../components/common/RedirectAs404";

const routes = [
    {
        path: "intro",
        component: <Intro />,
    },
    {
        path: "about",
        component: <About />,
    },
    {
        path: "resume",
        component: <Resume />,
    },
    {
        path: "expertise",
        component: <Expertise />,
    },
    // {
    //     path: "portfolio",
    //     component: <Portfolio />,
    // },
    {
        path: "blog",
        component: <Blog />,
    },
    {
        path: "blog/Project-Setup-Python-Automation",
        component: <Blog1ProjectSetupPythonAutomation />,
    },
    {
        path: "blog/Opening-A-New-Hotel-In-New-York-Data-Analysis-And-Clustering",
        component: <Blog2OpeningANewHotelInNewYorkDataAnalysisandClustering />,
    },
    // {
    //     path: "testimonial",
    //     component: <Testimonial />,
    // },
    {
        path: "contact",
        component: <Contact />,
    },
];

function Home() {
    let { path } = useRouteMatch();

    useEffect(() => {
        document.documentElement.className = "home-1 skin-1";
        return () => {
            document.documentElement.className = "";
        };
    });

    return (
        <div>
            <Helmet title="Who are you?" />
            <Header />
            <Switch>
                <Route path={path} exact>
                    <Redirect
                        to={{
                            pathname: `${path}intro`.replace(/([^:])(\/\/+)/g, "$1/"),
                        }}
                    />
                </Route>
                {routes.map((item, index) => (
                    <Route key={index} path={`${path}${item.path}`} exact>
                        {item.component}
                    </Route>
                ))}
                <Route component={RedirectAs404} />
            </Switch>
        </div>
    );
}

export default Home;
