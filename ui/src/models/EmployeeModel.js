export const EmployeeModel =  {
    id: {
        type: "string",
        required: false,
        errorMessage: "",
        value: "employeeId",
        label: "Employee Id",
        placeholder: "John"
    },
    firstName: {
        type: "string",
        required: true,
        errorMessage: "",
        value: "firstName",
        label: "First Name",
        placeholder:'John'
    },
    middleName: {
        type: "string",
        required: false,
        errorMessage: "",
        value: "middleName",
        label: "Middle Name (if applicable)",
        placeholder:''
    },
    lastName: {
        type: "string",
        required: true,
        errorMessage: "",
        value: "lastName",
        label: "Last Name",
        placeholder:'Smith'
    },
    email: {
        type: "email",
        required: true,
        errorMessage: "",
        value: "email",
        label: "Email address",
        placeholder:'john.smith@gmail.com'
    },
    mobile: {
        type: "phone",
        required: true,
        errorMessage: "",
        value: "mobile",
        label: "Mobile Number",
        placeholder:'405676890'
    },
    address: {
        type: "string",
        required: true,
        errorMessage: "",
        value: "address",
        label: "Residential Address",
        placeholder:'123 Example St, Sydney, NSW 2000'
    },
    contractType: {
        type: "string",
        required: true,
        errorMessage: "",
        value: "contractType",
        label: 'Contract Type',
        title: 'What is the contract type'
    },
    startDate: {
        type: "date",
        required: true,
        errorMessage: "",
        value: "startDate",
        label: 'Start Date',
    },
    endDate: {
        type: "date",
        required: true,
        errorMessage: "",
        value: "endDate",
        label: 'End Date',
    },
    onGoing: {
        type: "checkbox",
        required: true,
        errorMessage: "",
        value: "onGoing",
        label: "On Going"
    },
    employeementType: {
        type: "string",
        required: true,
        errorMessage: "",
        value: "employeementType",
        label: 'Employeement Type',
        title: 'Is this full-time or part-time basis?'
    },
    hoursPerWeek: {
        type: "number",
        required: false,
        errorMessage: "",
        value: "hoursPerWeek",
        label: 'Hours per week',
        placeholder:'40'
    },
    
}
