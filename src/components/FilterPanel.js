import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
import Tooltip from '@material-ui/core/Tooltip';
import FormControl from '@material-ui/core/FormControl';
import {capitalize} from '../utils/capitalize';
import { getUniqeValues } from '../utils/getUniqueValues';
import { Filter } from './Filter';
import './FilterPanel.css';

const useStyles = makeStyles((theme)=>({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export const FilterPanel = ({data,setFilteredData,filterParams}) => {
  const classes=useStyles()
  const [open, setOpen] = React.useState(false);

  let initFilters={}
  let initSelectedFilters=filterParams.reduce((obj,filterParam)=> 
      Object.assign(obj,{[capitalize(filterParam)]:[]})
    ,{})
  console.log(initFilters)
  filterParams.map(filterParam=>
    initFilters[capitalize(filterParam)]=getUniqeValues(data,filterParam)
  )
  
  const [selectedFilters,setSelectedFilters]=useState(initSelectedFilters);

  const toggleDrawer = (toggleState) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(toggleState);
  };

  return (
    <div className="filterPanel">
    <Tooltip title="Adjust Filters">
          <Button aria-label="Adjust Filters" onClick={toggleDrawer(true)}>
              <FilterListIcon/>
          </Button>
    </Tooltip>
          <SwipeableDrawer
            anchor={"bottom"}
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <FormControl component="fieldset" className={classes.formControl}>
            <h4>Add Filters</h4>
              <Filter 
                data={data} 
                setFilteredData={setFilteredData} 
                initSelectedFilters={initSelectedFilters}
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
                filters={initFilters}
              />
            </FormControl>
          </SwipeableDrawer>
     
    </div>
  );
}
