import React,{useState} from 'react'
import { Home } from '../views/Home';
import { BackButton } from './buttons/BackButton';
import './Main.css';
import { Nav } from './Nav';
import './DataTable';
import { DataTable } from './DataTable';

export const Main = () => {
    const [nav,setNav]=useState(1);

    return (
        <div className="main">
        <div className="main__card">
            { nav<=2 ? 
                    <>
                        <div class="main__container">
                                { nav===1 && <Home setNav={setNav}/> }
                                { nav===2 && <>
                                                <div class="header"><BackButton nav={nav} setNav={setNav}/></div>
                                                <Nav setNav={setNav}/>
                                            </> 
                                }
                        </div>
                        <div className="main__photo"></div>
                    </>
                    :
                        <div className="main__tableContainer">
                            <DataTable nav={nav} setNav={setNav} />
                        </div>
            } 
        </div>
      </div>
    )
}
