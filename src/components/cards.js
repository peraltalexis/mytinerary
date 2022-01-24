import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export default function Cities() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="/src/images/paris.jpeg"
          alt="paris"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Paris
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Also known as the "City of Light" (la Ville lumière ), 
          it is the most popular tourist destination in the world, 
          with more than 42 million foreign visitors per year. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="/src/images/roma.jpg"
          alt="rome"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Rome
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Conocida también como la «Ciudad de la Luz» (la Ville lumière), es el destino turístico más popular del mundo, 
          con más de 42 millones de visitantes extranjeros por año
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="/src/images/londres.jpg"
          alt="london"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            London
          </Typography>
          <Typography variant="body2" color="text.secondary">
          London is also a cultural capital of the world, the most visited city considering the number of international 
          visits and has the largest airport system in the world according to passenger traffic. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
   </Card>
  );
}
