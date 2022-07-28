import { Button, Section } from 'nsw-ds-react';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useOutletContext } from "react-router-dom";
import { deleteEmployeeAction, fetchEmployeesAction } from '../state/EmployeeActions';
import { Audio } from 'react-loader-spinner'
import { Dialog } from '../components/Dialog';
import { useState } from 'react';

export const Home = () => {
    const { setTitle } = useOutletContext();
    const data = useSelector((state) => state.employee);
    const [toDelete, setToDelete] = useState({firstName: '', lastName: ''});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setTitle("Employee List");
        dispatch(fetchEmployeesAction());
    }, [])

    useEffect(() => { 
        window.NSW.initSite();
    }, [data])
    
    const deleteRecord = () => {
       dispatch(deleteEmployeeAction(toDelete.id));
    }

    const openDetailPage = (id) =>{
        let path = `/employees/${id}`
        navigate(path);
     }

    const renderItems = () => {
        return data.employees?.map(e => (
            <Fragment key={e.id}>
                <div className="nsw-grid" key={e.id}>
                    <div className="nsw-col nsw-col-md-6">
                        <div className='nsw-h4 text-padding'>{e.lastName}, {e.firstName}</div>
                        <div className='body-text text-padding'>{Math.ceil(e.contractDuration / 12)} months</div>
                        <div className='small-text'>{e.email}</div>
                    </div>
                    <div className="nsw-col nsw-col-md-6">
                        <Button style='white'>Edit</Button> | <Button style='white' onClick={() => setToDelete(e)} className="js-open-dialog-rmEmployee">Remove</Button>
                    </div>
                </div>
                <hr />
            </Fragment>))
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
                { data.loading ? <Audio height='100' width='100' /> : renderItems()}
            </Section>
            <Dialog id="rmEmployee" title="Delete an employee record?" desc={`Are you sure to delete employee record ${toDelete.firstName} ${toDelete.lastName}`} action={deleteRecord}/>

        </>
    )

}