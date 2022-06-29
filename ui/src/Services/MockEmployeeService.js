const employees = [
  {
    id: '342342',
    firstName: 'John',
    lastName: 'Dalton',
    middleName: 'Godam',
    mobile: '405202745',
    address: '23 barr st, new london, nsw',
    job: 'Contract - 2 years',
    email: 'John.smith@email.com',
    contractType: 'contract',
    startDate: '2021/01/15',
    endDate: '2022/04/25',
    onGoing: true,
    employeementType: 'part-time',
    hoursPerWeek: 80
  },
  {
    id: '562342',
    firstName: 'Amir',
    lastName: 'Ronny',
    job: 'Contract - 3 years',
    email: 'Amir.smith@email.com'
  },
  {
    id: '772342',
    firstName: 'Godam',
    lastName: 'Gundala',
    job: 'Contract - 4 years',
    email: 'Godam.smith@email.com'
  }

]
export const fetchEmployees = (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Employee Service');
      resolve(employees);
    }, seconds * 1000);
  });
}

export const fetchEmployeeById = (id, seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('fetchEmployeeId:' + id);
      resolve(
        employees.filter(e => e.id)
      );
    }, seconds * 1000);
  });
}

export const mockCreateEmployee = (data, seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('create Employee');
      const newData = {...data, id : employees[employees.length-1].id + 3};
      employees.push(newData);
      resolve(newData);
    }, seconds * 1000);
  });
}
