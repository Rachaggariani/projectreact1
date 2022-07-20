import React from 'react';
import { Form,Button } from 'react-bootstrap';

const formulairestyle={width:"700px",marginLeft:"300px",marginTop:"200px"};
function SignIn() {
  return (
    
    <Form  style={formulairestyle}>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Phone Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

  );
}
export default SignIn;