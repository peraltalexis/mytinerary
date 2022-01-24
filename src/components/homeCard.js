import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const homeCard = (
  <React.Fragment>
    <CardContent >
      <Typography sx={{ fontSize: '1.5rem' }} color="text.secondary" gutterBottom>
      Why choose Mytinerary for your trip?
      </Typography>
      <Typography variant="body2">
      Mytinerary is one of the most experienced travel agencies in America, recognized and recommended by thousands of travelers from all over the continent. Take advantage of our travel offers and promotions and travel the world. Buy your trip on Mytinerary from the web, the app or by phone Despegar: 0810 810 9994. Do you have questions or need help? You can call us at any time at the Mytinerary customer service center and travel with the confidence of knowing that we are with you.
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275, marginLeft:'20rem', marginRight:'20rem' }}>
      <Card variant="outlined">{homeCard}</Card>
    </Box>
  );
}  
