import styled from "styled-components";

const StyledCardTop = styled.div`
    flex: 3 1 0%;
    position: relative;
    padding: 0.75rem;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
`;

export default function CardTop({ children }) {
    return <StyledCardTop>{children}</StyledCardTop>;
};