import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Cities() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/src/images/paris.jpeg"
          alt="paris"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Paris
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Conocida también como la «Ciudad de la Luz» (la Ville lumière), es el destino turístico más popular del mundo, 
          con más de 42 millones de visitantes extranjeros por año
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
