import { Button, Form, Container, Card } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    width: 500px;
    height: 220px;
    border-radius: 8px;
    box-shadow: 0px 2px 4px 0px #fefeff;
    padding: 15px;  
`;

export default function Login() {
    return (
        <Container 
            style={{ minHeight: "100vh" }}
            className="mt-5 d-flex align-items-center justify-content-center"
        >
            <StyledCard>
                <Form as={Container}>
                    <Form.Group className="mb-1 mt-1">
                        <Form.Control type="email" placeholder="Enter with your email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
            
                    <Form.Group className="mb-3 mt-3">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button style={{ width: "100%" }} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </StyledCard>
        </Container>
    );
};