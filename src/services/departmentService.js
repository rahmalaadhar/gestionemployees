const DEPARTMENT_API="/departments/"
export const fetchDepartments=async()=> {
const res = await fetch(process.env.NEXT_PUBLIC_API_URL+DEPARTMENT_API, 
    { cache:'no-store' })
    //cache no store cvd ne donner pas les donnees qui se trouvent dans le store du cache(faire un reload)
const response = await res.json();
return response.departments;
}
export const fetchDepartmentById=async(departmentId)=> {
const res = await
fetch(process.env.NEXT_PUBLIC_API_URL+DEPARTMENT_API+`${departmentId}`,
    { cache: 'no-store' },
    {
        //fetch est plus avance pour le nextjs,elle necessite une methode:put,delete..
        method: 'GET'
    });
const response = await res.json();
return response;
}
export const deleteDepartment=async(departmentId) =>{
const res = await
fetch(process.env.NEXT_PUBLIC_API_URL+DEPARTMENT_API+`${departmentId}`,
    {
        method: 'DELETE'
    });
const response = await res.json();
return response;
}
export const addDepartment=async(department)=> {
const res = await fetch(process.env.NEXT_PUBLIC_API_URL+DEPARTMENT_API, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(department),
//la methode stringify transforme les donnes en format json
});
const response = await res.json();
return response;
}
export const editDepartment=async(department) =>{
const res = await
fetch(process.env.NEXT_PUBLIC_API_URL+DEPARTMENT_API+`${department._id}`, {
method: 'PUT',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(department),
});
const response = await res.json();
return response;
}
