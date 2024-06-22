import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Character, Characters, Login, NotFound, Template } from "./pages";

const router = createBrowserRouter([
    {
        path: "*",
        element: <NotFound />
    },
    {
        path: "/",
        element: <Template />,
        children: [
            {
                path: "/",
                element: <Characters />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/characters",
                element: <Characters />
            },
            {
                path: "/characters/:id",
                element: <Character />
            }
        ]
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />
};