import React, { useContext, useEffect } from "react";
import profileImg from '../assets/MyPhoto.jpg'
import { AppContext } from "../contextApi/AppContext";

const HomeTab = () => {
 
    const {str} = useContext(AppContext);

    return(
    <section className="w-full bg-slate-950 mt-8" id = "Home">
        <article className=" w-full tablet:max-w-[90%] pc:max-w-[75%] mx-auto flex mobile:flex-col tablet:flex-row justify-between items-center gap-12 pt-8 my-12">
            <div className=" text-white flex flex-col gap-4 justify-center">
                <p className="text-3xl font-semibold">Hi ! I'm <span className="font-bold text-3xl ml-2">Chandan Kumar</span></p>
                <p className="text-slate-100 font-semibold text-lg">I am a  <span className="role" ref = {str}> </span></p>
            </div>
            <img src = {profileImg} alt = "Profile Img" loading="lazy" className="grayscale w-[400px] hover:grayscale-0 hover:transition-all hover:duration-700" relative/>
            
        </article>
       
    </section>
    )
}

export default HomeTab ;