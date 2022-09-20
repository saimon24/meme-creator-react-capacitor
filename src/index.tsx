import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import Creator from './components/Creator'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import { indigo, pink } from '@mui/material/colors'

let theme = createTheme({
  palette: {
    primary: indigo,
    secondary: pink,
  },
})

theme = responsiveFontSizes(theme)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            element: <Home />,
            index: true,
          },
          {
            path: '/about',
            element: <About />,
          },
          {
            path: '/create',
            element: <Creator />,
          },
        ],
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
