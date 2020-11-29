import { capitalize } from "./capitalize";

export const getUniqeValues=(data,param)=>{
    let uniqueValues=new Set();
    data.forEach(item=>{
        if(item[param])
        uniqueValues.add(capitalize(item[param]))
    })
    return [...uniqueValues]
}