import { useParams } from "react-router-dom";

export default function Character() {
    const { id } = useParams();

    return (
        <>
            <h2>Página sobre o personagem</h2>
            <span>Id: {id}</span>
        </>
    );
};