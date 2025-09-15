import Footer from "../universityPages/component/Footer";
import Header from "../universityPages/component/Header";

const publicRoutes = ({children}) => {
    return (
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}

export default publicRoutes;