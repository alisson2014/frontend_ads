import { Button, Modal } from 'react-bootstrap';
import { ListLinks } from './style';

export default function ModalEpisodes({ show, handleClose, characterName, episodes }) {
    if(!episodes) {
        return null;
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title style={{ color: "#252525" }}>All episodes of {characterName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListLinks>
                    {episodes.map((epi, index) => (
                        <a class="link-opacity-100" target='_blank' href={epi}>{epi}</a>
                    ))}
                </ListLinks>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};