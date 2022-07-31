import { Button } from "nsw-ds-react";
import { Fragment } from "react";

export const EmployeeList = ({ e: employee, deleteCommand }) => {
    return (
    <Fragment key={employee.id}>
        <div className="nsw-grid" key={employee.id}>
            <div className="nsw-col nsw-col-md-6">
                <div className='nsw-h4 text-padding'>{employee.lastName}, {employee.firstName}</div>
                <div className='body-text text-padding'>{Math.ceil(employee.contractDuration / 12)} months</div>
                <div className='small-text'>{employee.email}</div>
            </div>
            <div className="nsw-col nsw-col-md-6">
                <Button style='white'>Edit</Button> | <Button style='white' onClick={() => deleteCommand(employee)} className="js-open-dialog-rmEmployee">Remove</Button>
            </div>
        </div>
        <hr />
    </Fragment>);

}