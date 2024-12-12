"use client"
//use client est aubligatoire si on utilise hooks,button,....
import { Box } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import React, { useMemo } from 'react'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { useRouter } from 'next/navigation';
import { deleteEmployee } from '@/services/employeeService';
import Button  from 'react-bootstrap/Button';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Link from 'next/link';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';



const Listemployees = ({employees}) => {
  //router pour la redirection
  const router = useRouter();
  //methode pour le bouton delete
  const handledelete=(id)=>{
  if(window.confirm("supprimer Livre O/N")) {
  deleteEmployee(id)
  .then((res)=>{ console.log(res)
  router.refresh()
  })
  .catch(error=>{
  console.log(error)
  })
  }
  }
  
  
//le tableau avec material react table
    const columns = useMemo(
        () => [
        {
        accessorKey: 'PhotoPath',
        header: 'AVATAR',
        Cell: ({ cell}) => (
        <Box
        sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        }}
        >
        <img
        src={cell.getValue()}
        alt="PhotoPath"
        height="50"
        width="50"
        />
        </Box>),
        },
        {
        accessorKey: 'FirstName',
        header: 'FIRST NAME',
        size: 50,
        },
        {
        accessorKey: 'LastName',
        header: 'LAST NAME',
        size: 50,
        },
         {
         accessorKey: 'Email',
         enableClickToCopy: true,
         filterVariant: 'autocomplete',
         header: 'EMAIL',
         size: 300,
         },
         {
         accessorKey: 'DateOfBirth',
         header: 'DATE OF BIRTH',
         size: 50,
         },
       
        // {
        // accessorFn: (originalRow) => originalRow.auteurs.map((aut,i)=>{
        // return <div key={i}>{aut.nomauteur}</div>
        // }),
        // id: 'aut._id',
        // header: 'AUTEURS',
        // },
        {
        accessorKey: 'departments.Name',
        header: 'DEPARTMENTS',
        size: 50,
        },
        {
          accessorKey: 'id',
          header: 'ACTION',
          size: 50,
          Cell: ({ cell, row }) => (
            <div>
<Button
           //bouton modifier 
            variant="success"
            size="md">
              {console.log("idddddd", cell.row.original._id)}
            <Link
            href={`/admin/employees/updateemployee/${cell.row.original._id}`}
            >
            <ModeEditOutlineIcon />
            </Link>

            </Button>
            <Button
            onClick={(e) => {
            handledelete(cell.row.original._id,e);
            }}
            variant="danger"
            size="md"
            className="text-danger btn-link delete"
            >
            <DeleteSweepIcon />
            </Button>

            </div>
            ),
            
          },
        
        ],
        [employees],
        );
        


  return (
    <div>
      
       <Button
           //bouton ajouter 
            variant="success"
            size="md">
            <Link
            href="/admin/employees/newemployee"
            style={{
            textDecoration: 'none',
            color: 'yellow',
            fontSize: 14,
            }}
            >
            <PersonAddAlt1Icon />NOUVEAU
            </Link>

            </Button>
      < MaterialReactTable columns={columns} data={employees}/>
    </div>
  )
}

export default Listemployees
