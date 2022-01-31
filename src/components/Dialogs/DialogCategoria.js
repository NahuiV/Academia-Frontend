import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import categoryService from '../../service/categoryService';

const DialogCategoria= (props) =>{
    const [open, setOpen] = React.useState(false);
    
    const [categorias,setCategorias] = React.useState([])

    React.useEffect(()=>{
        categoryService.getCategoriesProveedor(props.id)
        .then((res)=>{
            setCategorias(res.data)
        })
    },[])
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
           Ver Categorias
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Categorias</DialogTitle>
          <DialogContent>
            <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 300,
                '& ul': { padding: 0 },
            }}>
                {categorias.map((item) => (
                    <ListItem key={`item-${item.descripcion}`}>
                        <ListItemText primary={item.descripcion} />
                    </ListItem>
                    ))}
                </List>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cerrar</Button>
            </DialogActions>
      </Dialog>
        </div>
  );
}

export default DialogCategoria;