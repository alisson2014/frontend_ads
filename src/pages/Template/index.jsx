import { Outlet } from "react-router-dom";
import { Header } from "components/Organism";
import { PrivateRoute } from "service";

export default function Template() {
    return (
        <PrivateRoute>
            <Header />
            <Outlet />
        </PrivateRoute>
    );
};