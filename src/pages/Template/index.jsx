import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Organism/Header";
import { Button } from "react-bootstrap";

export default function Template() {
    const navigate = useNavigate();
    const location = useLocation();

    const canGoBack = window.history.length > 1;

    return (
        <>
            <Header />
            {canGoBack && (
                <Button
                    onClick={() => navigate(-1)}
                    title="Return to the previous page"
                    variant="secondary"
                >
                    Back
                </Button>
            )}
            <Outlet />
        </>
    );
};