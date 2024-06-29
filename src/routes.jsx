import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import { Character, Characters, Login, NotFound, Template } from "./pages";
import { PrivateRoute } from "service";

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
                element: (
                    <PrivateRoute>
                        <Characters />
                    </PrivateRoute>
                )
            },
            {
                path: "/characters/:id",
                element: (
                    <PrivateRoute>
                        <Character />
                    </PrivateRoute>
                )
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