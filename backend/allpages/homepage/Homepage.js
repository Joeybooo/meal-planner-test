import React from "react";
import About from "./About";
import LoginSignup from "./LoginSignup";
import Footer from "../allpages/Footer";
import Header from "../allpages/Header";
import Tabs from '../allpages/Tabs';

const data = [ 
    {
        heading: "About",
        body: <About />
    },
    {
        heading: "Loging/Sign-Up",
        body: <LoginSignup />
    }
]

function Homepage() {
    return (
        <div>
            <Header></Header>
            <Tabs data={data} />
            <Footer></Footer>
        </div>
    );
}

export default Homepage;