import axios from 'axios';

const GETPOINT = `${process.env.REACT_APP_BACK_ENDPOINT}/empleados/findAll`
const SAVEENDPOINT = `${process.env.REACT_APP_BACK_ENDPOINT}/empleados/save`
const DELETEURL = `${process.env.REACT_APP_BACK_ENDPOINT}/empleados/delete`

class EmployeeService{
    getEmployees(){
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

    saveEmploye(data){
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

    deleteEmploye(id){
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
export default new EmployeeService();