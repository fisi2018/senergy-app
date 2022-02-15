import Layout from "../../components/layout";

export default function RegisterTecnico(){
    return(
        <Layout>
            <section className="min-h-screen" >
                <div className="bg-black py-8 px-4 text-white" >
                    <p className="text-4xl font-semibold">Trabaja dando soporte técnico</p>
                    <p className="my-4">Genera ganancias brindando soporte técnico a diferentes empresas cercanas a ti que lo soliciten.</p>
                </div>
                <form className="flex flex-col p-4">
                    <p className="text-2xl font-semibold" >Regístrate ahora</p>
                    <input className="p-2 border-b-2 focus:border-gray-700 transition-all duration-500 my-2 border-gray-300 outline-none" placeholder="Nombre" type="text" />
                    <input className="p-2 border-b-2 focus:border-gray-700 transition-all duration-500 my-2 border-gray-300 outline-none" placeholder="Apellido" type="text" />                    
                    <input className="p-2 border-b-2 focus:border-gray-700 transition-all duration-500 my-2 border-gray-300 outline-none" placeholder="Correo electrónico" type="email" />
                    <input className="p-2 border-b-2 focus:border-gray-700 transition-all duration-500 my-2 border-gray-300 outline-none" placeholder="Contraseña" type="password" />
                    <input className="p-2 border-b-2 focus:border-gray-700 transition-all duration-500 my-2 border-gray-300 outline-none" placeholder="Teléfono" type="number" />
                    <button className="py-2 px-4 bg-black text-white mt-4" >Siguiente</button>
                </form>              
            </section>
        </Layout>
    )
}