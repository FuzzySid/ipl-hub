import React from 'react'
import './Nav.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export const Nav = ({setNav}) => {
    const classes = useStyles();

    return (
        <div className="nav">          
  <List className={classes.root}>
    <Divider variant="inset" component="li" />
    <ListItem alignItems="flex-start" onClick={()=>{setNav(3)}}>
      <ListItemAvatar>
        <Avatar alt="Travis Howard" src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/02/15/548772-ipl-2017.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Teamwise Statistics"
        secondary={
          <>
            {"Explore winning statistics and percentage of all teams."}
          </>
        }
      />
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem alignItems="flex-start" onClick={()=>{setNav(4)}}>
      <ListItemAvatar>
        <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOz9aeR46M7OtbwR4paOulDcfVBaXZuEE_w&usqp=CAU" />
      </ListItemAvatar>
      <ListItemText
        primary="Matches"
        secondary={
          <>
            {'Search, sort and filter through every match happened in the IPL history'}
          </>
        }
      />
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem alignItems="flex-start" onClick={()=>{setNav(5)}}>
      <ListItemAvatar>
        <Avatar alt="Cindy Baker" src="https://m.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/10/19/Pictures/ipl-2020-kolkata-knight-riders-royal-rajasthan_42888e34-122d-11eb-9315-b00ef9141a48.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Batsman Statistics"
        secondary={
          <>
            {'View strikerates, avergaes and total runs of all batsman'}
          </>
        }
      />
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem alignItems="flex-start" onClick={()=>{setNav(6)}}>
      <ListItemAvatar>
        <Avatar alt="Cindy Baker" src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/10/pjimage-2020-10-06t202400-1601996045.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Players"
        secondary={
          <>
            {'Search and filter through players and their details'}
          </>
        }
      />
    </ListItem>
    <Divider variant="inset" component="li" />

  </List>
        </div>
    )
}
