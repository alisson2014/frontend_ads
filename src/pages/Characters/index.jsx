import { useState, useEffect, useCallback } from "react";

export default function Characters() {
    const { REACT_APP_API_BASE_ENDPOINT } = process.env;
    const [characters, setCharacters] = useState();

    const getAllCharacters = useCallback(async () => {
        await fetch(REACT_APP_API_BASE_ENDPOINT + "character")
                .then(response => response.json())
                .then(data => setCharacters(data.results));
    }, [characters]);

    useEffect(() => {
        getAllCharacters();
    }, []);

    return (
        <>
            <h1>Página inicial</h1>
            <p>Personagens de rick and morty</p>
        </>
    );
};