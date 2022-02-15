import Pagination from "../components/common/Pagination";
import Layout from "../components/layout";

export default function LandingPage(){
    return(
        <Layout>
        <section className="p-4">
            <Pagination/>
        </section>

        </Layout>
    )
}