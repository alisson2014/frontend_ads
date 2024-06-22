import { Outlet } from "react-router-dom";
import { Header } from "components/Organism";

export default function Template() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};