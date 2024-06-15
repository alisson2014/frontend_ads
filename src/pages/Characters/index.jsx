import { useState, useEffect, useCallback } from "react";
import Pagination from 'react-bootstrap/Pagination';
import { Card } from "../../components/Molecule/Card";
import { ListCharacters } from "./styles";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

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
    const [filter, setFilter] = useState("");

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

    const filterCharacters = () => setUrl(`${END_POINT}?name=${filter}`);

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
        <Container>
            <Row className="align-items-center mt-4">
                <Col xs={7}>
                Outros filtros...
                </Col>
                <Col xs={4}>                
                    <Form.Group>
                        <Form.Control 
                            type="search"
                            placeholder="Busque pelo nome do personagem"
                            onChange={e => setFilter(e.target.value)}
                            value={filter}
                            onKeyDown={e => {
                                if(e.key !== "Enter") return;
                                filterCharacters();
                            }}
                            onInput={e => {
                                if(e.target.value) return;
                                setUrl(END_POINT);
                            }}
                        />
                    </Form.Group>
                </Col>
                <Col xs={1}>
                    <Button 
                        title="Filtrar pelo nome do personagem"
                        onClick={filterCharacters}
                    >Buscar</Button>
                </Col>
            </Row>
            <ListCharacters>
                {characters.length > 0 && characters.map((character, index) => (
                    <Card.Root key={`${character?.id}-${index}`}>
                        <Card.Top>
                                <Card.Title>{character?.name}</Card.Title>
                                <Card.Info>
                                    <Card.Species>{character?.species}</Card.Species>
                                    -
                                    <Card.Status>{character?.status}</Card.Status>
                                </Card.Info>
                        </Card.Top>
                        <Card.Image title={character?.name} src={character?.image} />
                    </Card.Root>
                ))}
            </ListCharacters>
            <Pagination 
                size="lg"
                className="d-flex justify-content-center mt-4"
            >
                <Pagination.First 
                    onClick={goToFirstPage}
                    disabled={url === (FIRST_URL) || url === END_POINT}
                />
                <Pagination.Prev 
                    onClick={goToPrevPage}
                    disabled={!prevUrl}
                />

                <Pagination.Next 
                    onClick={goToNextPage}
                    disabled={!nextUrl}
                />
                <Pagination.Last 
                    onClick={goToLastPage}
                    disabled={url === END_POINT + "?page=" + pages}
                />
            </Pagination>
        </Container>
    );
}