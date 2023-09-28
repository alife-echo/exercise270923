function getAllUser (){
    return new Promise((resolve,reject)=>{
        reject(new Error('--------- Missing list user -----------'))
    })
}


async function instanceError() {
    try {
        const response = getAllUser()
        return response
    }
    catch(error){
        if(error instanceof Error){
            console.log(error.message)
        }
    }
}
instanceError()