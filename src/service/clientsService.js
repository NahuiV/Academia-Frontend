import axios from 'axios';

const GETPOINT = `${process.env.REACT_APP_BACK_ENDPOINT}/clientes/findAll`
const SAVEENDPOINT = `${process.env.REACT_APP_BACK_ENDPOINT}/clientes/save`
const DELETEURL = `${process.env.REACT_APP_BACK_ENDPOINT}/clientes/delete`

class ClienteService{
    getClients(){
        return(
            fetch(GETPOINT,{
                    method: 'get',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    mode: 'cors'
                })
                .then(response => response.json()) 
        )
    }

    saveClient(data){
        return axios.post(`${SAVEENDPOINT}`,data,{
                    method: 'post',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    mode: 'cors'    
        }).catch(err=> console.error(err))
    }

    deleteClient(id){
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
export default new ClienteService();