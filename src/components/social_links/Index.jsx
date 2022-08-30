import React from "react";
import style from "./style.module.css";
import {
    GithubLogo,
    InstagramLogo,
    TwitterLogo,
    LinkedinLogo,
    Envelope,
} from "phosphor-react";

export function SocialLinks() {
    return (
        <aside data-aos="fade-right">
            <a href="https://github.com/eufrasiojoao" target="_blank">
                <GithubLogo
                    className={style.icon}
                    color="#c4eeeed0"
                    size={28}
                />
            </a>
            <a href="https://linkedin.com/in/frasio-joao-04a118248" target="_blank">
                <LinkedinLogo
                    className={style.icon}
                    color="#c4eeeed0"
                    size={28}
                />
            </a>
            
            <a href="mailto:eufrasiojoao00@gmail.com" target="_blank">
                <Envelope className={style.icon} color="#c4eeeed0" size={28} />
            </a>
            <a href="https://instagram.com/ainsley_john_" target="_blank">
                <InstagramLogo
                    className={style.icon}
                    color="#c4eeeed0"
                    size={28}
                />
            </a>
            <a href="https://twitter.com/ainsley_john_" target="_blank">
                <TwitterLogo
                    className={style.icon}
                    color="#c4eeeed0"
                    size={28}
                />
            </a>
            <div className={style.line}></div>
        </aside>
    );
}
