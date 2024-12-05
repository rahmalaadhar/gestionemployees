"use client"
import { addEmployee } from '@/services/employeeService';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Ajoutemployee =({lesdepartments}) => {
  const router=useRouter();

const [FirstName, setFirstName] = useState("");
const [LastName, setLastName] = useState("");
const [Email, setEmail] = useState("");
const [DateOfBirth, setDateOfBirth] = useState("");
const [PhotoPath, setPhotoPath] = useState("");
const [departments, setDepartments] = useState("");
const [validated, setValidated] = useState(false);

const handleReset = () => {
  setFirstName("")
  setLastName("")
  setEmail("")
  setDateOfBirth("")
  setPhotoPath("")
  setDepartments("")
  
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
    const newEmployee = {
      FirstName,
      LastName,
      Email,
      DateOfBirth,
      PhotoPath,
      departments,
    };
    //faire le add dans la BD
    addEmployee(newEmployee)
    .then(res => {
    router.push('/admin/employees')
    router.refresh()
    })
    .catch(error=>{
    alert("Erreur ! Insertion non effectuée")
    })
    }
    setValidated(true);
    }
  return (
    <div>
     
     
     <Form noValidate validated={validated} onSubmit={handleSubmit}>

 
     <br/>   
<h1 className='text-center'>AJOUT EMPLOYEE</h1>
<br/>

<div className="container w-100 d-flex justify-content-center">
<div>
<div className='form mt-3'>

      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>First Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter First Name" value={FirstName}
           onChange={(e)=>setFirstName(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Last Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter Last Name" value={LastName}
           onChange={(e)=>setLastName(e.target.value)} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control required type="email" placeholder="Enter email" value={Email}
           onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

     

      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control required type="date" placeholder="Enter BirthDate" value={DateOfBirth}
           onChange={(e)=>setDateOfBirth(e.target.value)}  />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Departments Name</Form.Label>
          <Form.Select required as='select' value={departments}
onChange={(e)=>setDepartments(e.target.value)} >
            <option>Choose...</option>
            {lesdepartments && lesdepartments.map((dep)=><option key={dep._id}
value={dep._id}> {dep.Name}</option>
)}

</Form.Select>
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Avatar</Form.Label>
          <Form.Control required type="text" placeholder="Avatar" value={PhotoPath}
           onChange={(e)=>setPhotoPath(e.target.value)} />
        </Form.Group>
      </Row>

      </div>
</div>
</div>
<center>
      <Button variant="primary" type="submit">
      Enregistrer
      </Button>
      <Button variant="danger" type="button" onClick={()=>handleReset()}>
       Annuler
      </Button>
      </center>
    
    </Form>
</div>
    
  )
}

export default Ajoutemployee
