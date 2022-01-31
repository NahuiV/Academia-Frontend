import React , {useState} from 'react'
import TextField from '@mui/material/TextField';
import { InputLabel, MenuItem, Select } from '@mui/material';


const infoClient = () =>{
    
    const [client,setClient] = useState('')
    const [age, setAge] = useState('')

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return(
        <>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Nombre"
            defaultValue={client.nombre}
          />
          <TextField
            required
            id="outlined-required"
            label="Apellido"
            defaultValue={client.apellido}
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Nombre"
            defaultValue={client.nombre}
          />
          <TextField
            required
            id="outlined-required"
            label="Apellido"
            defaultValue={client.apellido}
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Nombre"
            defaultValue={client.razonSocial}
          />
          <TextField
            required
            id="outlined-required"
            label="Apellido"
            defaultValue={client.DNI}
          />
        </div>
        <div>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Tipo de cliente"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
        </>
    )
}

export default infoClient