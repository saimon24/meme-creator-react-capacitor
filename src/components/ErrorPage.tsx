import { Container, Typography } from '@mui/material'
import React from 'react'
import Header from './Header'
import { HeroText } from './HeroText'

const ErrorPage = () => {
  return (
    <>
      <Header />
      <Container sx={{ mt: 10 }} maxWidth="lg">
        <HeroText text="ERROR" />
        <Typography variant="h2">404 - Not your meme</Typography>
      </Container>
    </>
  )
}

export default ErrorPage
