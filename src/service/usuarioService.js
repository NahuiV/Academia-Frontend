import axios from 'axios';

const GETURL = `${process.env.REACT_APP_BACK_ENDPOINT}/categorias/findUser`;
const GETURL2 = `${process.env.REACT_APP_BACK_ENDPOINT}/categorias/find`;
const DELETEURL =`${process.env.REACT_APP_BACK_ENDPOINT}/categorias/delete`;

class usuarioService{
    verificarUsuario(username,password){
        return axios.get(`${GETURL}/${username}/${password}`,{
            method: 'get',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            mode: 'cors'    
            })
    }

    
    deleteUsuario(id){
        return axios.delete(`${DELETEURL}/${id}`,{
                    method: 'delete',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    mode: 'cors' 
        })
    }
}

export default new usuarioService();