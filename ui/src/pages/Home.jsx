import { Stack, Box, Button, Typography, Grid, Divider, CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { navigate, useNavigate } from "react-router-dom";
import { ConfirmDialog } from '../components/ConfirmDialog';
import { Header } from '../components/Header';
import { getAllEmployees, deleteEmployee } from '../state/EmployeeActions';

export const Home = (props) => {
  const allEmployees = useSelector((state) => state.EmployeeReducer.employees);
  const isLoading = useSelector((state) => state.EmployeeReducer.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [toDelete, setToDelete] = useState({});

  useEffect(() => {
    dispatch(getAllEmployees(() => { }))
  }, [])
  
  const openDetailPage = (id) =>{
     let path = `/employee/${id}`
     navigate(path);
  }
  const ConfirmDelete = (employee) => {
     setOpenDialog(true); 
     setToDelete(employee);
  }

  const deleteRecord = () => {
     dispatch(deleteEmployee(toDelete.id, () => {setOpenDialog(!openDialog)}));
  }
  const renderItems = () => {
    return (<>
      <Grid item xs={4} paddingTop={1}>
        <Typography component='div'>Please click on 'Edit' to find more detail of each employee</Typography>
      </Grid>
      <Grid item xs={8}>
        <Button variant='contained' onClick={(e) => openDetailPage('new')}>Add Employee</Button>
      </Grid>
      <Box height="80px"></Box>
      <Divider flexItem style={{ width: '100%' }} ></Divider>

      { allEmployees?.map(e => (
        <>
          <Grid item xs={6} paddingY={2} key={e.id}>
            <Typography gutterBottom variant='body2' component='div' style={{ fontWeight: 600 }}> {e.lastName}, {e.firstName}</Typography>
            <Typography gutterBottom variant='body2' component='div'>{e.contractType} {Math.ceil(e.contractDuration/12)} months</Typography>
            <Typography gutterBottom variant='body2' component='div'>{e.email}</Typography>
          </Grid>
          <Grid item xs={6} paddingY={2}>
            <Button onClick={(event) => openDetailPage(e.id)}>Edit</Button> | <Button onClick={(event) => ConfirmDelete(e)}>Remove</Button>
          </Grid>
          <Divider flexItem style={{ width: '100%' }} ></Divider>
        </>

      ))}
    </>);

  }
  return (
    <>

      <Header title="Employees' list"></Header>
      <Grid container marginTop={3} justifyContent='space-between' paddingLeft={3}>

        {isLoading ? (
          <Stack alignItems="center" spacing={5}>
            <CircularProgress />
          </Stack>) : renderItems()}

      </Grid>
      <ConfirmDialog title='Delete Record' 
         text={`Are you sure to delete employee record ${toDelete.firstName} ${toDelete.lastName}`} 
         open={openDialog} 
         toggle={() => setOpenDialog(!openDialog)}
         action={() => deleteRecord()}/>
    </>
  )
}

