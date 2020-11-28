import React from 'react'
import './BackButton.css';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

export const BackButton = ({nav,setNav}) => {
    return (
            <a href="#" className="navBtn backBtn" onClick={()=>{setNav(nav>2?2:1)}}>
                <KeyboardBackspaceIcon/> Go Back
            </a>
    )
}
