import React from "react";
import style from "./style.module.css";
import { GithubLogo } from "phosphor-react";

export function Hero() {
    return (
        <section data-aos="fade-down" className={style.hero}>
            <span className={style.aqua_span}>Hi, my name is</span>
            <h1 className={style.name}>Eufrasio Joao.</h1>
            <h2 className={style.job}>I build things for the web.</h2>
            <p>
                I am a programmer, I am specializig myself in creating
                exceptional
                <br />
                applications for the web, mobile, and desktop devices. <br />
                For the past 2 years I have been particularly working with the
                <br />
                stack <span className={style.violet_span}>React.js</span>,{" "}
                <span className={style.violet_span}> React Native</span>,{" "}
                <span className={style.violet_span}>Node.js</span> and{" "}
                <span className={style.violet_span}>Electron</span>.
                <br />
                Currently, I'm focused on web{" "}
                <span className={style.aqua_span}>development</span> and{" "}
                <span className={style.aqua_span}>freelance</span>.
            </p>
            <a className={style.github_link} href="https://github.com/eufrasiojoao" target="_blank">
                Check out my
                <GithubLogo
                    className={style.icon}
                    color="rgb(23, 209, 178)"
                    size={25}
                    style={{ marginLeft: "10px" }}
                />
                !
            </a>
        </section>
    );
}
