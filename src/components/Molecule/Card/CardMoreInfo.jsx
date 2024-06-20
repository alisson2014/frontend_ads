import { Button, Row } from "react-bootstrap";
import styled from "styled-components";

const StyledRow = styled(Row)`
    padding: 0 1rem;

    @media (min-width: 240px) and (max-width: 640px) {
        padding: 0 0.75rem;

        > button {
            font-size: 1rem;
        }
    }
`;

export default function CardMoreInfo({ children, character, handleClick, disabled = false }) {
    return (
        <StyledRow>
            <Button
                onClick={handleClick}
                disabled={disabled}
                title={`Get more character information ${character}`}
                variant="outline-info"
            >
                {children}
            </Button>
        </StyledRow>
    );
};