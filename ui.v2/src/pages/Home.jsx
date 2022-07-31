import { Button, ContextConsumer, Section } from 'nsw-ds-react';
import { Fragment, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDeleteEmployeeMutation, useGetEmployeesQuery } from '../state/ApiSlice';
import { Audio } from 'react-loader-spinner'
import { Dialog } from '../components/Dialog';
import { useState } from 'react';
import { EmployeeList } from '../components/EmployeeList';

export const Home = () => {
    const [toDelete, setToDelete] = useState({ firstName: '', lastName: '' });
    const navigate = useNavigate();
    const [ deleteEmployee ] = useDeleteEmployeeMutation();

    const { data, isLoading, isError, isSuccess, error } = useGetEmployeesQuery();

    useEffect(() => {
        window.NSW.initSite();
    }, [data])

    const deleteRecord = async () => {
        await deleteEmployee({ id: toDelete.id }).unwrap();
    }

    const openDetailPage = (id) => {
        let path = `/employees/${id}`
        navigate(path);
    }


    let content;
    if (isLoading) {
        content = <Audio height='100' width='100' />
    } else if (isSuccess) {
        content = data.map(e => (<EmployeeList e={e} deleteCommand={setToDelete} />))
    }
    else if (isError) {
        content = <h1>{error}</h1>
    }

    return (
        <>
            <Section padding='half' container>
                <div className='nsw-grid'>
                    <div className='nsw-col nsw-col-md-6'>
                        <p className='nsw-intro'>Please click on 'Edit to find more detail of each employee</p>
                    </div>
                    <div className='nsw-col nsw-col-md-6'>
                        <Button onClick={() => openDetailPage("new")}>Add Employee</Button>
                    </div>
                </div>
                <hr />
            </Section>
            <Section padding='none' container>
                {content}
            </Section>
            <Dialog id="rmEmployee" title="Delete an employee record?" desc={`Are you sure to delete employee record ${toDelete.firstName} ${toDelete.lastName}`} action={deleteRecord} />

        </>
    )

}