import React,{useState} from 'react'
import { Home } from '../views/Home';
import { BackButton } from './buttons/BackButton';
import './Main.css';
import { Nav } from './Nav';
import './DataTable';
import { DataTable } from './DataTable';
import { paths } from '../API';

export const Main = () => {
    const [nav,setNav]=useState(1);
    const getPathType=()=>{
        if(nav===3)
        return paths.GET_TEAM_STATS;
        else if(nav===4)
        return paths.GET_MATCHES;
        else if(nav===5)
        return paths.GET_BATSMEN_STATS;
        else if(nav===6)
        return paths.GET_PLAYERS;
    }
    return (
        <div className="page">
        <div className="card">
            { nav>=2 && <BackButton nav={nav} setNav={setNav} /> } 

            {nav<=2 ? 
            <>
                <div class="container">
                        { nav===1 && <Home setNav={setNav}/> }
                        { nav===2 && <Nav setNav={setNav}/> }
                </div>
              <div className="photo"></div>
            </>
            :
            <div className="table_container">
            <DataTable pathType={getPathType()} />
            </div>
            }
                      
            
        </div>
      </div>
    )
}
