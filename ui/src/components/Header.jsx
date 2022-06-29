import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Header = (props) => {
  return (
    <AppBar position='static' color='gray'>
    <Toolbar>
      <Box paddingY={7} paddingLeft={3}>
         <Typography variant='h4'>{props.title}</Typography>
      </Box>
    </Toolbar>
  </AppBar>
  )
}
