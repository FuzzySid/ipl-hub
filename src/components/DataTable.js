import React,{useState,useEffect} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import { getData, paths } from '../API';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { captialize } from '../utils/capitalize';
import { sort } from '../utils/sort';
import { getPathType } from '../utils/getPathType';
import { BackButton } from './buttons/BackButton';
import { Search } from './Search';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
export const DataTable = ({nav,setNav}) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const tableType=getPathType(nav);
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
        let temp=dataCopy
        //.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
        setDataCopy(sort(temp,key,sortBy.order))

    }
    useEffect(()=>{
        getData(tableType.path).then(_data=>{
            setData(_data)
            setDataCopy(_data)
        })
    },[])
    return (
      <>
      <div class="header">
          <BackButton nav={nav} setNav={setNav} />
          <h3>{tableType.title}</h3>
          <Search data={data} setSearchedData={setDataCopy} searchPlaceholder={tableType.searchPlaceholder} searchParams={tableType.searchParams}/>
      </div>
      <TableContainer>
          <Table className={classes.table} aria-label="simple table" stickyHeader={true}>
            <TableHead>
              <TableRow align="right">
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
                                <span class="tableHeader__label">{captialize(key)}</span>
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
                return (<TableRow key={item[0]} align="right">
                {
                    Object.values(item).map(value=>{
                        return   <TableCell >{value}</TableCell>
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
