import { Grid, Typography } from '@mui/material'
import React from 'react'

export const FormHeaderTitle = (props) => {
    return (
        <Grid item xs={12} marginTop={3}>
            <Typography variant='h5' control='div' fontWeight='bold'>{props.value}</Typography>
        </Grid>
    )
}
