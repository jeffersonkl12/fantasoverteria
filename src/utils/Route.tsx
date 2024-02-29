import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Template from "../pages/Template";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Template/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
]);

export default router;
