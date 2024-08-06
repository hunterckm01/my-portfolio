import React, { useContext } from "react";
// import { AppContext } from "../contextApi/AppContext";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { Route } from "react-router-dom";

const Navbar = () =>{
    return(
       <nav className="">
            <ul className="py-4 flex bg-slate-950 text-slate-300 mobile:-tracking-[0.01em] tablet:tracking-[0.2em] bg-transparent  justify-center gap-10 font-semibold w-full
             uppercase">  
                <li className="hover:text-white hover:transition-all hover:duration-300 transition-all duration-300"><AnchorLink href = "#Home" className="scroll-smooth">Home</AnchorLink></li>
                <li className="hover:text-white hover:transition-all hover:duration-300 transition-all duration-300"><AnchorLink href = "#Project" className="scroll-smooth">Projects</AnchorLink></li>
                <li className="hover:text-white hover:transition-all hover:duration-300 transition-all duration-300"><AnchorLink href = "#About" className="scroll-smooth">About</AnchorLink></li>
                <li className="hover:text-white hover:transition-all hover:duration-300 transition-all duration-300"><AnchorLink href = "#Contact" className="scroll-smooth">Contact</AnchorLink></li>
            </ul>
       </nav>   
   )
}

export default Navbar ;