import React from 'react'
import SwipeableTextMobileStepper from '../Components/BannerSlider'
import { Grid } from '@mui/material'
import QuiltedImageList from '../Components/ImageGallery'
import BasicTabs from '../Components/Tabbing'

const Home = () => {
  return (
    <div>
      <SwipeableTextMobileStepper />

      <Grid container style={{marginTop:20}} spacing={4}>
        <Grid item lg={6}>
            <QuiltedImageList />
        </Grid>
        <Grid item lg={6}>
            <BasicTabs />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
