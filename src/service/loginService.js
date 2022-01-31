const ENDPOINT = 'http://localhost:8080'

const loginService = ({username,password}) =>{
    return(
        fetch(`${ENDPOINT}/usuarios`,{
            method: 'POST',
            header:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({username,password})
        }).then(res=>{
            if(!res.ok) throw new Error('Response is not ok')
            return res.json()
        }).then(res=>{
            const {jwt} = res
            return jwt
        })
    )
}

export default loginService;