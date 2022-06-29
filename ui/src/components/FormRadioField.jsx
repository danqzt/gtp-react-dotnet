import { Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, InputAdornment, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export const FormRadioField = (props) => {
    return (
        <FormControl error={props.error}>
            <FormLabel>
                {props.title}
            </FormLabel>
            <RadioGroup name={props.name} value={props.value} onChange={(e) => props.onChange(e)} >
                <FormControlLabel control={<Radio />} label={props.options[0]} value={props.options[0].toLowerCase()}></FormControlLabel>
                <FormControlLabel control={<Radio />} label={props.options[1]} value={props.options[1].toLowerCase()}></FormControlLabel>
            </RadioGroup>
        </FormControl>
    )
}
