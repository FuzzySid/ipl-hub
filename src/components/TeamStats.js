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
export const TeamStats = () => {
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
    const [teamStats,setTeamStats]=useState([]);
    const [teamStatsCopy,setTeamStatsCopy]=useState([]);
    const [sortBy,setSortBy]=useState({
        property:'',
        order:0
    })
    const SortData=(key)=>{
        setSortBy({property:key,order:!sortBy.order})
        let temp=teamStatsCopy;
        setTeamStatsCopy(sort(temp,key,sortBy.order))

    }
    useEffect(()=>{
        getData(paths.GET_TEAM_STATS).then(_teamStats=>{
            setTeamStats(_teamStats)
            setTeamStatsCopy(_teamStats)
        })
    },[])
    return (
      <>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table" stickyHeader={true}>
            <TableHead>
              <TableRow>
                  {
                      teamStats[0] && Object.keys(teamStats[0]).map(_statKey=>{
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
              {teamStatsCopy && teamStatsCopy.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((
                  {team,home_wins,away_wins,home_matches,away_matches,home_win_percentage,away_win_percentage
                }) => (
                <TableRow key={team}>
                  <TableCell component="th" scope="row">
                    {team}
                  </TableCell>
                  <TableCell align="right">{home_wins}</TableCell>
                  <TableCell align="right">{away_wins}</TableCell>
                  <TableCell align="right">{home_matches}</TableCell>
                  <TableCell align="right">{away_matches}</TableCell>
                  <TableCell align="right">{home_win_percentage}</TableCell>
                  <TableCell align="right">{away_win_percentage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
         <TablePagination
         rowsPerPageOptions={[5,10, 15, 25]}
         component="div"
         count={teamStatsCopy.length}
         rowsPerPage={rowsPerPage}
         page={page}
         onChangePage={handleChangePage}
         onChangeRowsPerPage={handleChangeRowsPerPage}
       />
       </>
      );
}
