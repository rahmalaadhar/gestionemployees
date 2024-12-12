import Updateemployee from '@/components/employeeComponents/Updateemployee'
import { fetchDepartments } from '@/services/departmentService'
import { fetchEmployeeById } from '@/services/employeeService'

const getEmployee=async(id)=>{
    const data =await fetchEmployeeById(id)
    return data;

}
const getDepartments=async()=>{
    const data=await fetchDepartments()
     return data;
    }
//{params} : { params : { id :string}}
const UpdateEmployeepage=async({params} )=>  {  
  const { id } = await params  
const employee= await getEmployee(id);
console.log("hamlaya7", employee);
const departments= await getDepartments()
console.log("hamlaya72", departments);
  return (
    <div>
      <Updateemployee  employee={employee} lesdepartments={departments}/>
    </div>
  )
}

export default UpdateEmployeepage

