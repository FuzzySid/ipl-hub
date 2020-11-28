import React,{useState,useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import { search } from '../utils/search';

export const Search = ({data,setSearchedData,searchPlaceholder,searchParams}) => {
    const [searchQuery,setSearchQuery]=useState('');
    const handleChange=e=>setSearchQuery(e.target.value);
    useEffect(()=>{
        if(searchQuery){
            const searchedData=search(data,searchParams,searchQuery.toLowerCase())
            setSearchedData(searchedData)
        }
        else
        setSearchedData(data)
    },[searchQuery])
    return (
      <form noValidate autoComplete="off" onChange={handleChange}>
        <TextField id="standard-basic" label={searchPlaceholder} />
      </form>
    );
}
