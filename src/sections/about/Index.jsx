import React, {useState, useContext} from "react";
import style from "./style.module.css";
import { GithubLogo } from "phosphor-react";
import { AppContext } from "../../Context/AppContext.jsx";

export function About() {

    const {  aboutRef } = useContext(AppContext);

    return (
        <section className={style.about} ref={aboutRef}>
            <span className={style.title} data-aos="fade-up">
                <span className={style.aqua_span}>01.</span> About Me
            </span>
            <div className={style.row}>
                <div className={style.left} data-aos="fade-right">
                    <p>
                        Hello, My name is Eufrasio and enjoy creating things
                        using the power of technology. My interest in
                        programming started when I was a kid when I started
                        playing Video Games. My huge interest about the internet
                        made me learn HTML {"&"} CSS.
                    </p>
                    <p>
                        I've had the privilege of making lots of websites for{" "}
                        <span className={style.aqua_span}>
                            friends, small bussiness and Institutions
                        </span>
                        . My main focus these days is to build accesive
                        applications using the power of{" "}
                        <span className={style.aqua_span}>
                            React.js, React Native
                        </span>{" "}
                        and many more technologies wanted by the market .
                    </p>
                    <p>Here are a few technologies that I use the most:</p>
                    <div className={style.technologies_row}>
                        <ul>
                            <li>JasvaScript {"(ES6+)"}</li>
                            <li>React.js</li>
                            <li>React Native</li>
                        </ul>
                        <ul>
                            <li>Node.js</li>
                            <li>Electron.js</li>
                            <li>HTML {"&"} CSS</li>
                        </ul>
                    </div>
                </div>
                <div className={style.right} data-aos="fade-left">
                    <img src="/images/me1.jpg" />
                    <div className={style.img_background}></div>
                    <div className={style.img_line}></div>
                </div>
            </div>
        </section>
    );
}
