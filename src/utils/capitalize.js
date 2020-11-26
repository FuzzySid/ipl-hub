export const captialize=(string)=>{
    const charArr=string.split('_');
    let captialized="";
    charArr.forEach(char=>{
        captialized+=`${char.replace(char[0],char[0].toUpperCase())} `;
    })
    return captialized;
}