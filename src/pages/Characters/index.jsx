import { useState, useEffect, useCallback } from "react";
import { Card } from "components/Molecules";
import { ListCharacters } from "./styles";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { InformativeTitle, SubTitle } from "styles/utils";
import { CharactersService } from "service";

const END_POINT = `${process.env.REACT_APP_API_BASE_ENDPOINT}character`;
const FIRST_URL = `${END_POINT}?page=1`;
const LAST_URL = totalPages => `${END_POINT}?page=${totalPages}`;

export default function Characters() {
    const navigate = useNavigate();

    const [characters, setCharacters] = useState([]);
    const [prevUrl, setPrevUrl] = useState(null);
    const [nextUrl, setNextUrl] = useState(null);
    const [firstUrl, setFirstUrl] = useState(null);
    const [lastUrl, setLastUrl] = useState(null);
    const [url, setUrl] = useState(END_POINT);
    const [count, setCount] = useState("");
    const [pages, setPages] = useState("");
    const [actualPage, setActualPage] = useState(1)
    const [filter, setFilter] = useState("");
    const [loading, setLoading] = useState(true);

    const acitveLoading = () => setLoading(true);
    const disableLoading = () => setLoading(false);

    const goToFirstPage = useCallback(() => {
        setActualPage(1);
        acitveLoading();
        setUrl(firstUrl);
    }, [firstUrl]);

    const goToPrevPage = useCallback(() => {
        if(!prevUrl) return;

        setActualPage(prev => prev - 1);
        acitveLoading();
        setUrl(prevUrl);
    }, [prevUrl]);

    const goToNextPage = useCallback(() => {
        if(!nextUrl) return;

        setActualPage(prev => prev + 1);
        acitveLoading();
        setUrl(nextUrl);
    }, [nextUrl]);

    const goToLastPage = useCallback(() => {
        if(!pages) return;

        setActualPage(pages);
        acitveLoading();
        setUrl(lastUrl);
    }, [pages, lastUrl]);

    const filterCharacters = (filteredValue = null) => {
        setActualPage(1);
        acitveLoading();

        if(filteredValue) {
            setUrl(`${END_POINT}?name=${filteredValue}`);
        } else {
            setUrl(END_POINT);
        }
    };

    const handleMoreInformation = id => {
        if(!id) return;

        navigate(`/characters/${id}`);
    };

    const handleChangeFirstAndLastUrls = (first, last, totalPages) => {
        if(!last) {
            setLastUrl(null);
        } else {
            if(filter) {
                setLastUrl(LAST_URL(totalPages) + "&name=" + filter);
            } else {
                setLastUrl(LAST_URL(totalPages));
            }
        }

        if(!first) {
            setFirstUrl(null);
        } else {
            if(filter) {
                setFirstUrl(`${FIRST_URL}&name=${filter}`);
            } else {
                setFirstUrl(FIRST_URL);
            }
        }
    };

    const getAllCharacters = useCallback(async () => {
        if(!url) return;

        try {
            const { data } = await CharactersService.getAll(url);

            setCount(data.info.count);
            setPages(data.info.pages);
            setPrevUrl(data.info.prev);
            setNextUrl(data.info.next);
            setCharacters(data.results);
            handleChangeFirstAndLastUrls(data.info.prev, data.info.next, data.info.pages);
        } catch (error) {
            console.error("Erro ao buscar dados: ", error);
        } finally {
            setTimeout(disableLoading, 1000);
        }
    }, [url]);

    useEffect(() => {
        getAllCharacters();
    }, [url, getAllCharacters]);

    if(loading) {
        return (
            <Container>
                <Row className="align-items-center justify-content-center mt-4">
                    <Spinner animation="grow" variant="primary" />
                </Row>
            </Container>
        );
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
                                filterCharacters(filter);
                            }}
                            onInput={e => {
                                if(e.target.value) return;
                                filterCharacters();
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
                className="
                    d-flex 
                    flex-column 
                    align-items-center 
                    justify-content-center 
                    mt-1 
                    mb-3"
                style={{ gap: 8 }}
            >
                <div className="d-flex justify-content-between align-items-center" style={{ gap: 64 }}>
                    <SubTitle>Page {actualPage} of {pages}</SubTitle>
                    <InformativeTitle>{count} characters</InformativeTitle>
                </div>
                <div className="d-flex" style={{ gap: 16 }}>
                    <Button
                        variant="outline-light" 
                        title="Return to first page"
                        onClick={goToFirstPage}
                        disabled={!firstUrl}
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
                        disabled={!lastUrl}
                    >
                        Last
                    </Button>
                </div>
            </div>
        </Container>
    );
}