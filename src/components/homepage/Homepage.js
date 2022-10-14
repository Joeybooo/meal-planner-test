import React from "react";
import About from "./About";
import LoginSignup from "./LoginSignup";
import Footer from "../allpages/Footer";
import Header from "../allpages/Header";
import Tabs from '../allpages/Tabs';

function Homepage() {
    return (
        <div>
            <Header></Header>
            <Tabs></Tabs>
            <About></About>
            <LoginSignup></LoginSignup>
            <Footer></Footer>
        </div>
    );
}

export default Homepage