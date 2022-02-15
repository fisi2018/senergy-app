import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}){
    return(
        <section className="flex flex-col min-h-screen" >
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </section>
    )
}