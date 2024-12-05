import Ajoutemployee from '@/components/employeeComponents/Ajoutemployee';
import { fetchDepartments } from '@/services/departmentService'
import React from 'react'
const getDepartments=async()=>{
   const data=await fetchDepartments()
    return data;
    
}
const NewEmployeepage = async() => {
    const departments= await getDepartments()
  return (
    <div>
      <Ajoutemployee  lesdepartments={departments}/>
    </div>
  )
}

export default NewEmployeepage
