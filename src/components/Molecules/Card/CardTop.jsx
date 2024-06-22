import { Container } from "react-bootstrap";
import styled from "styled-components";

const StyledCardTop = styled(Container)`
    flex: 3 1 0%;
    position: relative;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 240px) and (max-width: 640px) {
        flex: 2 1 0%;
    }
`;

export default function CardTop({ children }) {
    return <StyledCardTop>{children}</StyledCardTop>;
};