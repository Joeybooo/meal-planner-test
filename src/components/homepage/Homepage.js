import React from "react";
import About from "./About";
import LoginSignup from "./LoginSignup";
import Footer from "../allpages/Footer";
import Header from "../allpages/Header";

function Homepage() {
    return (
        <div>
            <Header></Header>
            <About></About>
            <LoginSignup></LoginSignup>
            <Footer></Footer>
        </div>
    );
}

export default Homepage