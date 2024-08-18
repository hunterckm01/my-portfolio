import { useState , useRef} from "react";
import './ContactTab.css' ;
import { toast } from "react-hot-toast";

const ContactTab = () => {
    
    const [forms , setForms] = useState([]);
    const formVal = useRef(null);


    const resetForm = () => {
        const {username , email , number , message} = formVal.current ;
        username.value = "";
        email.value = "" ;
        number.value = "" ;
        message.value = "" ;
    }

    const submitHandler = (e) =>{

        e.preventDefault();
        const {username , email , number , message} = formVal.current ;

        if(username.value.length < 3){
            toast.error("Name length is shorter");
            return ;
        }
        else if(!email.value.includes("@")){
            toast.error("Enter Correct Mail");
            return ;
        }
        else if(number.value.length < 5){
            toast.error("Enter a Valid Number");
            return ;
        }
        else if(message.value.length < 10){
            toast.error("Your Message is Too Short");
            return ;
        }

        const userData = {
            name : username.value , 
            email : email.value , 
            number : number.value , 
            message : message.value
        }

        // RESSETING THE FORM IS NOT DONE
        resetForm();
        console.log(userData);

        setForms(prev=>[...prev , userData]);
        console.log(forms);
        
        toast.success("Your Message is Sent");
        }
    

    return(
        <section id = "Contact" className="w-full max-w-[75%] mx-auto  mobile:mt-8 tablet:mt-12 pc:mt-16 mb-8">

            <p className="text-white text-center mb-12 text-3xl font-bold">Contact Me</p>

            <form className="text-white flex flex-col items-center gap-4" ref = {formVal} onSubmit={submitHandler}>

                <label className="w-full flex flex-col pc:max-w-[45%] tablet:max-w-[55%] mobile:max-w-[65%] gap-2 text-lg text-slate-50">
                    Enter Your Name
                    <input className = "input" type = "text" placeholder = "Chandan Kumar"   name = "username" id = "username"/>
                </label>
                <label className="w-full flex flex-col pc:max-w-[45%] tablet:max-w-[55%] mobile:max-w-[65%] gap-2 text-lg text-slate-50">Enter Your Email Address
                    <input className = "input" type = "email" placeholder = "chandan432@gmail.com"  name = "email" id = "email"/>
                </label>
                <label className="w-full flex flex-col pc:max-w-[45%] tablet:max-w-[55%] mobile:max-w-[65%] gap-2 text-lg text-slate-50">Enter Your Phone Number
                    <input className = "input" type = "number" placeholder = "+91........" name = "number" id = "number"/>  
                </label>
                <label className="w-full flex flex-col pc:max-w-[45%] tablet:max-w-[55%] mobile:max-w-[65%] gap-2 text-lg text-slate-50">Enter Message
                <textarea className = "textarea min-h-32" placeholder="Describe your Query in More than 20 words " name = "message" id = "message"></textarea>
                </label>
                
                <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-950 rounded-lg text-xl font-semibold mt-2" onSubmit={submitHandler}>Send Message</button>

            </form>
        </section>
    )
}

export default ContactTab ;



