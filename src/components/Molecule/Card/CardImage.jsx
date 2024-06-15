import styled from "styled-components";

const Image = styled.img`
    padding: 0;
    box-sizing: inherit;
    max-width: 100%;
    width: 100%;
    height: 100%;
    margin: 0px;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
    object-position: center center;
    object-fit: cover;
    display: block;
`;

const ImageContainer = styled.div`
    flex: 2 1 0%;
    width: 100%;
`;

export default function CardImage({ src, title }) {
    return (
        <ImageContainer>
            <Image src={src} alt={title} title={title} />   
        </ImageContainer>
    );
};