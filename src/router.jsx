import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Inicio from "./views/Inicio";

const router = createBrowserRouter([
    
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Inicio/>
            }
        ]
    }


])

export default router