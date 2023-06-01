import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Spinner from 'react-bootstrap/Spinner';
import "./login.css"


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Perform login logic here, e.g., sending username and password to a server

    // Simulating a delay of 2 seconds
    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
      setPassword('');
    }, 2000);

    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
        <Container className='login-container'>
            <Row>
                <Form className='login-form' onSubmit={handleLogin}>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control id="email" value={email} onChange={handleEmailChange} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control id="password" value={password} onChange={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Keep me logged in" />
                    </Form.Group>
                    <Button className='login-button' variant="outline-primary" type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Spinner
                          as="span"
                          animation="grow"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        Loading...
                      </>
                    ) : (
                      'Login'
                    )}
                    </Button>
                </Form>
            </Row>
        </Container>
  );
};

export default Login;
