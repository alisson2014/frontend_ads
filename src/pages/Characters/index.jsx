import { useState, useEffect, useCallback } from "react";

const { REACT_APP_API_BASE_ENDPOINT } = process.env;
const END_POINT = REACT_APP_API_BASE_ENDPOINT + "character";
const FIRST_URL = END_POINT + "?page=1";

export default function Characters() {
    const [characters, setCharacters] = useState([]);
    const [prevUrl, setPrevUrl] = useState(null);
    const [nextUrl, setNextUrl] = useState(null);
    const [url, setUrl] = useState(END_POINT);
    const [count, setCount] = useState("");
    const [pages, setPages] = useState("");

    const goToFirstPage = () => setUrl(FIRST_URL);

    const goToPrevPage = useCallback(() => {
        if(!prevUrl) return;
        setUrl(prevUrl);
    }, [prevUrl]);

    const goToNextPage = useCallback(() => {
        if(!nextUrl) return;
        setUrl(nextUrl);
    }, [nextUrl]);

    const goToLastPage = useCallback(() => {
        if(!pages) return;
        setUrl(END_POINT + "?page=" + pages);
    }, [pages]);

    const getAllCharacters = useCallback(async () => {
        if(!url) return;

        try {
            const response = await fetch(url);
            const data = await response.json();
            setCount(data.info.count);
            setPages(data.info.pages);
            setPrevUrl(data.info.prev);
            setNextUrl(data.info.next);
            setCharacters(data.results);
        } catch (error) {
            console.error("Erro ao buscar dados: ", error);
        }
    }, [url]);

    useEffect(() => {
        getAllCharacters();
    }, [url, getAllCharacters]);

    return (
        <>
            <h1>Página inicial</h1>
            <h3>Total personagens: {count}</h3>
            <h3>Total páginas: {pages}</h3>
            <ul>
                {characters.length > 0 && characters.map((character, index) => (
                    <li key={`${character?.id}-${index}`}>{character?.name} - {character?.species}</li>
                ))}
            </ul>
            <div>
                <button 
                    title="Voltar para primeira página"
                    onClick={goToFirstPage}
                    disabled={url === (FIRST_URL) || url === END_POINT}
                    style={{ cursor: "pointer"}}
                >
                    Primeiro
                </button>
                <button 
                    title="Voltar para página anterior"
                    onClick={goToPrevPage}
                    disabled={!prevUrl}
                    style={{ cursor: prevUrl ? "pointer" : "not-allowed" }}
                >
                    Voltar
                </button>
                <button 
                    title="Ir para a próxima página"
                    onClick={goToNextPage}
                    disabled={!nextUrl}
                    style={{ cursor: nextUrl ? "pointer" : "not-allowed" }}
                >
                    Próximo
                </button>
                <button 
                    title="Ir para ultima página"
                    onClick={goToLastPage}
                    disabled={url === END_POINT + "?page=" + pages}
                    style={{ cursor: "pointer"}}
                >
                    Ultima
                </button>
            </div>
        </>
    );
}