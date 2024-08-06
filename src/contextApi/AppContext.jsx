import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";

export const AppContext = createContext() ;

// Mistake 1 can be here
export const AppContextProvider = ({children}) => {
    const navigate = useNavigate();

    const str = useRef("");

    useEffect(()=>{
        const typed = new Typed(str.current, {
            strings: [
                "Frontend Developer",
                "Web Developer", 
                "Backend Learner",
                "A Coder"
            ],
            loop : true,
            typeSpeed : 100 , 
            backSpeed : 60, 
            backDelay: 1300,     
        });

        return () => {
            typed.destroy();
        };
    },[]);
    
    const value = {
        navigate, str,
        // navigate = useNavigate(),
    };

    // Misstake 2 can be here
    return <AppContext.Provider value = {value}>
        {children}
    </AppContext.Provider>
}