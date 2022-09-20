import { Typography } from '@mui/material'

export const HeroText = (props: any) => {
  return (
    <Typography
      variant="h1"
      align="left"
      sx={{
        mt: 2,
        fontWeight: 500,
        backgroundImage: `linear-gradient(45deg, #5514B4, #FF80FF)`,
        backgroundRepeat: 'repeat',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {props.text}
    </Typography>
  )
}
