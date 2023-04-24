
export function requestParams(method:string,token:string){
   return{
    baseURL:'https://cnodejs.org',
    method:method,
    headers:{
        'Authorization':token,
        'Access-Control-Allow-Origin':'*'
    },
    onResponse({request,response,options}:any){
        if (response.code!=200) {
            ElMessage.error({
                message:'Error',
                type:'error'
            })
            return {
                message:'请求失败'
            }
        }
        return response.data
    },
    onResponseError({request,response,options}:any){
        return {
            message:'请求失败'
        }
    }   
   }

}