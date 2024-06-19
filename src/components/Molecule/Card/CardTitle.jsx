import { Row } from "react-bootstrap";
import styled from "styled-components";

const Title = styled.h4`
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        color: #0dcaf0;
    }

    @media (min-width: 240px) and (max-width: 640px) {
        font-size: 1.5rem;
    }
`;

export default function CardTitle({ children }) {
    return (
        <Row>
            <Title>{children}</Title>   
        </Row>
    );
};