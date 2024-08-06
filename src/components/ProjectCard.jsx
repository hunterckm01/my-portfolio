

const ProjectCard = ({name , description , link}) => {
    const desc = description.length > 300 ? (description.split(" ").slice(0,45).join(" ")+"...") : (description);
    return(
        <article className="flex flex-col justify-between py-6 gap-6 pb-6 px-4 rounded-xl hover:-translate-y-2.5 hover:transition-all hover:duration-500  hover:bg-gray-900 cursor-pointer border-2 border-slate-300 hover:border-slate-200">
            <div className="text-2xl font-semibold text-slate-50">{name}</div>
            <div className="text-md text-slate-200">{desc}</div>
            <a href = {link} target = "_blank"><button className=" px-2 py-2 text-left font-semibold bg-slate-100 text-slate-950 rounded-lg hover:text-black">Click Here</button></a>
        </article> 
    )
}

export default ProjectCard ;