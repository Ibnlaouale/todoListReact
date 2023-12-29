import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';

const tableTasks = JSON.parse(localStorage.getItem('tableTasks'));
// console.log(tableTasks);

function createData(id, categorie, titre, date, description, statut) {
  return { id, categorie, titre, date, description, statut };
}
const row2 = tableTasks.map((el,index) => {
        return createData(el.id, el.categorie, el.titre,el.date, el.description, el.statut);
    })



export default function BasicTable() {
  return (
   <div style={{height:'400px',overflowY:'scroll', border:'2px solid red'}} >
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{backgroundColor:'#086171', color:'white', fontWeight:'bold'}}>
            <TableCell sx={{color:'white', fontWeight:'bold', fontSize:'16px'}} >#</TableCell>
            <TableCell sx={{color:'white', fontWeight:'bold', fontSize:'16px'}} align="center">Date</TableCell>
            <TableCell sx={{color:'white', fontWeight:'bold', fontSize:'16px'}} align="center">Titre</TableCell>
            <TableCell sx={{color:'white', fontWeight:'bold', fontSize:'16px'}} align="center">Catégorie</TableCell>
            <TableCell sx={{color:'white', fontWeight:'bold', fontSize:'16px'}} align="center">Opérations</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row2.map((row, index) => (
            <TableRow key={row.index} >
              <TableCell component="th" scope="row">{index+1}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.titre}</TableCell>
              <TableCell align="center">{row.categorie}</TableCell>
              <TableCell align="center">
                <VisibilityIcon sx={{color:'#7FDAFB', cursor:'pointer'}} />
                <BorderColorIcon sx={{color:'#89BADC',mx:'5px', cursor:'pointer'}}/>
                <DeleteIcon sx={{color:'red', cursor:'pointer'}}/>
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </div>
  );
}
