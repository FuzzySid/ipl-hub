import { paths } from "../API";

export const getPathType=(nav)=>{
    if(nav===3)
    return { 
        path:paths.GET_TEAM_STATS,
        title:'Team Wise Statistics',
        searchPlaceholder: 'Search by team name',
        searchParams:['team']
    };
    else if(nav===4)
    return {
        path:paths.GET_MATCHES,
        title:'Match Wise Statistics',
        searchPlaceholder:'Search by city,team,venue,players or umpire',
        searchParams:['team1','team2','toss-winner','winner','player_of_match','venue','umpire1','umpire2','umpire3']
    };
    else if(nav===5)
    return {
        path:paths.GET_BATSMEN_STATS,
        title:'Batting Statistics of Players',
        searchPlaceholder:'Search by player name',
        searchParams:['batsman']
    };
    else if(nav===6)
    return {
        path:paths.GET_PLAYERS,
        title:'General Details of Players',
        searchPlaceholder:'Search by player name or country',
        searchParams:['Player_Name','Country']
    };
}