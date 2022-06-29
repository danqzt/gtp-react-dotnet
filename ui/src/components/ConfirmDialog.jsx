import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
import { useState } from 'react'

export const ConfirmDialog = (props) => {
    return (
        <Dialog open={props.open}>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{props.text}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.toggle}>Cancel</Button>
                <Button onClick={props.action}>Submit</Button>
            </DialogActions>
        </Dialog>
    )
}
