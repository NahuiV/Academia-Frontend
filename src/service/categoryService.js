import axios from 'axios';

const GETURL = `${process.env.REACT_APP_BACK_ENDPOINT}/categorias/findAll`;
const GETURL2 = `${process.env.REACT_APP_BACK_ENDPOINT}/categorias/find`;
const DELETEURL =`${process.env.REACT_APP_BACK_ENDPOINT}/categorias/delete`;

class categoryService{
    getCategories(id){
        return axios.get(`${GETURL}/${id}`,{
            method: 'get',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            mode: 'cors'    
            })
    }

    getCategoriesProveedor(id){
        return axios.get(`${GETURL2}/${id}`,{
            method: 'get',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            mode: 'cors'    
            })
    }

    deleteCategory(id){
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

export default new categoryService();