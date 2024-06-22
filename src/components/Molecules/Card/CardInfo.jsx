import { Row } from "react-bootstrap";
import styled from "styled-components"

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    @media (min-width: 240px) and (max-width: 640px) {
        font-size: 1rem;
    }
`;

export default function CardInfo({ children }) {
    return (
        <Row>
            <InfoContainer>{children}</InfoContainer>
        </Row>
    );
};