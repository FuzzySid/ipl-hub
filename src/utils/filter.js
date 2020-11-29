import { capitalize } from "./capitalize";

export const filter=(data,filter)=>{
    let filteredData=data.filter((item)=>{
        let shouldInclude=true;
        let parsedItem={}
        for(let [key,val] of Object.entries(item)){
            parsedItem[capitalize(key)]=val
        }
        Object.keys(filter).forEach(_filterKey=>{
            //console.log(_filterKey,parsedItem)
            const a=filter[_filterKey].map(_val=>capitalize(_val).toLowerCase().replace(/\s+/g, ''))
            const b=capitalize(parsedItem[_filterKey]).toLowerCase().replace(/\s+/g, '');
            
            if(a.indexOf(b)===-1){
                console.log('false for',a,b,typeof(b))
                shouldInclude=false;
                return;
            }else{
                console.log(a,b)
            }
        })
        return shouldInclude;
    })
    return filteredData;
}