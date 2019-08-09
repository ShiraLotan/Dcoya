import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

import './Table.css';

function Workertable() {
  const rows = [
   
  ];
  
  return (
    <div className="workertable">
    <Paper >
      <Table className='fullTable'>
        <TableHead>
          <TableRow>
            <TableCell className='topHead' align="right">ID <div> <Input className='inpLine' /><IconButton className='searchIcon' aria-label="search" ><SearchIcon className='searchImg'/></IconButton ></div></TableCell>
            <TableCell className='topHead' align="right">FISRT NAME <div><Input className='inpLine'/><IconButton className='searchIcon' aria-label="search" ><SearchIcon className='searchImg' /></IconButton ></div></TableCell>
            <TableCell className='topHead' align="right">LAST NAME  <div><Input className='inpLine'/><IconButton className='searchIcon' aria-label="search" ><SearchIcon className='searchImg'/></IconButton ></div></TableCell>
            <TableCell className='topHead' align="right">EMAIL <div> <Input /><IconButton className='searchIcon' aria-label="search" ><SearchIcon className='searchImg'/></IconButton ></div></TableCell>
            <TableCell className='topHead' align="right">PHONE NUMBER <div> <Input /><IconButton className='searchIcon' aria-label="search" ><SearchIcon className='searchImg'/></IconButton ></div></TableCell>
            <TableCell className='topHead' align="right">DEPARTMENT  <div><Input /><IconButton className='searchIcon' aria-label="search" ><SearchIcon className='searchImg'/></IconButton ></div></TableCell>
            <TableCell className='topHead' align="right">ROLE  <div><Input /><IconButton className='searchIcon' aria-label="search" ><SearchIcon className='searchImg'/></IconButton ></div></TableCell>
            <TableCell className='topHead' align="right">MANAGER  <div><Input /><IconButton className='searchIcon' aria-label="search" ><SearchIcon className='searchImg'/></IconButton ></div></TableCell>
            <TableCell className='topHead' align="right">BRANCH  <div><Input /><IconButton className='searchIcon' aria-label="search" ><SearchIcon className='searchImg'/></IconButton ></div></TableCell>
            <TableCell className='topHead' align="right">COUNTRY  <div><Input /><IconButton className='searchIcon' aria-label="search" ><SearchIcon className='searchImg'/></IconButton ></div></TableCell>
            <TableCell className='topHead' align="right">GROUP  <div><Input /><IconButton className='searchIcon' aria-label="search" ><SearchIcon className='searchImg'/></IconButton ></div></TableCell>






          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
  );
}

export default Workertable;
