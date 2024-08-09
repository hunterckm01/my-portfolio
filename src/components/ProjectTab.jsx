import projectData from "../ProjectData.js"
import ProjectCard from "./ProjectCard.jsx"

const ProjectTab = () => {
    return(
    <>
        <section className="bg-slate-950 text-white mobile:py-8 tablet:py-12 pc:py-16 w-full mt-28" id = "Project">
            <div className="pc:max-w-[75%] tablet:max-w-[90%] mobile:max-w-[90%] mx-auto flex flex-col gap-10">
                <div className="flex pc:justify-between mobile:justify-around">
                    <h1 className="text-3xl font-bold pc:ml-[40%]">My Projects</h1>
                    <a href = "https://github.com/hunterckm01" target="_blank"><button className="mr-2 text-xl px-2 py-2 bg-slate-100  text-slate-950 hover:bg-slate-200 rounded-lg hover:text-slate-950 transition-all duration-200 font-semibold ">View All</button></a>
                </div>
                <div className="gap-10 grid pc:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
                    {projectData.map((data)=>(<ProjectCard {...data} key = {data.id}/>))}
                </div>
            </div>
        </section>
        
    </>)
}

export default ProjectTab ;