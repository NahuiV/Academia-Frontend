import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import providerService from '../service/proveedoresService';
import FormProduct from '../components/Products/FormProduct';
import Confirmation from '../components/Confirmation';
import {Typography } from '@mui/material';
import DialogCategoria from '../components/Dialogs/DialogCategoria';
import NavBar from '../components/NavBar/NavBar';

const Providers = ()=>{
    const [proveedores,setProveedores] = useState([])
    
    useEffect(()=>{
        providerService.getProveedores()
        .then((res)=>{
            setProveedores(res.data)
        })
    },[])

    const isAdmin = true

    return (
        <>
            <NavBar nombre="Proveedores"/>
            <FormProduct type="Agregar"/> 
            <Table size="small"> 
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Direccion</TableCell>
                    <TableCell>CUIT</TableCell>
                    <TableCell>Categorias</TableCell>
                    {isAdmin && <TableCell>Acciones</TableCell>}
                </TableRow>
            </TableHead>
            <TableBody>
                {proveedores.length !== 0 &&
                proveedores.map((proveedor) => (
                <TableRow key={proveedor.id}>
                    <TableCell>{proveedor.id}</TableCell>
                    <TableCell>{proveedor.nombre}</TableCell>
                    <TableCell>{proveedor.direccion}</TableCell>
                    <TableCell>{proveedor.cuit}</TableCell>
                    <TableCell>
                        <DialogCategoria id={proveedor.id}/>
                    </TableCell>
                    {isAdmin && 
                    <TableCell>
                        <FormProduct type="Editar" data={proveedor} proveedor={proveedor.direccion}/>
                        <Confirmation id={proveedor.id} name="Proveedor"/>
                    </TableCell>}
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </>
        )
}

export default Providers;