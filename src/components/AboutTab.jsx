import AnchorLink from 'react-anchor-link-smooth-scroll';
import AboutImg from '../assets/AboutImg.jpg'

const AboutTab = () => {
    return(
    <section id = "About" className="w-full bg-slate-950 mt-16">
        <div className="py-16  text-white pc:max-w-[75%] mobile:max-w-[85%] table:max-w-[90%] mx-auto w-full">
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-3xl font-bold">About Me</h2>
                <div className='flex pc:flex-row mobile:flex-col justify-between gap-6 mt-12'>
                    <div className='flex justify-center'>
                    <img src = {AboutImg} className='max-h-[400px] rounded-md ml-4 grayscale aspect-square hover:grayscale-[25%] hover:transition-all hover:duration-500' loading='lazy'/>
                    </div>
                    <div className='pc:max-w-[60%] flex flex-col gap-4 mobile:mt-8 pc:mt-2'>
                        <p className="text-lg text-slate-50 font-semibold ">I am a Final Year Student of BCA having Knowledge of programming in HTML , CSS , JS and React. Also I have done little bit of DSA in Linear Data Structure and have fundamental knowledge of C/C++ .
                        </p>
                        <p className="text-slate-100">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto facilis, nulla aliquid magni amet voluptatibus est itaque quaerat quasi ratione aliquam accusantium aut ab possimus. Repudiandae ipsa non aut sapiente maiores nihil libero minima distinctio totam eaque, temporibus iusto sed, ex commodi laudantium, atque iure? Totam sequi ducimus autem, sit provident, hic molestiae fugiat quisquam quod doloremque animi vitae neque eveniet soluta saepe quasi accusantium! Id quasi dicta ex, quibusdam, qui dolor reprehenderit inventore corrupti harum ipsa quidem excepturi, fugit eligendi omnis incidunt nisi pariatur labore? Dignissimos vero iure culpa vel, omnis doloremque, eveniet reprehenderit atque velit et, deleniti voluptatibus.</p>

                        <div className='mt-6 gap-4 flex justify-between'>
                        <a href = "$"><button className='hover:transition-all hover:duration-500 py-2 px-4 text-slate-950 bg-slate-100 rounded-lg hover:bg-slate-200 font-semibold '>Hire Me</button></a>
                        <AnchorLink href = "#Contact"><button className='hover:transition-all hover:duration-500 py-2 px-4 text-slate-950 bg-slate-100 rounded-lg hover:bg-slate-200 font-semibold '>Contact Me</button>
                        </AnchorLink>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </section>
    )
}

export default AboutTab ;