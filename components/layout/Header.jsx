import Link from "next/link";
import {FiUser} from "react-icons/fi";
import {AiOutlineArrowRight,AiOutlineClose} from "react-icons/ai";
import {HiMenuAlt4} from "react-icons/hi";
import { useState } from "react";
export default function Header(){
    const [active,setActive]=useState({});
    return(
        <div className="relative">

        <header className="bg-black sticky p-5 flex justify-between z-40" >
            <h1 className="text-white text-lg font-semibold">Senergy</h1>
            <nav className="flex" >
              
                <span onClick={()=>setActive({iconToggle:true})} className="text-white flex text-lg transition-all duration-300 rounded-full p-2 hover:bg-gray-800 items-center cursor-pointer">
                    <FiUser/>
                </span>
              
                <Link href="/register">
                <a className=" mx-2 py-2 px-4 text-sm font-semibold transition-all duration-300 hover:opacity-90 bg-white rounded-2xl " >
                    Comenzar ya!
                </a>
                </Link>
                
                <button onClick={()=>active.iconToggle?setActive({iconToggle:false}):setActive({burgerToggle:false})} className="text-white p-2 text-lg transition-all duration-300 rounded-full hover:bg-gray-800">
                    {active.iconToggle || active.burgerToggle ?
                    <AiOutlineClose/>
                    :
                    <HiMenuAlt4/>
                    }
                </button>
            </nav>
        </header>
            <aside className={`absolute left-0 w-full z-30 bottom-0 transition-all duration-500 bg-white ${active.iconToggle?" translate-y-full":"translate-y-0"} `}>
                <ul className="divide-y" >
                    <li>
                        <Link href="/register/registerTecnico">
                        <a className="flex items-center py-12 px-4" >
                        <p className="text-3xl" >Regístrate como técnico</p>
                        <span className="flex items-center">
                            <AiOutlineArrowRight/>
                        </span>
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/register">
                        <a className="flex items-center py-12 px-4">
                        <p className="text-3xl">Regístrate como usuario</p>
                        <span className="flex items-center">
                            <AiOutlineArrowRight/>
                        </span>
                        </a>
                        </Link>
                    </li>
                </ul>
            </aside>
        </div>
    )
}