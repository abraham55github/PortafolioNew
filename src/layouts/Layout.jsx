
import { Outlet } from "react-router-dom"
import NavBar from "../components/Navbar/NavBar"
import Footer from "../components/Footer"


export default function Layout() {
    return (
        <>
            <NavBar />


            <Outlet />

            <Footer />

        </>
    )
}
