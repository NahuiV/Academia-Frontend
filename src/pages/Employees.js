import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import employeeService from '../service/employeService';
import FormEmpleado from '../components/Forms/FormEmpleado';
import Confirmation from '../components/Confirmation';
import NavBar from '../components/NavBar/NavBar';


const Employees = ()=>{

    const [empleados,setEmpleados] = useState([])
    const isAdmin = true

    useEffect(()=>{
        employeeService.getEmployees()
        .then((res) => {
            setEmpleados(res.data)
        })     
    },[])

    return (
        <>
        <NavBar nombre="Empleados"/>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell align="right">Apellido</TableCell>
                <TableCell align="right">Supervisor</TableCell>
                {isAdmin && <TableCell>Acciones</TableCell>}
            </TableRow>
            </TableHead>
            <TableBody>
            {empleados.map((empleado) => (
                <TableRow key={empleado.id}>
                    <TableCell>{empleado.id}</TableCell>
                    <TableCell>{empleado.nombre}</TableCell>
                    <TableCell>{empleado.supervisor.nombre + " " + empleado.supervisor.apellido}</TableCell>
                    {isAdmin && 
                    <TableCell>
                        {console.log(empleado)}
                        <FormEmpleado data={empleado}/>
                        <Confirmation id={empleado.id}/>
                    </TableCell>}
                </TableRow>
                ))}
            </TableBody>
        </Table>
        </TableContainer>
    </>
    );
}

export default Employees;