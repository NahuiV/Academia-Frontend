import React,{useState} from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import productService from '../service/productService';
import proveedoresService from '../service/proveedoresService';
import employeService from '../service/employeService';
import categoryService from '../service/categoryService';
import clientsService from '../service/clientsService';

const Confirmation = (props) => {
    const [open, setOpen] = useState(false);
        
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickDelete = () => {
        let value = props['id']
        let name = props['name']
        switch (name) {
            case "Producto":
                productService.deleteProduct(value)
                break;
            case 'Proveedor':
                proveedoresService.deleteProvider(value)
                break;
            case 'Empleado':
                employeService.deleteEmploye(value)
                break;
            case 'Categoria':
                categoryService.deleteCategory(value)
                break;
            case 'Cliente':
                clientsService.deleteClient(value)
                break;
        }
        handleClose()
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton variant="outlined" onClick={handleClickOpen}>
                <DeleteIcon/>
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {`Seguro que desea eliminar el siguiente ${props.name} ?`}
                </DialogTitle>
                <DialogContent>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClickDelete}>Eliminar</Button>
                <Button onClick={handleClose} autoFocus>
                    Cancelar
                </Button>
                </DialogActions>
            </Dialog>
            </div>
    );
}

export default Confirmation