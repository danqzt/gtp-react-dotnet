import { Alert, Button, Checkbox, CircularProgress, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, InputAdornment, Radio, RadioGroup, Snackbar, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { FormDateField } from '../components/FormDateField'
import { FormHeaderTitle } from '../components/FormHeaderTitle'
import { FormRadioField } from '../components/FormRadioField'
import { Header } from '../components/Header'
import { validateField } from '../helpers/validation'
import { EmployeeModel } from '../models/EmployeeModel'
import { createEmployee, getEmployeeById, updateEmployee } from '../state/EmployeeActions'

export const Detail = (props) => {
    const currentEmployee = useSelector((state) => state.EmployeeReducer.current);
    const isLoading = useSelector((state) => state.EmployeeReducer.loading);
    const serverError = useSelector((state) => state.EmployeeReducer.error);
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const [formProperties, setFormProperties] = useState(EmployeeModel);
    const [isNewMode, setNewMode] = useState(false);
    const [dataChanged, setDataChanged] = useState(false);
    const [Employee, setEmployee] = useState({});
    const [submitEnabled, setSubmitEnabled] = useState(true);

    useEffect(() => {
        if (params.id === 'new') {
            dispatch(getEmployeeById(undefined, () => {
                setNewMode(true)
            }));
        } else { //edit mode
            dispatch(getEmployeeById(params.id, () => { setNewMode(false) }));
        }

    }, []);

    useEffect(() => {
        setEmployee(currentEmployee);

    }, [currentEmployee]);

    const handleInputChange = (name, value) => {
        let localData = Object.assign({}, Employee);

        localData[name] = value;

        setEmployee(localData);

    };

    const checkGenericField = (key, required) => {
        return validateField(
            required,
            Employee[key],
            formProperties[key].type,
            formProperties[key].label
        );
    };
    const validateForm = () => {
        if (!submitEnabled) {
            return;
        }

        //Prevent the user from button mashing
        setSubmitEnabled(false);

        let numErrors = 0;
        let localProperties = formProperties;

        Object.keys(formProperties).forEach((key) => {
            let errorMessage = "";
            errorMessage = checkGenericField(key, formProperties[key].required);
            if (errorMessage.length > 0) {
                numErrors++;
            }

            localProperties[key].errorMessage = errorMessage;
        });

        //TODO: Find a better way to deal with form changes. This just forces a re-render after validation
        setDataChanged(!dataChanged);

        if (numErrors > 0) {
            setSubmitEnabled(true);
            return false;
        } else {
            return true;
        }
    };

    /* Transform the activity group data into the form that is required by the backend */
    const createRequestBody = () => {
        let requestBody = {
            ...Employee
        };

        return requestBody;
    };

    // When submit is clicked, validate the data and if ok call the create action
    const handleSubmitClicked = () => {
        if (validateForm()) {
            dispatch(
                createEmployee(createRequestBody(true), (success, id) => {
                    if (success) {
                        navigate('/');
                    } else {
                        setSubmitEnabled(true);
                    }
                })
            );
        }
    };

    const handleUpdateClicked = () => {
        if (validateForm()) {
            dispatch(
                updateEmployee(createRequestBody(true), (success, id) => {
                    if (success) {
                        navigate(`/`);
                    } else {
                        setSubmitEnabled(true);
                    }
                })
            );
        }
    };
    return (
        <>
            <Header title={`Employee Detail ${Employee.id !== undefined ? Employee.id : ''}`}></Header>
            <Grid container spacing={3} paddingLeft={3} marginTop={3}>
                {isLoading ? (<CircularProgress />) : (
                    <>
                        <FormHeaderTitle value='Personal Information' />
                        <Grid item xs={12}>
                            <TextField label={formProperties.firstName.label}
                                name={formProperties.firstName.value}
                                placeholder={formProperties.firstName.placeholder}
                                value={
                                    Object.keys(Employee).length > 0 &&
                                        Employee.firstName !== undefined
                                        ? Employee.firstName
                                        : ""
                                }
                                onChange={(event) =>
                                    handleInputChange(
                                        formProperties.firstName.value,
                                        event.target.value
                                    )
                                }
                                error={formProperties.firstName.errorMessage !== ""}
                                helperText={formProperties.firstName.errorMessage}
                                sx={{ width: 400 }} />

                        </Grid>
                        <Grid item xs={12}>
                            <TextField label={formProperties.middleName.label}
                                name={formProperties.middleName.value}
                                placeholder={formProperties.middleName.placeholder}
                                value={
                                    Object.keys(Employee).length > 0 &&
                                        Employee.middleName !== undefined
                                        ? Employee.middleName
                                        : ""
                                }
                                onChange={(event) =>
                                    handleInputChange(
                                        formProperties.middleName.value,
                                        event.target.value
                                    )
                                }
                                error={formProperties.middleName.errorMessage !== ""}
                                helperText={formProperties.middleName.errorMessage}
                                sx={{ width: 400 }} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label={formProperties.lastName.label}
                                name={formProperties.lastName.value}
                                placeholder={formProperties.lastName.placeholder}
                                value={
                                    Object.keys(Employee).length > 0 &&
                                        Employee.lastName !== undefined
                                        ? Employee.lastName
                                        : ""
                                }
                                onChange={(event) =>
                                    handleInputChange(
                                        formProperties.lastName.value,
                                        event.target.value
                                    )
                                }
                                error={formProperties.lastName.errorMessage !== ""}
                                helperText={formProperties.lastName.errorMessage}
                                sx={{ width: 400 }} />
                        </Grid>
                        <FormHeaderTitle value='Contact details' />
                        <Grid item xs={12}>
                            <TextField label={formProperties.email.label}
                                name={formProperties.email.value}
                                placeholder={formProperties.email.placeholder}
                                value={
                                    Object.keys(Employee).length > 0 &&
                                        Employee.email !== undefined
                                        ? Employee.email
                                        : ""
                                }
                                onChange={(event) =>
                                    handleInputChange(
                                        formProperties.email.value,
                                        event.target.value
                                    )
                                }
                                error={formProperties.email.errorMessage !== ""}
                                helperText={formProperties.email.errorMessage}
                                sx={{ width: 400 }} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label={formProperties.mobile.label}
                                placeholder={formProperties.mobile.placeholder}
                                name={formProperties.mobile.value} type='number'
                                value={
                                    Object.keys(Employee).length > 0 &&
                                        Employee.mobile !== undefined
                                        ? Employee.mobile
                                        : ""
                                }
                                onChange={(event) =>
                                    handleInputChange(
                                        formProperties.mobile.value,
                                        event.target.value
                                    )
                                }
                                error={formProperties.mobile.errorMessage !== ""}
                                helperText={formProperties.mobile.errorMessage}
                                InputProps={{
                                    startAdornment: <InputAdornment position='start' bg>61</InputAdornment>
                                }}></TextField>
                            <FormHelperText> Must be an Australian Number</FormHelperText>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label={formProperties.address.label}
                                placeholder={formProperties.address.placeholder}
                                name={formProperties.address.value}
                                value={
                                    Object.keys(Employee).length > 0 &&
                                        Employee.address !== undefined
                                        ? Employee.address
                                        : ""
                                }
                                onChange={(event) =>
                                    handleInputChange(
                                        formProperties.address.value,
                                        event.target.value
                                    )
                                }
                                error={formProperties.address.errorMessage !== ""}
                                helperText={formProperties.address.errorMessage} sx={{ width: 700 }} />
                            <FormHelperText> Start typing to search</FormHelperText>
                        </Grid>
                        <FormHeaderTitle value='Employee Details' />
                        <Grid item xs={12}>
                            <FormRadioField title={formProperties.contractType.title}
                                value={
                                    Object.keys(Employee).length > 0 &&
                                        Employee.contractType !== undefined
                                        ? Employee.contractType
                                        : ""
                                }
                                onChange={(event) =>
                                    handleInputChange(
                                        formProperties.contractType.value,
                                        event.target.value,
                                    )
                                }
                                options={['Permanent', 'Contract']}
                                name={formProperties.contractType.value}
                                error={formProperties.contractType.errorMessage != ""} />
                        </Grid>
                        <Grid item xs={12}>
                            <FormDateField label={formProperties.startDate.label}
                                value={
                                    Object.keys(Employee).length > 0 &&
                                        Employee.startDate !== undefined
                                        ? Employee.startDate
                                        : ''
                                }
                                onChange={(value) =>
                                    handleInputChange(
                                        formProperties.startDate.value,
                                        value,
                                    )
                                }
                                id={formProperties.startDate.value}
                                error={formProperties.startDate.errorMessage != ""} />
                        </Grid>

                        <Grid item xs={12}>
                            <FormDateField label={formProperties.endDate.label}
                                value={
                                    Object.keys(Employee).length > 0 &&
                                        Employee.endDate !== undefined
                                        ? Employee.endDate
                                        : ''
                                }
                                onChange={(value) =>
                                    handleInputChange(
                                        formProperties.endDate.value,
                                        value,
                                    )
                                }
                                error={formProperties.endDate.errorMessage != ""}
                                id={formProperties.endDate.value} />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl error={formProperties.onGoing.errorMessage != ""}>
                                <FormLabel>{formProperties.onGoing.errorMessage}</FormLabel>
                                <FormControlLabel label={formProperties.onGoing.label}
                                    control={<Checkbox checked={
                                        Object.keys(Employee).length > 0 &&
                                            Employee.onGoing !== undefined
                                            ? Employee.onGoing
                                            : false
                                    }
                                        onChange={(value) =>
                                            handleInputChange(
                                                formProperties.onGoing.value,
                                                !Employee.onGoing
                                            )
                                        }
                                        name={formProperties.onGoing.value} />}

                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormRadioField title={formProperties.employeementType.title}
                                value={
                                    Object.keys(Employee).length > 0 &&
                                        Employee.employeementType !== undefined
                                        ? Employee.employeementType
                                        : ""
                                }
                                onChange={(event) =>
                                    handleInputChange(
                                        formProperties.employeementType.value,
                                        event.target.value,
                                    )
                                }
                                options={['Full-time', 'Part-time']}
                                name={formProperties.employeementType.value}
                                error={formProperties.employeementType.errorMessage != ""} />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <FormLabel>{formProperties.hoursPerWeek.label}</FormLabel>
                                <TextField placeholder={formProperties.hoursPerWeek.placeholder} name={formProperties.hoursPerWeek.value}
                                    type='number'
                                    value={
                                        Object.keys(Employee).length > 0 &&
                                            Employee.hoursPerWeek !== undefined
                                            ? Employee.hoursPerWeek
                                            : ""
                                    }
                                    onChange={(event) =>
                                        handleInputChange(
                                            formProperties.hoursPerWeek.value,
                                            event.target.value,
                                        )
                                    }
                                    sx={{ width: 70 }} ></TextField>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack direction='row' spacing={2} marginTop={1}>
                                <Button variant='contained' onClick={() => {
                                    if (isNewMode)
                                        handleSubmitClicked();
                                    else
                                        handleUpdateClicked();
                                }}
                                    sx={{ width: '150px' }}>Save</Button>
                                <Button variant='outlined' onClick={() => navigate('/')} sx={{ width: '150px' }}>Cancel</Button>
                            </Stack>

                        </Grid>
                    </>)}
            </Grid>
            <Snackbar open={serverError.length > 0} autoHideDuration={3000}>
                <Alert severity="error" sx={{width:'100%'}}>{serverError}</Alert>
            </Snackbar>
        </>

    )
}
