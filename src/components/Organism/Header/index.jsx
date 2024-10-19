import { HeaderContainer, HeaderInfo } from "./styles";
import { MainTitle } from "styles/utils";

export default function Header() {
    return (
        <HeaderContainer>
            <MainTitle>Rick and Morty</MainTitle>
            <HeaderInfo>Find your favorite character here</HeaderInfo>
        </HeaderContainer>
    );
};