const ENDPOINT = "http://localhost:8080/api/ordenes"


const getOrders = () =>{
    return(
        fetch(`${ENDPOINT}/ordenes`,{
            method: "GET",
            header: {
                "Content-type": "application/json"
            },
            body:JSON.stringify()
        })
        .then(res=>{
            
        })
    )
}

export default getOrders;