import React from 'react'
import headerlogo from "../assets/images/facebook.png"
import { NavLink } from 'react-router-dom'
import { Container, Grid } from '@mui/material'
const NAvbar = () => {
  return (
    <header style={{ padding: "15px 0 "  }}>
     <Container maxWidth="lg">
        <Grid container   spacing={2}>
            <Grid item xs={4}><img src={headerlogo} /></Grid>

            <Grid item xs={8}>
  
                <ul>
                    <li><NavLink to="/"> Home </NavLink> </li>
                    <li><NavLink to="/login"> Login </NavLink> </li>
                    <li><NavLink to="/singup"> Sign Up </NavLink> </li>
                    {/* <li><NavLink to="/dashboard"> Dashboard </NavLink> </li> */}
         
                </ul>
            </Grid>
        </Grid>
    </Container>
    </header>
  )
}

export default NAvbar
