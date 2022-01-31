import React, {useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import productService from '../service/productService';
import FormProduct from '../components/Products/FormProduct';
import Confirmation from '../components/Confirmation';
import { Pagination, PaginationItem, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NavBar from '../components/NavBar/NavBar';

const Product = () => {
    const [productos,setProducts] = useState([])
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const isEmpleado = true

    useEffect(()=>{
        productService.getProducts()
        .then((res) => {
            setProducts(res)
        })     
    },[])

        return(
        <>
            <NavBar nombre="Productos"/>
                <FormProduct type="Agregar"/> 
                <Table size="small"> 
                <TableHead>
                    <TableRow>
                    <TableCell align="center">id</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell >Precio</TableCell>
                    <TableCell>Stock</TableCell>
                    <TableCell>Proveedor</TableCell>
                    {isEmpleado && <TableCell>Acciones</TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productos.map((product) => (
                    <TableRow key={product.id}>
                        <TableCell>{product.id}</TableCell>
                        <TableCell>{product.nombre}</TableCell>
                        <TableCell align="right">{`$${product.precio}`}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell>{product.proveedor.nombre}</TableCell>
                        {isEmpleado && 
                        <TableCell>
                            {console.log(product)}
                            <FormProduct type="Editar" data={product} proveedor={product.proveedor.nombre}/>
                            <Confirmation id={product.id}/>
                        </TableCell>}
                    </TableRow>
                    ))}
                    
                </TableBody>
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
                </Table>
        </>
        )
}

export default Product;