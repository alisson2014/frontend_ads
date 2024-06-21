import { Container as BsContainer, Image as BsImage } from "react-bootstrap";
import styled from "styled-components";

export const Image = styled(BsImage)`
    width: 380px;
    height: 380px;
`;

export const Container = styled(BsContainer)`
    display: flex;
    justify-content: space-around;

    @media (min-width: 240px) and (max-width: 640px) {
        flex-direction: column;
        gap: 16px;
    }
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    @media (min-width: 240px) and (max-width: 640px) {
        align-items: center;
        margin-bottom: 16px;
    }
`;