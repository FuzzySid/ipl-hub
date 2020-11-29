export const sort=(arrObj,key,order)=>{
    function comparatorFun( a, b ) {
      // if(a[key]!=='null' && a[key]!=='undefined' && a[key]!=='' &&  b[key]!=='null' && b[key]!=='undefined' && b[key]!==''){
        if (a[key] < b[key] ){
          return order?-1:1;
        }
        if (a[key] > b[key]){
          return order?1:-1;
        }
        return 0;
      // }
        
    }
    return arrObj.sort(comparatorFun)
}