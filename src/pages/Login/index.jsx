
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from 'components/Organism/AppContext';
import { Button, Form, Container, Card } from 'react-bootstrap';
import { changeLocalStorage, LoginService } from "service";
import styled from 'styled-components';

const StyledCard = styled(Card)`
    width: 500px;
    height: 300px;
    border-radius: 8px;
    box-shadow: 0px 2px 4px 0px #fefeff;
    padding: 15px;  
`;

export default function Login() {
    const { isLoggedIn, setIsLoggedIn } = useSession();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabledSubmitter, setDisabledSubmitter] = useState(true);
    const isMounted = useRef(false);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const loggedIn = await LoginService.make(email, password);

        if(!loggedIn) {
            return alert("Invalid credentials"); 
        }

        setIsLoggedIn(true);
        changeLocalStorage({ login: true })
        navigate("/characters")
    };

    useEffect(() => {
        if(isMounted.current) {
            const isInvalidEmail = !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
            const isInvalidPassword = password.length < 8;

            setDisabledSubmitter(isInvalidEmail || isInvalidPassword);
        } else {
            isMounted.current = true;
        }
    }, [email, password]);

    useEffect(() => {
        if(!isLoggedIn) return;

        console.info("You are already logged in, redirecting to the characters page...");
        navigate("/characters");
    }, [isLoggedIn, navigate]);

    return (
        <Container 
            style={{ minHeight: "70vh" }}
            className="mt-5 d-flex align-items-center justify-content-center"
        >
            <StyledCard>
                <Container>
                    <center>
                        <h2 className="h2 text-muted">Access your account</h2>
                    </center>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-1 mt-1" controlId="email">
                            <Form.Label className="text-muted">E-mail</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter with your email" 
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>
                
                        <Form.Group className="mb-3 mt-3" controlId="password">
                            <Form.Label className="text-muted">Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter with your password"
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                minLength={8}
                            />
                        </Form.Group>

                        <Button 
                            className="w-100"
                            variant="dark" 
                            type="submit"
                            title="Submit your credentials"
                            disabled={disabledSubmitter}
                        >
                            Submit
                        </Button>
                    </Form>
                </Container>
            </StyledCard>
        </Container>
    );
};