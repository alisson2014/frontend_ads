import { Card } from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled(Card)`
    width: 560px;
    height: 420px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px #00000040;
    display: flex;
    overflow: hidden;
`;

export default function CardRoot({ children }) {
    return <StyledCard>{children}</StyledCard>;
};