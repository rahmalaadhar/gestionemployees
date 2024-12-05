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

const UpdateEmployeepage=async({params})=> {
  const { id } = await params
const employee= await getEmployee(id)
const departments= await getDepartments()
  return (
    <div>
      <Updateemployee employee={employee} lesdepartments={departments}/>
    </div>
  )
}

export default UpdateEmployeepage

