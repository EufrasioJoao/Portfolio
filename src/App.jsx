import React, { useEffect, useState } from "react";
import { Homepage } from "./page/Homepage";
import { InitialAnimation } from "./components/initial_animation/Index";
import {Context_Container} from "./Context/AppContext.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";


function App() {
    const [endAnimation, setEndAnimation] = useState(false)

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    
    // close initial animation
    setTimeout(() => {
        setEndAnimation(true);
    }, 5000);


    return (
        <div className='app'>
            <Context_Container>
                {
                    endAnimation ? <Homepage /> : <InitialAnimation />
                }
            </Context_Container>
        </div>
    );
}

export default App;
