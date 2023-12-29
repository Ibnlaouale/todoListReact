import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <hr />
        <h2 style={{textAlign:'center', color:'#6aa7aa'}}>Description</h2>
        <Box sx={{ bgcolor: '#cfe8fc', height: '25vh', textAlign:'center', borderRadius:'10px' }} >
        <p>hello</p>
        </Box>
      </Container>
    </React.Fragment>
  );
}