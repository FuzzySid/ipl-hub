export const sort=(arrObj,key,order)=>{
    function comparatorFun( a, b ) {
        if (a[key] < b[key] ){
          return order?-1:1;
        }
        if (a[key] > b[key]){
          return order?1:-1;
        }
        return 0;        
    }
    return arrObj.sort(comparatorFun)
}