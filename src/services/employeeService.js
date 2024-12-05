const EMPLOYEE_API="/employees/"
export const fetchEmployees=async()=> {
const res = await fetch(process.env.NEXT_PUBLIC_API_URL+EMPLOYEE_API, 
    { cache:'no-store' })
const response = await res.json();
return response.employees;
//tres tres important d'ajouter le nom du table du back
}
export const fetchEmployeeById=async(employeeId)=> {
const res = await
fetch(process.env.NEXT_PUBLIC_API_URL+EMPLOYEE_API+`${employeeId}`,
    { cache: 'no-store' },
    {
        method: 'GET'
    });
const response = await res.json();
return response;
}
export const deleteEmployee=async(employeeId) =>{
const res = await
fetch(process.env.NEXT_PUBLIC_API_URL+EMPLOYEE_API+`${employeeId}`,
    {
        method: 'DELETE'
    });
const response = await res.json();
return response;
}
export const addEmployee=async(employee)=> {
const res = await fetch(process.env.NEXT_PUBLIC_API_URL+EMPLOYEE_API, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(employee),
});
const response = await res.json();
return response;
}
export const editEmployee=async(employee) =>{
const res = await
fetch(process.env.NEXT_PUBLIC_API_URL+EMPLOYEE_API+`${employee._id}`, {
method: 'PUT',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(employee),
});
const response = await res.json();
return response;
}