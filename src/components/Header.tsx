import {
  AppBar,
  Box,
  Button,
  ButtonProps,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AutoFixHigh,
  ChevronRightOutlined,
  RocketLaunch,
} from '@mui/icons-material'
import { blue, grey } from '@mui/material/colors'
import { NavLink, useLocation } from 'react-router-dom'
import styled from '@emotion/styled'
import './Header.css'

const drawerWidth = 240

const navItems = [
  { link: '/', label: 'Meme of the Day' },
  { link: '/about', label: 'About' },
]

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: '#fff',
  marginRight: 8,
  '&:hover': {
    backgroundColor: blue[800],
  },
}))

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const pageName = () => {
    switch (location.pathname) {
      case '/':
        return 'Rapid Memes'
      case '/about':
        return 'About'
      case '/create':
        return 'Create Meme'
      default:
        return ''
    }
  }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        pt: 'env(safe-area-inset-top)',
        textAlign: 'center',
        bgcolor: 'primary.main',
        color: '#fff',
      }}
    >
      <Typography variant="h6" sx={{ my: 1, pt: 1 }}>
        Menu
      </Typography>
      <Divider />
      <List sx={{ bgcolor: '#fff' }}>
        {navItems.map((item) => (
          <NavLink
            to={item.link}
            key={item.label}
            style={{ textDecoration: 'none' }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={item.label} sx={{ color: grey[800] }} />
                <IconButton edge="end">
                  <ChevronRightOutlined />
                </IconButton>
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar sx={{ pt: 'env(safe-area-inset-top)' }}>
        <Container maxWidth="lg" sx={{ padding: { xs: 0 } }}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <RocketLaunch />
              Rapid Memes
            </Typography>

            <Typography
              variant="h6"
              sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' } }}
            >
              {pageName()}
            </Typography>

            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <NavLink to="/create">
                <IconButton sx={{ color: '#fff' }}>
                  <AutoFixHigh />
                </IconButton>
              </NavLink>
            </Box>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <NavLink
                  end
                  to={item.link}
                  key={item.label}
                  style={{ textDecoration: 'none' }}
                  className={({ isActive }) => (isActive ? 'link-active' : '')}
                >
                  <ColorButton>{item.label}</ColorButton>
                </NavLink>
              ))}
              <NavLink end to="/create" style={{ textDecoration: 'none' }}>
                <Button
                  disableElevation
                  variant="contained"
                  color="secondary"
                  endIcon={<AutoFixHigh />}
                >
                  Create Meme
                </Button>
              </NavLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <SwipeableDrawer
          open={mobileOpen}
          onOpen={handleDrawerToggle}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </SwipeableDrawer>
      </Box>
    </>
  )
}

export default Header
