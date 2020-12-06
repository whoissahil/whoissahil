import React from "react";
import { Link } from "react-router-dom";
//Component
import Helmet from "../common/Helmet";


function error404() {
    return (
        <div>
        <Helmet title="Sure 'bout that URL?" />
        <section className="section section-error-404 overlay-image">
            <div className="display-center">
                <div className="error-content text-center">
                    <h1>404!</h1>
                    <h3>Page not found</h3>
                    <p>The page you were looking for could not be found.</p>
                    <Link to="/">
                        <button className="button button-lg button-primary">
                            <span className="wave"></span>
                            <span className="text">BACK TO HOMEPAGE</span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
        </div>
    );
}

export default error404;
