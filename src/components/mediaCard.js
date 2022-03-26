import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link as LinkRouter} from 'react-router-dom'



export default function MediaCard(props) {
  return (
    <div className="wrapper">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        className="cardImage"
        component="img"
        image={process.env.PUBLIC_URL + "/images/" + props.city.img}
        alt="city"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          {props.city.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.city.country}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <LinkRouter to ={'/details/'+ props.city._id}>
        <Button size="small">Read More</Button>
        </LinkRouter>
      </CardActions>
    </Card>
    
    </div>
  );
}
