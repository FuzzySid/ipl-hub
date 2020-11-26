import React,{useState,useEffect} from 'react'
import { getData, paths } from '../API'
import Chip from '@material-ui/core/Chip';

export const Teams = () => {
    const [teams,setTeams]=useState([])
    useEffect(()=>{
        getData(paths.GET_ALL_TEAMS).then(_teams=>setTeams(_teams))
    },[])
    return (
        <div>
            {
                teams && teams.map(({team1})=>{
                    return(
                        <Chip size="small" label={team1} key={team1} />
                    )
                })
            }
        </div>
    )
}
