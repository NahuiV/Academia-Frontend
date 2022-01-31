import React , {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate} from "react-router-dom";
import { IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import productService from '../../service/productService';
import proveedoresService from '../../service/proveedoresService';


const FormProduct = (props) => {
    const [open, setOpen] = useState(false);
    const [proveedores,setProveedores] = useState([])
    let titulo = "";
    let isNew = true
    let data = []
    let provider = props.proveedor
    let navigate = useNavigate();

    if (props.type === "Editar") {
        titulo = "Editar Producto";
        isNew = false
        data = props.data
    } else {
        isNew=true
        titulo = "Crear Nuevo Producto";
    }

    const [id,setId] = useState({isNew} ? data.id : "")
    const [name,setName] = useState({isNew}? data.nombre : "")
    const [precio,setPrecio] = useState({isNew} ? data.precio: "")
    const [stock,setStock] = useState({isNew} ? data.stock: "")
    const [proveedor,setProveedor] = useState({isNew} ? provider: "")

    useEffect(()=>{
        proveedoresService.getProveedores()
        .then((res) => {
            setProveedores(res.data)
        })     
    },[])
    
    const ProductoFinal = {
        id: id,
        nombre: name,
        precio: precio,
        stock: stock
    }

    const handleClickButton = () =>{
        console.log(JSON.stringify(ProductoFinal))
        isNew ? productService.saveProduct(JSON.stringify(ProductoFinal),proveedor) : productService.updateProduct(JSON.stringify(ProductoFinal),proveedor)
        handleClose()
    }



    const handleChange = (prop) => (event) => {
        switch (prop) {
            case 'id':
                setId(event.target.value)
                break;
            case 'nombre':
                setName(event.target.value)
                break;
            case 'precio':
                setPrecio(event.target.value)
                break;
            case 'stock':
                setStock(event.target.value)
                break;
            case 'proveedor':
                setProveedor(event.target.value)
                break;
          }
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div>
        {props.type === "Editar" ? <IconButton variant="outlined" onClick={handleClickOpen}  >
            <EditIcon/>
        </IconButton>
        :
            <Button onClick={handleClickOpen}>Agregar Producto</Button>
        }
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{titulo}</DialogTitle>
            <DialogContent>
            <TextField
                margin="dense"
                placeholder="Nombre"
                id="name"
                label={name}
                type="username"
                fullWidth
                value={name}
                onChange={handleChange('nombre')}
            />
            <InputLabel htmlFor="outlined-adornment-amount">Precio</InputLabel>
            <OutlinedInput
                id="outlined-adornment-amount"
                placeholder='Precio'
                value={precio}
                onChange={handleChange('precio')}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label={{isNew} === true ? "Precio" : precio}
            />
            <TextField
                autoFocus
                margin="dense"
                id="cantidad"
                placeholder="Stock"
                label={{isNew} === true ? "Stock" : stock}
                fullWidth
                variant="standard"
                value={stock}
                onChange={handleChange('stock')}
            />
            <InputLabel id="demo-simple-select-autowidth-label">Proveedor</InputLabel>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={proveedor}
                onChange={handleChange('proveedor')}
                autoWidth
            >
                {proveedores.map((categorie)=>(
                    <MenuItem key={categorie['nombre']} value={categorie['nombre']}>{categorie['nombre']}</MenuItem>
                    ))}
            </Select>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClickButton}>{titulo === "Editar" ? "Actualizar" : "Guardar"}</Button>
            <Button onClick={handleClose}>Cerrar</Button>
            </DialogActions>
        </Dialog>
    </div>
    )
}

export default FormProduct;