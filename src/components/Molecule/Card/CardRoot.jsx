import { Card } from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled(Card)`
    width: 600px;
    height: 220px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    background: rgb(60, 62, 68);
    border-radius: 0.5rem;
    margin: 0.75rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px;
`;

export default function CardRoot({ children }) {
    return <StyledCard>{children}</StyledCard>;
};