import React, {useState, useContext, useEffect} from "react";
import style from "./style.module.css";
import { Card } from "../../components/card/Index";
import { projects } from "../../data/projects.js";
import { AppContext } from "../../Context/AppContext.jsx";

export function Projects() {

    const { projectsRef } = useContext(AppContext);
    const [projectsData, setProjectsData] = useState(null)

    useEffect(() => {
        setProjectsData(projects)
    }, [])
    
    return (
        <section className={style.projects} data-aos="fade-up" ref={projectsRef}>
            <header>
                <h2 className={style.title}>Some of my projects</h2>
                <span className={style.aqua_span}>03. Projects</span>
            </header>

            <div className={style.row}>
                {
                    projectsData?.map((val)=>{
                        return <div key={val.id} className={style.card_container}>
                            <Card 
                                title={val.title}
                                description={val.description}
                                technologies={val.technologies}
                                github_link={val.github_link}
                                website_link={val.website_link}
                            />
                        </div>
                    })
                }
            </div>
        </section>
    );
}