
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from 'components/Organism/AppContext';
import { Button, Form, Container, Card } from 'react-bootstrap';
import { LoginService } from 'service/LoginService';
import styled from 'styled-components';
import { changeLocalStorage } from "service/storage";

const StyledCard = styled(Card)`
    width: 500px;
    height: 220px;
    border-radius: 8px;
    box-shadow: 0px 2px 4px 0px #fefeff;
    padding: 15px;  
`;

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setIsLoggedIn } = useSession();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const loggedIn = await LoginService.make(email, password);

        if(!loggedIn) {
            return alert("Credenciais inválidas"); 
        }

        setIsLoggedIn(true);
        changeLocalStorage({ login: true })
        navigate("/characters")
    };

    return (
        <Container 
            style={{ minHeight: "100vh" }}
            className="mt-5 d-flex align-items-center justify-content-center"
        >
            <StyledCard>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-1 mt-1">
                            <Form.Control 
                                type="email" 
                                placeholder="Enter with your email" 
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                
                        <Form.Group className="mb-3 mt-3">
                            <Form.Control 
                                type="password" 
                                placeholder="Password"
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button style={{ width: "100%" }} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </StyledCard>
        </Container>
    );
};