import React, {useState, useContext} from "react";
import style from "./style.module.css";
import { AppContext } from "../../Context/AppContext.jsx";

export function Experience() {

    const [UpTech_clicked, setUpTech_clicked] = useState(true)
    const [Freelance_clicked, setFreelance_clicked] = useState(false)
    const { experienceRef } = useContext(AppContext);

    const handleClick = (work)=>{
        if(work === 'UpTech'){
            setUpTech_clicked(true)
            setFreelance_clicked(false)
        }
        if(work === 'Freelance'){
            setUpTech_clicked(false)
            setFreelance_clicked(true)
        }
    }

    return (
        <section className={style.experience} data-aos="fade-up" ref={experienceRef}>
            <span className={style.title}>
                <span className={style.aqua_span}>02.</span> Were I've worked
            </span><br/><br/><br/>
            <div className={style.row}>
                <div className={style.left}>
                    <div onClick={()=>handleClick('UpTech')} className={ UpTech_clicked ? style.work_clicked : style.place_of_work}>UpTech</div>
                    <div onClick={()=>handleClick('Freelance')} className={ Freelance_clicked ? style.work_clicked_last : style.place_of_work}>Freelance</div>
                </div>
                <div className={style.right}>
                    {
                        UpTech_clicked ? (
                            <>
                                <span className={style.work_title}>
                                Fullstack Web Developer 
                                <span className={style.work_span}> @ UpTech</span>
                                </span>
                                <small>April 2021 - July 2022</small>
                                <ul className={style.ul}>
                                    <li>Developed, modern and mantainable web applications for a diverse list of clients and internal projects, using modern design patterns, like the MVC and others</li>
                                    <li>Worked with different languages, libraries, Javascript Frameworks, and other technologies like React.js, Node.js, Express, Mysql</li>
                                    <li>Communicate with Designers, producers, and clients on a daily basis </li>
                                </ul>
                            </>
                        ) : (
                            <>
                                <span className={style.work_title}>
                                    React.js Freelancer
                                    <span className={style.work_span}> - Current</span>
                                </span>
                                <small>August 2022 - Present</small>
                                <ul className={style.ul}>
                                    <li>Creating, ReactJs web applications as a freelancer web developer for clients, using modern user interfaces, and modern design patterns</li>
                                    <li>Working with the Javascript language, Javascript libraries, Javascript Frameworks, and other technologies</li>
                                </ul>
                            </>
                        )
                    }
                </div>
            </div>
        </section>
    );
}
