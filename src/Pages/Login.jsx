import { Button, Container, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    let handleSubmit=(e)=>
    {  
        console.log(e)
        e.preventDefault();
        navigate('/dashboard');
    }
  return (
        <Container maxWidth="sm" style={{marginTop:100}}>
            <h1>Login From</h1>
            <form onSubmit={handleSubmit} action="" style={{marginTop:30}}>
                <TextField  margin="normal" fullWidth id="standard-basic" label="Enter Your Email"  />
                <TextField margin="normal" fullWidth id="standard-basic" label="Enter Password"  />
                <Button type='submit' margin="normal" variant="contained">Submit</Button>
            </form>
        </Container>
  )
}

export default Login
