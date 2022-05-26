import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useThemeProps from '@mui/material/styles/useThemeProps';
import { Link } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);
//here we have changed props.item to item , shortcut discussed with arpit, same effect as props.item
export default function UserCard({item}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         Full Name: {item.name}
        </Typography>
        <Typography variant="h5" component="div">
         User Name: {item.username}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Email : {item.email}
        </Typography>
        <Typography variant="body2">
          Phone: {item.phone}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to= {`/user/${item.username}`}               // link to userdetails , data stored in user data and check userdetails code
        state={{userData: item}}
        ><div>learn more</div></Link> 
        
        
        
      </CardActions>
    </Card>
  );
}
