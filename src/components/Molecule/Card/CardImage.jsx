import styled from "styled-components";

const Image = styled.img`
    border-radius: 0px 0px 8px;
    height: 100%;
    width: 100%;
    object-position: center center;
    object-fit: center;
`;

const ImageContainer = styled.div`
    flex: 2 1 0%;
    height: 100%;
`;

export default function CardImage({ src, title }) {
    return (
        <ImageContainer>
            <Image src={src} alt={title} title={title} />   
        </ImageContainer>
    );
};