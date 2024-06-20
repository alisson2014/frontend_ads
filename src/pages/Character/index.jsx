import { useCallback, useEffect, useState } from "react";
import { Container, Row, Image, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { SubTitle, Title } from "../../styles/utils";
import { StyledImage } from "./style";

const { REACT_APP_API_BASE_ENDPOINT } = process.env;

export default function Character() {
    const { id } = useParams();
    const END_POINT = `${REACT_APP_API_BASE_ENDPOINT}character/${id}`;
    const [character, setCharacter] = useState({});

    const getCharacter = useCallback(async () => {
        const response = await fetch(END_POINT);
        const data = await response.json();
        setCharacter(data);
    }, []);

    useEffect(() => {
        getCharacter();
    }, [getCharacter]);

    return (
        <Container className="mt-4">
            <Row>
                <Col xs={4}>
                    <Title>{character?.name}</Title>
                    <StyledImage 
                        rounded
                        fluid 
                        title={character?.name} 
                        alt={character?.name} 
                        src={character?.image} 
                        width={500}
                    />
                </Col>
                <Col xs={8}>
                    <SubTitle>Information</SubTitle>
                    <div>Status: {character?.status}</div>
                    <div>Species: {character?.species}</div>
                    <div>Type: {character?.type === "" ? "Not identified" : character.type}</div>
                    <div>Origin: {character?.origin?.name}</div>
                    <div>Location: {character?.location?.name}</div>
                </Col>
            </Row>
        </Container>
    );
};