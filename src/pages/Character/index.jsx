import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SubTitle, Title } from "styles/utils";
import * as Styled from "./style";
import { Button, ListGroup } from "react-bootstrap";
import { ModalEpisodes } from "components/Organism";
import axios from "axios";

const { REACT_APP_API_BASE_ENDPOINT } = process.env;

export default function Character() {
    const { id } = useParams();
    const navigate = useNavigate();

    const END_POINT = `${REACT_APP_API_BASE_ENDPOINT}character/${id}`;
    const [character, setCharacter] = useState({});
    const [show, setShow] = useState(false);

    const handleCloseModal = () => setShow(false);

    const getCharacter = useCallback(async () => {
        const data = await axios.get(END_POINT);
        setCharacter(data.data);
    }, []);

    useEffect(() => {
        getCharacter();
    }, [getCharacter]);

    return (
        <Styled.Container className="mt-4">
            <Styled.Profile>
                <Title>{character?.name}</Title>
                <Styled.Image 
                    rounded
                    fluid 
                    title={character?.name} 
                    alt={character?.name} 
                    src={character?.image} 
                    width={500}
                />
            </Styled.Profile>
            <Styled.Information>
                <SubTitle>Information</SubTitle>

                <ListGroup>
                    <ListGroup.Item action>Status: {character?.status}</ListGroup.Item>
                    <ListGroup.Item action>Species: {character?.species}</ListGroup.Item>
                    <ListGroup.Item action>Gender: {character?.gender}</ListGroup.Item>
                    <ListGroup.Item action>Type: {character?.type === "" ? "Not identified" : character.type}</ListGroup.Item>
                    <ListGroup.Item action>Origin: {character?.origin?.name}</ListGroup.Item>
                    <ListGroup.Item action>Location: {character?.location?.name}</ListGroup.Item>
                    <ListGroup.Item>
                        <Button
                            title="List all episodes in which this character appeared"
                            onClick={() => setShow(true)}
                            variant="info"
                        >
                            List episodes
                        </Button>
                        <ModalEpisodes 
                            show={show} 
                            handleClose={handleCloseModal} 
                            episodes={character?.episode}
                            characterName={character?.name}
                        />
                    </ListGroup.Item>
                </ListGroup>
            </Styled.Information>

        </Styled.Container>
    );
};