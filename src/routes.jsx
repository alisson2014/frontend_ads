import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
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
                element: <Navigate to="/characters" />
            },
            {
                path: "/characters",
                element: <Characters />
            },
            {
                path: "/characters/:id",
                element: <Character />
            },
            {
                path: "/login",
                element: <Login />
            },
        ]
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />
};