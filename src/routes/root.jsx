// import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
// import NavigationMenu from '../components/Navigation'
import Header from '../components/Header'
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            
            <Header />


            <div>
                <Outlet />
            </div>
            
        
            <Footer />
            
        </>
    );
}