import { Button } from "react-bootstrap";
import { HeaderContainer, HeaderInfo } from "./styles";
import { MainTitle } from "styles/utils";

export default function Header() {
    return (
        <HeaderContainer>
            <div>
                <MainTitle>Rick and Morty</MainTitle>
                <HeaderInfo>Encontre seu personagem favorito!</HeaderInfo>
            </div>
            <Button
                title="Encerrar sessão" 
                variant="danger"
            >
                SAIR
            </Button>
        </HeaderContainer>
    );
};