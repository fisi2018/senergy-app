import {useState} from "react";
export const useForm=(init)=>{
    const [form,setForm]=useState(init);
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setForm({
            ...form,
            [name]:value
        })
    }
    return{
        handleChange,
        form,
        setForm
    }
}