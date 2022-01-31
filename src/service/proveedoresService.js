import axios from 'axios';

const GETURL = `${process.env.REACT_APP_BACK_ENDPOINT}/proveedores/findAll`
const DELETEURL = `${process.env.REACT_APP_BACK_ENDPOINT}/proveedores/delete`

class proveedoresService{
    getProveedores(){
        return axios.get(`${GETURL}`,{
            method: 'get',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            mode: 'cors'    
            })
    }

    deleteProvider(id){
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

export default new proveedoresService();