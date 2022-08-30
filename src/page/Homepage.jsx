import React from "react";
import { Header } from "../components/header/Index";
import { InitialAnimation } from "../components/initial_animation/Index";
import { Hero } from "../sections/hero/Index";
import { SocialLinks } from "../components/social_links/Index";
import style from "./style.module.css";
import { About } from "../sections/about/Index";
import { Experience } from "../sections/experience/Index";
import { Projects } from "../sections/projects/Index";
import { Contact } from "../sections/contact/Index";

export function Homepage() {
    return (
        <div className={style.hompepage_container}>
            <header>
                <Header />
            </header>
            <SocialLinks />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </div> 
    );
}
