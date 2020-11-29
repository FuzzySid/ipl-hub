import React from 'react'

export const Home = ({setNav}) => {
    return (
        <>
        <div className="menu">
          <h3>ipl hub.</h3>
          <i className="fas fa-bars"></i>
        </div>
        <div className="content">
          <div className="text">
            <h1>Discover <br/>the world of IPL.</h1>
            <p>View participating teams, explore match-wise statistics, <br/>player-wise statistics and much more</p>
            <a href="#" className="navBtn" onClick={()=>{setNav(2)}}>Let's go !</a>
          </div>  
        </div>
      </>
    )
}
