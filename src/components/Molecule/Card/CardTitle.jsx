import styled from "styled-components";

const Title = styled.h4`
    font-size: 1.5em;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        color: #3c9f8e;
    }
`;

export default function CardTitle({ children }) {
    return <Title>{children}</Title>;
};