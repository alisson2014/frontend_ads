import { useState, useEffect, useCallback } from "react";
import { Card } from "components/Molecules";
import { ListCharacters } from "./styles";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const { REACT_APP_API_BASE_ENDPOINT } = process.env;
const END_POINT = REACT_APP_API_BASE_ENDPOINT + "character";
const FIRST_URL = END_POINT + "?page=1";

export default function Characters() {
    const navigate = useNavigate();
    console.log(REACT_APP_API_BASE_ENDPOINT);

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

    const handleMoreInformation = id => {
        if(!id) return;

        navigate(`/characters/${id}`);
    };

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

    if(characters.length === 0) {
        return <Spinner />;
    }

    return (
        <Container>
            <Row className="align-items-center mt-4">
                <Col xs={8}>
                Outros filtros...
                </Col>
                <Col xs={4}>                
                    <Form.Group>
                        <Form.Control 
                            type="search"
                            placeholder="Search by character name"
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
            </Row>
            <ListCharacters>
                {characters.length > 0 && characters.map((character, index) => (
                    <Card.Root key={`${character?.id}-${index}`}>
                        <Card.Top>
                                <div>
                                    <Card.Title>{character?.name}</Card.Title>
                                    <Card.Info>                                        
                                        <Card.Species>{character?.species}</Card.Species>
                                        -
                                        <Card.Status>{character?.status}</Card.Status>
                                    </Card.Info>
                                </div>
                                <Card.MoreInfoButton 
                                    character={character?.name}
                                    handleClick={() => {
                                        handleMoreInformation(character?.id);
                                    }}
                                >
                                    More information
                                </Card.MoreInfoButton>
                        </Card.Top>
                        <Card.Image title={character?.name} src={character?.image} />
                    </Card.Root>
                ))}
            </ListCharacters>
            <div 
                className="d-flex justify-content-center mt-1 mb-3"
                style={{ gap: 8 }} 
            >
                <Button
                    variant="outline-light" 
                    title="Return to first page"
                    onClick={goToFirstPage}
                    disabled={url === (FIRST_URL) || url === END_POINT}
                >
                    First
                </Button> 
                <Button 
                    variant="outline-light"
                    title="Return to previous page"
                    onClick={goToPrevPage}
                    disabled={!prevUrl}
                >
                    Previous
                </Button> 
                <Button
                    variant="outline-light"
                    title="Go to next page"
                    onClick={goToNextPage}
                    disabled={!nextUrl}
                >
                    Next
                </Button>
                <Button
                    variant="outline-light"
                    title="Go to last page"
                    onClick={goToLastPage}
                    disabled={url === END_POINT + "?page=" + pages}
                >
                    Last
                </Button>
            </div>

        </Container>
    );
}