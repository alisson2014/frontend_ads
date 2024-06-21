import styled from "styled-components";

export const ListLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    overflow-y: auto;
    max-height: 65vh;

    a {
        font-size: 1.2rem;
        color: blue;
    }
`;