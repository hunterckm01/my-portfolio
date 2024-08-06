import { SiInstagram } from "react-icons/si";
import { LuTwitter } from "react-icons/lu";
import { BsLinkedin } from "react-icons/bs";    
import { FaGithub } from "react-icons/fa6";

const FooterTab = () => {
    return(
        <section className="text-slate-100 w-full mt-24 py-4">
            <div className="max-w-[75%] mx-auto flex justify-center items-center gap-8">
                <a href = "https://www.instagram.com/_hunter_ckm/?hl=en" target = "_blank" ><SiInstagram className="pc:h-10 pc:w-10 tablet:h-8 tablet:w-8 mobile:h-6 mobile:w-6"/></a>
                <a href = "https://www.linkedin.com/in/chandan-kumar-mahto" target = "_blank"><BsLinkedin className="pc:h-10 pc:w-10 tablet:h-8 tablet:w-8 mobile:h-6 mobile:w-6"/></a>
                <a href = "https://github.com/hunterckm01" target = "_blank"><FaGithub className="pc:h-10 pc:w-10 tablet:h-8 tablet:w-8 mobile:h-6 mobile:w-6" /></a>
                <a href = "#"><LuTwitter className="pc:h-10 pc:w-10 tablet:h-8 tablet:w-8 mobile:h-6 mobile:w-6"/></a>
            </div>
        </section>
    )
}

export default FooterTab ;