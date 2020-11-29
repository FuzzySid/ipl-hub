import React from 'react'
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { filter } from '../utils/filter';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
    margin:'40px 20px'
  },
}));

export const Filter = ({data,setFilteredData,initSelectedFilters,selectedFilters,setSelectedFilters,filters}) => {
    const classes = useStyles();

    const handleChange=(param,val)=>{
        console.log(param,val)
        let temp=selectedFilters[param];
        if(!val || temp.includes(val)) return;
        else temp.push(val)
        setSelectedFilters({...selectedFilters,[param]:temp})
    }
    
    const RemoveFilter=(param,filterParam)=>{
        setSelectedFilters({
            ...selectedFilters,
            [param]:selectedFilters[param].filter(filter=>filter!==filterParam)
        })
    }

    const CancelFilters=()=>{
      setSelectedFilters(initSelectedFilters)
      setFilteredData(data)
    }

    const ApplyFilters=()=>{
        const filteredData=filter(data,selectedFilters);
        setFilteredData(filteredData)
    }

    return(
        <>
        <div className="filter">
            {
              filters && Object.keys(filters).map((param)=>{
                  return(
                    <div className={classes.root}>
                    <Autocomplete
                      id="tags-standard"
                      options={filters[param]}
                      getOptionLabel={(option) => option}
                      onChange={(e,val)=>{handleChange(param,val)}}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          label={'Filter by '+param}
                          placeholder={"Search and Select"}
                        />
                      )}
                      />
                      { selectedFilters && selectedFilters[param] && selectedFilters[param].map((filterParam)=>{
                          return(
                            <Chip
                            label={filterParam}
                            key={filterParam}
                            onDelete={()=>RemoveFilter(param,filterParam)}
                          />                          
                          )
                      })}
                    </div>
                    
                  )
              })
              }
            <div class="filter__action">
                <button className="btn applyBtn navBtn" onClick={ApplyFilters}>Apply</button>
                <button className="btn cancelBtn" onClick={CancelFilters}>Cancel</button>
            </div>
        </div>
  </>
    )
}
