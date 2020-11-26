import React,{useState,useEffect} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { getData, paths } from '../API';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { captialize } from '../utils/capitalize';
import { sort } from '../utils/sort';
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
export const Matches = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
    const [matches,setMatches]=useState([]);
    const [matchesCopy,setMatchesCopy]=useState([]);
    const [sortBy,setSortBy]=useState({
        property:'',
        order:0
    })
    const SortData=(key)=>{
        setSortBy({property:key,order:!sortBy.order})
        let temp=matchesCopy
        // let temp=matchesCopy.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
        setMatchesCopy(sort(temp.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),key,sortBy.order))

    }
    useEffect(()=>{
        getData(paths.GET_MATCHES).then(_matches=>{
            console.log(_matches)
            setMatches(_matches)
            setMatchesCopy(_matches)
        })
    },[])
    return (
        <>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table" stickyHeader={true}>
            <TableHead>
              <TableRow>
                  {
                      matches[0] && Object.keys(matches[0]).map(_statKey=>{
                          return(
                            <TableCell
                            key={_statKey}
                            >
                            <div className="tableHeader__label" onClick={()=>{SortData(_statKey)}}>
                                {
                                    sortBy.property===_statKey ?
                                    sortBy.order ? <ArrowUpwardIcon /> : <ArrowDownwardIcon/>
                                    :
                                    <></>

                                }
                                {captialize(_statKey)}
                            </div>
                            </TableCell>
                          )
                      })
                  }
              </TableRow>
            </TableHead>
            <TableBody>
              {matchesCopy && matchesCopy.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((
                  {Season,city,date,dl_applied,id,player_of_match,result,team1,team2,toss_decision,toss_winner,
                    umpire1,umpire2,umpire3,venue,win_by_runs,win_by_wickets,winner
                }) => (
                <TableRow key={id}>

                  <TableCell align="right">{Season}</TableCell>
                  <TableCell align="right">{city}</TableCell>
                  <TableCell align="right">{date}</TableCell>
                  <TableCell align="right">{dl_applied}</TableCell>
                  <TableCell component="th" scope="row">
                    {id}
                  </TableCell>
                  <TableCell align="right">{player_of_match}</TableCell>
                  <TableCell align="right">{result}</TableCell>
                  <TableCell align="right">{team1}</TableCell>
                  <TableCell align="right">{team2}</TableCell>
                  <TableCell align="right">{toss_decision}</TableCell>
                  <TableCell align="right">{toss_winner}</TableCell>
                  <TableCell align="right">{umpire1}</TableCell>
                  <TableCell align="right">{umpire2}</TableCell>
                  <TableCell align="right">{umpire3}</TableCell>
                  <TableCell align="right">{venue}</TableCell>
                  <TableCell align="right">{win_by_runs}</TableCell>
                  <TableCell align="right">{win_by_wickets}</TableCell>
                  <TableCell align="right">{winner}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
         <TablePagination
         rowsPerPageOptions={[5,10, 15, 25]}
         component="div"
         count={matchesCopy.length}
         rowsPerPage={rowsPerPage}
         page={page}
         onChangePage={handleChangePage}
         onChangeRowsPerPage={handleChangeRowsPerPage}
       />
       </>
      );
}
