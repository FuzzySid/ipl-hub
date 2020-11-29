export const paths={
    'GET_TEAM_STATS':'./Team-Stats.json',
    'GET_BATSMEN_STATS':'./Batsmen-Stats.json',
    'GET_MATCHES':'./Matches.json',
    'GET_PLAYERS':'./Players.json'
}

export const getData=async(path)=>{
    const response=await fetch(path);
    const result=await response.json();
    return result;
}
