import { useState } from "react";
import './ContactTab.css' ;
import { toast } from "react-hot-toast";

const ContactTab = () => {
    const [formData , setFormData] = useState({username : "" , email : "", number : "", message : ""});

    const changeHandler = (e) =>{
        setFormData(prevData=> {
            const {name , value} = e.target ;
            return{...prevData, [name] : value }});
    }

    const submitHandler = (e) =>{

        e.preventDefault();
        
        if(formData.message.length > 20){
            // console.log("form data is here");
            console.log(formData);
            setFormData({username : "" , email : "", number : "" , message : ""});
            toast.success("Your Msg has been Sent");
        }
        else{
            toast.error("Your Msg length is too short");
        }

        }
    

    return(
        <section id = "Contact" className="w-full max-w-[75%] mx-auto mt-28 mb-8">

            <p className="text-white text-center mb-12 text-3xl font-bold">Contact Me</p>

            <form className="text-white flex flex-col items-center gap-4" onSubmit={submitHandler}>

                <label className="w-full flex flex-col pc:max-w-[45%] tablet:max-w-[55%] mobile:max-w-[65%] gap-2 text-lg text-slate-50">Enter Your Name
                    <input className = "input" type = "text" placeholder = "Chandan Kumar" required minLength="5" name = "username" value = {formData.username} onChange={changeHandler}/>
                </label>
                <label className="w-full flex flex-col pc:max-w-[45%] tablet:max-w-[55%] mobile:max-w-[65%] gap-2 text-lg text-slate-50">Enter Your Email Address
                    <input className = "input" type = "email" placeholder = "chandan432@gmail.com" required name = "email" value = {formData.email} onChange={changeHandler}/>
                </label>
                <label className="w-full flex flex-col pc:max-w-[45%] tablet:max-w-[55%] mobile:max-w-[65%] gap-2 text-lg text-slate-50">Enter Your Phone Number
                    <input className = "input" type = "number" placeholder = "+91........" name = "number" value = {formData.number} onChange={changeHandler}/>
                </label>
                <label className="w-full flex flex-col pc:max-w-[45%] tablet:max-w-[55%] mobile:max-w-[65%] gap-2 text-lg text-slate-50">Enter Message
                <textarea className = "textarea min-h-32" placeholder="Describe your Query in More than 20 words " name = "message" value = {formData.message} onChange={changeHandler}></textarea>
                </label>
                
                <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-950 rounded-lg text-xl font-semibold mt-2" onSubmit={submitHandler}>Send Message</button>
            </form>
        </section>
    )
}

export default ContactTab ;



