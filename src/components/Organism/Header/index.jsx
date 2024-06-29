import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap";
import { HeaderContainer, HeaderInfo } from "./styles";
import { MainTitle } from "styles/utils";
import { useSession } from "../AppContext";
import { changeLocalStorage } from "service";

export default function Header() {
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn } = useSession();
  
    const logout = () => {
      if(!window.confirm("Deseja realmente encerrar a sessão?")) return;

      changeLocalStorage({ login: false });
      setIsLoggedIn(false);
      navigate("/");
    };

    return (
        <HeaderContainer>
            <div>
                <MainTitle>Rick and Morty</MainTitle>
                <HeaderInfo>Find your favorite character here</HeaderInfo>
            </div>
            {isLoggedIn && (
                <Button
                    title="Log out" 
                    variant="danger"
                    onClick={logout}
                >
                    Log out
                </Button>
            )}
        </HeaderContainer>
    );
};