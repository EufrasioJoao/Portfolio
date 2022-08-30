import React, {useState} from "react";
import style from "./style.module.css";
import { GithubLogo, Folder, Link } from "phosphor-react";

export function Card({
    title, 
    description, 
    github_link, 
    website_link, 
    technologies
}) {

    return (
        <div className={style.card}>
            <div className={style.card_container}>
                <header>
                    <Folder color="rgb(23, 209, 178)" size={28}/>
                    <div>
                        <a href={github_link} target="_blank">
                            <GithubLogo className={style.card_icon} color="#7fb2cad0" size={28}/>
                        </a>
                        <a href={website_link} target="_blank">
                            <Link className={style.card_icon} color="#7fb2cad0" size={28}/>
                        </a>
                    </div>
                </header>

                <span  className={style.project_name}>
                    {title}
                </span>
                <span  className={style.project_description}>
                    {description}
                </span>

                <div  className={style.project_tecnologies}>
                    {
                        technologies?.map((value)=>{
                            return <span key={value}>{value} </span>
                        })
                    }
                </div>
            </div>
        </div>
    );
}
