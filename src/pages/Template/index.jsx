import { Outlet } from "react-router-dom";
import Header from "../../components/Organism/Header";

export default function Template() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};