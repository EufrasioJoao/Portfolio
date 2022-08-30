import React, { createContext, useRef} from "react";

export const AppContext = createContext(null);

export const Context_Container = ({ children }) => {
    // Refs
    const aboutRef = useRef(null)
    const experienceRef = useRef(null)
    const contactRef = useRef(null)
    const projectsRef = useRef(null)

    const scrollToSection = (elementRef)=>{
        window.scrollTo({
            top: elementRef.current.offsetTop-100,
        })
    }

    var contextValues = {
        aboutRef,
        experienceRef,
        contactRef,
        projectsRef,
        scrollToSection
    };

    return (
        <AppContext.Provider value={contextValues}>
            {children}
        </AppContext.Provider>
    );
};

