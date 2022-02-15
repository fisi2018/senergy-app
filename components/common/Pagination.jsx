import Link from "next/link";
import { useState } from "react";
import {BiSupport} from "react-icons/bi";
import {MdHomeRepairService} from "react-icons/md";
export default function Pagination(){
    const[translate,setTranslate]=useState("translate-x-0");
    return(
        <div>
            <nav className="flex relative ">
                <article onClick={()=>setTranslate("translate-x-0")} className="flex flex-col items-center w-32 py-4 cursor-pointer">
                    <span className="flex items-center text-lg">
                        <MdHomeRepairService/>
                    </span>
                    <h2 className="text-center text-sm">Ofrece servicios técnicos</h2>
                </article>
                <article onClick={()=>setTranslate("translate-x-full")} className="flex flex-col items-center w-32 py-4 cursor-pointer">
                    <span className="flex items-center text-lg">
                        <BiSupport/>
                    </span>
                    <h2 className="text-center text-sm">Solicita soporte técnico</h2>
                </article>
                <div className={`absolute ${translate} transition-all duration-500 l w-32 h-1 bottom-0 bg-black  `} ></div>
            </nav>
            <div className="py-4 px-2">
                {translate==="translate-x-0"?
                <Page01/>:
                <Page02/>    
            }
            </div>
        </div>
    )
}
function Page01(){
    return(
        <div>
            <h2 className="text-4xl font-semibold">Únete y da soporte a diferentes empresas</h2>
            <p className="my-8">Obtén ganancias brindando asistencia técnica a diferentes empresas en cualquier momento.</p>
            <Link href="/register/registerTecnico">
            <a className="bg-black font-semibold transition-opacity duration-500 hover:opacity-80  text-white py-3 px-6">
                Regístrate de inmediato
            </a>
            </Link>
        </div>
    )
}
function Page02(){
    return(
        <div>
            <h2 className="text-4xl font-semibold  ">
                Solicita apoyo técnico
            </h2>
            <p className=" my-8">Publica todos los datos del problema técnico que tengas y solicítalo a los diferentes técnicos en nuestra red.</p>
            <Link href="/register">
            <a className="bg-black text-white py-3 px-6 font-semibold">
                Comienza ahora
            </a>
            </Link>
        </div>
    )
}