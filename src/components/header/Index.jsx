import React, { useState, useContext } from "react";
import style from "./style.module.css";
import { Cube, List, X } from "phosphor-react";
import { AppContext } from "../../Context/AppContext.jsx";

export function Header() {
    const [isModalVisible, setIsModalVisble] = useState(false);
    const { 
        experienceRef, 
        contactRef,
        aboutRef,
        projectsRef,
        scrollToSection,
    } = useContext(AppContext);

    return (
        <nav className={style.modal_open} data-aos="fade-down">
            
            <div className={style.nav_container}>
                <a href="#" className={style.logo}>
                    <Cube
                        style={{ marginRight: "10px" }}
                        color="teal"
                        weight="duotone"
                        size={32}
                    />
                    Eufrasio
                </a>

                <ul
                    className={isModalVisible ? style.ul_visble : style.ul_invisble}
                >
                    <li>
                        <a href="#" onClick={()=>scrollToSection(aboutRef)}>
                            <span>01.</span> About
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={()=>scrollToSection(experienceRef)}>
                            <span>02.</span> Experience
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={()=>scrollToSection(projectsRef)}>
                            <span>03.</span> Projects
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={()=>scrollToSection(contactRef)}>
                            <span>04.</span> Contact
                        </a>
                    </li>
                    <li>
                        <a href="/resume.pdf" className={style.resume} target="_blank">
                            Resume
                        </a>
                    </li>
                </ul>
                {isModalVisible ? (
                    <X
                        className={style.hamburger_icon}
                        color="rgb(23, 209, 178)"
                        size={30}
                        onClick={() => {
                            setIsModalVisble(!isModalVisible);
                        }}
                    />
                ) : (
                    <List
                        className={style.hamburger_icon}
                        color="rgb(23, 209, 178)"
                        size={30}
                        onClick={() => {
                            setIsModalVisble(!isModalVisible);
                        }}
                    />
                )}
            </div>
        </nav>
    );
}
