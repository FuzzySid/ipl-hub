import React,{useState,useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import { search } from '../utils/search';
import SearchIcon from '@material-ui/icons/Search';

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
        <TextField 
          onChange={handleChange} 
          value={searchQuery}  
          id="standard-basic" 
          label={searchPlaceholder} 
        />
    );
}
