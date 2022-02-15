import { useState } from "react";
import { useForm } from "../../components/hooks/useForm";
import Layout from "../../components/layout";

export default function Register(){
   const [numPhone,setNumPhone]=useState(0);
   const [step,setStep]=useState(0);
    
    return(
    <Layout>
        <section className="p-4  flex flex-col items-center ">
            {step===0?
            <PhoneCode setStep={setStep} setNumPhone={setNumPhone} />
        :step===1?
        <CodeVerification phone={numPhone}/>:
        <FormRegister/>    
        }
        </section>
    </Layout>
    )
}
function PhoneCode({setNumPhone,setStep}){
    const {handleChange,form}=useForm({phone:""});
    const sendPhone=(e)=>{
        e.preventDefault();
        setNumPhone(form.phone);
        setStep(1);
    }
    return(
        <>
         <div className="bg-black text-white py-8 px-4 flex justify-center my-16">
                <p className="text-3xl">Senergy</p>
            </div>
            <form onSubmit={sendPhone} className="flex flex-col mb-16" >
                <h1 className="text-2xl">Únete a Senergy</h1>
                <label className="text-sm" htmlFor="phone">Ingrese su número de teléfono </label>
                <article className="flex relative group">
                    <span className="mr-4" >
                        <p>+51</p>
                    </span>
                    <input onChange={handleChange} value={form.phone} className=" outline-none  " name="phone" type="number" />
                    <div className="absolute bottom-0 w-full h-px bg-transparent group-hover:bg-black" ></div>
                </article>
                <button className="bg-black text-white py-2 px-4 mt-4" type="submit" >Siguiente</button>
            </form>
        </>
    )
}
function CodeVerification({phone}){
    const [code,setCode]=useState("");
    const handleChange=(e)=>{
        const {value,name}=e.target;
        if(value.length!==5)
        setCode(value);

    }
   
    return(
        <>
            <div className="bg-black text-white py-8 px-4 flex justify-center my-16">
                <p className="text-3xl">Senergy</p>
            </div>
            <form className="flex flex-col mb-16" >
                <label className="text-sm" htmlFor="codePhone">Introduce el código de 4 dígitos que se ha enviado al número +51 {phone} </label>
                <input value={code} onChange={handleChange}  placeholder="0000" className=" outline-none focus:border-b-2 my-4 transition duration-500 py-2 focus:border-black " name="codePhone" type="number" />            
                <button className="bg-black text-white py-2 px-4 mt-4" type="submit" >Siguiente</button>
            </form>
            <button>
                Reenviar el código
            </button>
        </>
    )
}
function FormRegister(){
    return(
        <></>
    )
}