import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Template from "../pages/Template";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Template/>
    }
]);

export default router;
