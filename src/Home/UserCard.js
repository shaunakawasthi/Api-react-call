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

export default function UserCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         Full Name: {props.item.name}
        </Typography>
        <Typography variant="h5" component="div">
         User Name: {props.item.username}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Email : {props.item.email}
        </Typography>
        <Typography variant="body2">
          Phone: {props.item.phone}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link to= {'/user/${props.item.username}'}
        state={{userData: props.item}}>Learn more </Link>
        
        </Button>
      </CardActions>
    </Card>
  );
}
