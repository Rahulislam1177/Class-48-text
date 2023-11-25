import React from 'react';
import Header from '../Header';
import { Button, Form } from 'react-bootstrap';
import "./Register.css"
import { Link } from 'react-router-dom';

const Register = () => {

const handkeOnSubmite =(event)=>{
   event.preventDefault();
   const form = event.target;
   const name = form.name.value;
   const email = form.email.value;
   const password = form.password.value
   console.log(name,email,password);

}



    return (
        <div>
            <Header></Header>
            <div className='container'>
            
 <div className='Form'>

    <Form onSubmit={handkeOnSubmite} className='w-50 mx-auto shadow p-4 rounded'>
        <h3>Register Here</h3>
   
      <Form.Group onSubmit={handkeOnSubmite} className="mb-3" controlId="formGroupEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>

      <Button variant='primary' type='submit'>Register</Button>
      <p className='mt-3'> Already Have an Account <Link to="/login">Please Login</Link></p>
      
    </Form>
      </div>      </div>
        </div>
    );
};

export default Register;