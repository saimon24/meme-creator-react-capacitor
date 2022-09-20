import { Container } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Container sx={{ mt: 10, pt: 'env(safe-area-inset-top)' }} maxWidth="lg">
        <Outlet />
      </Container>
    </>
  )
}

export default App
