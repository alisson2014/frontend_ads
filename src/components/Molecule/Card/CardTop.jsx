import styled from "styled-components";

const StyledCardTop = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    padding: 16px 10px;
`;

export default function CardTop({ children }) {
    return <StyledCardTop>{children}</StyledCardTop>;
};