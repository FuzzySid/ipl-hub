import { capitalize } from "./capitalize";

export const filter=(data,filter)=>{
    let filteredData=data.filter((item)=>{
        let shouldInclude=true;
        let parsedItem={}
        for(let [key,val] of Object.entries(item)){
            parsedItem[capitalize(key)]=val
        }
        Object.keys(filter).forEach(_filterKey=>{
            const filteredParams=filter[_filterKey].map(_val=>capitalize(_val).toLowerCase().replace(/\s+/g, ''))
            const currentItem=capitalize(parsedItem[_filterKey]).toLowerCase().replace(/\s+/g, '');
            if(filteredParams.length>0 && filteredParams.indexOf(currentItem)===-1){
                shouldInclude=false;
                return;
            }
            
        })
        return shouldInclude;
    })
    return filteredData;
}