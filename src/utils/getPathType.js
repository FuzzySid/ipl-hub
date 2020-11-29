import { paths } from "../API";

export const getPathType=(nav)=>{
    if(nav===3)
    return { 
        path:paths.GET_TEAM_STATS,
        title:'Team Wise Statistics',
        searchPlaceholder: 'Search by team name',
        key:'team',
        searchParams:['team'],
        filterParams:[]
    };
    else if(nav===4)
    return {
        path:paths.GET_MATCHES,
        title:'Match Wise Statistics',
        searchPlaceholder:'Search by city,team,venue,players or umpire',
        key:'id',
        searchParams:['team1','team2','toss-winner','winner','player_of_match','venue','umpire1','umpire2','umpire3'],
        filterParams:['Season','city','winner','player_of_match','venue'],
    };
    else if(nav===5)
    return {
        path:paths.GET_BATSMEN_STATS,
        title:'Batting Statistics of Players',
        searchPlaceholder:'Search by player name',
        id:'batsman',
        searchParams:['batsman'],
        filterParams:[]
    };
    else if(nav===6)
    return {
        path:paths.GET_PLAYERS,
        title:'General Details of Players',
        searchPlaceholder:'Search by player name or country',
        id:'Player_Name',
        searchParams:['Player_Name','Country'],
        filterParams:['Batting_Hand','Bowling_Skill','Country']
    };
}