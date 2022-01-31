import React, {useState,useEffect} from 'react';
import CartClient from '../components/Clients/CartClient';
import serviceClient from '../service/clientsService';
import Container from '@mui/material/Container';
import FormProduct from '../components/Products/FormProduct';
import Confirmation from '../components/Confirmation';
import { Pagination, PaginationItem, Stack, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NavBar from '../components/NavBar/NavBar';


const Clients = () => {
    const [clientsData,setClients] = useState([])

    useEffect(() => {
        serviceClient.getClients()
        .then(clients =>{   
          setClients(clients.data)
        })
    }, []);


    return(
        <>
        <NavBar nombre="Clientes"/>
        <Container maxWidth="sm">
            {clientsData.map(cliente=>(<CartClient data={cliente}/>))}
        </Container>
        <FormProduct type="Agregar"/> 
        <Table size="small"> 
        <TableHead>
            <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Razon Social</TableCell>
            <TableCell>CUIT/DNI</TableCell>
            <TableCell>Tipo de cliente</TableCell>
            <TableCell>Acciones</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {clientsData.map((client) => (
            <TableRow key={client.id}>
                <TableCell>{client.id}</TableCell>
                <TableCell>{client.nombre}</TableCell>
                <TableCell >{client.apellido}</TableCell>
                <TableCell>{client.razonSocial}</TableCell>
                <TableCell>{client.CUITDNI}</TableCell>
                <TableCell>{client.tipo}</TableCell> 
                <TableCell>
                    <FormProduct type="Editar" data={client} proveedor={client}/>
                    <Confirmation id={client.id} name="Clientes"/>
                </TableCell>
            </TableRow>
            ))}
            <Stack spacing={2}>
            <Pagination
                count={10}
                renderItem={(item) => (
                <PaginationItem
                    components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                />
                )}
            />
            </Stack>
        </TableBody>
        </Table>
    </>
    )
}

export default Clients;