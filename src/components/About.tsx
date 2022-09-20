import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { HeroText } from './HeroText'

const About = () => {
  return (
    <>
      <HeroText text="About"></HeroText>

      <Container maxWidth="md" sx={{ mt: 8, display: 'flex' }}>
        <Typography>An epic meme creator by Simon Grimm</Typography>
      </Container>
    </>
  )
}

export default About
