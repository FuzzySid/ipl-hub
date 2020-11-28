export const search=(data,searchParams,query)=>{
    const searchedData=data.filter((item,ind)=>{
        let shouldInclude=false;
        searchParams.forEach(searchParam=>{
            if(item[searchParam] && item[searchParam].toLowerCase().includes(query)){
            shouldInclude=true;
            return;
            }
        })
        return shouldInclude
    })
    return searchedData;
}