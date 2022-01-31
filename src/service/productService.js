import axios from 'axios';

const ENDPOINT = `${process.env.REACT_APP_BACK_ENDPOINT}/productos/findAll`
const SAVEENDPOINT = `${process.env.REACT_APP_BACK_ENDPOINT}/productos/save`
const DELETEURL = `${process.env.REACT_APP_BACK_ENDPOINT}/productos/delete`
const UPDATEURL = `${process.env.REACT_APP_BACK_ENDPOINT}/clientes/update`

class ProductService{
    getProducts(){
        return(
            fetch(ENDPOINT,{
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

    saveProduct(data,proveedor){
        return axios.post(`${SAVEENDPOINT}/${proveedor}`,data,{
                    method: 'post',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    mode: 'cors'    
        }).catch(err=> console.error(err))
    }

    updateProduct(data,proveedor){
        return axios.put(`${UPDATEURL}/${proveedor}`,data,{
            method: 'put',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            mode: 'cors'    
        }).catch(err=> console.error(err))
    }

    deleteProduct(id){
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
export default new ProductService();