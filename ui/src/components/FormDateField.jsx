import { Grid, FormControl, FormLabel, Stack, TextField, MenuItem, Select } from '@mui/material'
import styleFunctionSx from '@mui/system/styleFunctionSx';
import React, { useEffect, useState } from 'react'

export const FormDateField = (props) => {
    const [date, setDay] = useState(1);
    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(2010);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const handleChange = (val, min, max, stateFn) => {
        if(val === '' || (val <= max && val >= min)) 
          stateFn(val);       
    }
    useEffect(() => {
        const ds= Date.parse(props.value);
        const d = isNaN(ds) ? new Date() : new Date(ds);
        setDay(d.getDate());
        setMonth(d.getMonth());
        setYear(d.getFullYear());
    },[]);
    
    useEffect(() => {
        props.onChange(new Date(year, month, date));
    },[date, month, year]);
     
    return (
        <FormControl>
            <FormLabel error={props.error} id={props.id}>
                {props.label}
            </FormLabel>
            <Stack direction='row' spacing={1} marginTop={1}>
                <TextField label='day' sx={{ width: 75 }} type='number' InputProps={{min:0, max: 31}}
                  onChange={(e) => handleChange(e.target.value,1, 31, setDay)} value={date} />
                <Select label='month' select sx={{ width: 175 }} value={month} onChange={(e)=> setMonth(e.target.value)}>
                    {months.map((val, i) => (
                        <MenuItem value={i} key={i}>{val}</MenuItem>
                    ))}
                </Select>
                <TextField label='year' sx={{ width: 100 }} type='number' InputProps={{min:1, max: 2099}}
                  onChange={(e) => handleChange(e.target.value,1, 2099, setYear)} value={year} />
            </Stack>
        </FormControl>
    )
}
