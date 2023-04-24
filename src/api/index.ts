import { requestParams } from "~/util/request"

export const getTopic=async(params:{page:number,limit:number,mdrender:boolean})=>{
    const requestOptions:any=requestParams('get','')
    return await useFetch('/api/v1/topics',{
       ...requestOptions,...params
    })
}