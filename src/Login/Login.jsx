import React from 'react';
import Header from '../Shared/Header/Header';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {

  const handkeOnSubmite =(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value
    console.log(email,password);
 
 }



    return (
        <div>
            <Header></Header>
            <div className='container'>
            <div className='Form'>

    <Form onSubmit={handkeOnSubmite} className='w-50 mx-auto shadow p-4 rounded'>
        <h3>LogIn Here</h3>
   

      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>

      <Button variant='primary' type='submit'>Log in</Button>
      <p className='mt-3'>Create New Account <Link to="/register">Please Register</Link></p>
      
      
    </Form>
      </div>      </div>
        </div>
            
       
    );
};

export default Login;