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
export const DataTable = ({pathType}) => {
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
     const [data,setData]=useState([]);
     const [dataCopy,setDataCopy]=useState([]);
    const [sortBy,setSortBy]=useState({
        property:'',
        order:0
    })
    const SortData=(key)=>{
        setSortBy({property:key,order:!sortBy.order})
        let temp=dataCopy.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
        setDataCopy(sort(temp,key,sortBy.order))

    }
    useEffect(()=>{
        getData(pathType).then(_data=>{
            setData(_data)
            setDataCopy(_data)
        })
    },[])
    return (
      <>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table" stickyHeader={true}>
            <TableHead>
              <TableRow>
                  {
                      data[0] && Object.keys(data[0]).map(key=>{
                          return(
                            <TableCell
                            key={key}
                            >
                            <div className="tableHeader__label" onClick={()=>{SortData(key)}}>
                                {
                                    sortBy.property===key ?
                                    sortBy.order ? <ArrowUpwardIcon /> : <ArrowDownwardIcon/>
                                    :
                                    <></>

                                }
                                {captialize(key)}
                            </div>
                            </TableCell>
                          )
                      })
                  }
              </TableRow>
            </TableHead>
            <TableBody>
              {dataCopy && dataCopy.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(item => {
                return (<TableRow key={item[0]}>
                {
                    Object.values(item).map(value=>{
                        return   <TableCell align="right">{value}</TableCell>
                    })
                }
                </TableRow>)
              
              })
                
            }
            </TableBody>
          </Table>
        </TableContainer>
         <TablePagination
         rowsPerPageOptions={[5,10, 15, 25]}
         component="div"
         count={dataCopy.length}
         rowsPerPage={rowsPerPage}
         page={page}
         onChangePage={handleChangePage}
         onChangeRowsPerPage={handleChangeRowsPerPage}
       />
       </>
      );
}
