import React, {useState, useContext} from "react";
import style from "./style.module.css";
import { AppContext } from "../../Context/AppContext.jsx";

export function Contact() {

    const {  contactRef } = useContext(AppContext);

    return (
        <section className={style.contact} data-aos="fade-up" ref={contactRef}>
            <header>
                <span className={style.aqua_span}>04. Contact</span>
                <h2 className={style.title}>Get In Touch</h2>
            </header>
            <div className={style.p_container}>
                <p>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you!</p>
                <p className={style.phone}>Or you can just call me: +258847623731</p>
                <a href='mailto:eufrasiojoao00@gmail.com' target="_blank">Say Hello</a>
            </div>
            
            <footer>
                <span>Designed by Brittany Chiang {'&'} Built by Eufrasio Joao</span>
                <span>A special thanks to <a target="_blank" href='https://brittanychiang.com' className={style.colored}>Brittany Chiang</a></span>
            </footer>
        </section>
    );
}