import Listemployees from '@/components/employeeComponents/Listemployees';
import { fetchEmployees } from '@/services/employeeService'
import React from 'react'
//on doit creer une methode qui consomme le service backend avant d'entrer dans le composant
const getemployees=async()=>{
    const data=await fetchEmployees()
    return data;
}
const Employeepage =async() => {
    const employees=await getemployees()
  return (
    <div>
      
      < Listemployees employees={employees}/>
    </div>
  )
}

export default Employeepage
