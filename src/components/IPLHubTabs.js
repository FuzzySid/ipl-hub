import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { TeamStats } from './TeamStats';
import { Container } from '@material-ui/core';
import { Matches } from './Matches';
import { DataTable } from './DataTable';
import { paths } from '../API';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        style={{backgroundColor:'#80808038'}}
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Container p={3}>
            <Typography>{children}</Typography>
          </Container>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));
export const IPLHubTabs = () => {
const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Team Stats" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <DataTable pathType={paths.GET_TEAM_STATS} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DataTable pathType={paths.GET_MATCHES} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DataTable pathType={paths.GET_BATSMEN_STATS} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <DataTable pathType={paths.GET_PLAYERS} />
      </TabPanel>
    </div>
  )
}
