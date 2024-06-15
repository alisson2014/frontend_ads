import styled from "styled-components"

const InfoContainer = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
`;

export default function CardInfo({ children }) {
    return <InfoContainer>{children}</InfoContainer>
};