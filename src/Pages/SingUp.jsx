import { Button, Container, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const SingUp = () => {
    const navigate = useNavigate();
    let handleSubmits=(e)=>
    {  
        console.log(e)
        e.preventDefault();
        navigate('/dashboard');
    }
  return (
    <Container maxWidth="sm" style={{marginTop:100}}>
        <h1>Sign Up From</h1>
        <form onSubmit={handleSubmits} action="" style={{marginTop:30}}>
            <TextField margin="normal" fullWidth id="standard-basic" label="Enter Your Name"  />
            <TextField  margin="normal" fullWidth id="standard-basic" label="Enter Your Email"  />
            <TextField margin="normal" fullWidth id="standard-basic" label="Enter Password"  />
            <TextField margin="normal" fullWidth id="standard-basic" label="Confirm Password"  />
            <Button type='submit' margin="normal" variant="contained">Submit</Button>
        </form>
    </Container>
  )
}

export default SingUp
