import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const homeCard = (
  <React.Fragment>
    <CardContent >
      <Typography sx={{ fontSize: '1.5rem' }} color="text.secondary" gutterBottom>
      How to buy in Mytinerary?
      </Typography>
      <Typography variant="body2">
      At Mytinerary you can buy everything for your vacation very easily. First, enter your trip information in the search engine. Compare among hundreds of options and choose the one you like the most from the Buy button. Load the passenger data, select your payment method and complete the required information. Take advantage of Mytinerary banking promotions! Finally, tap on Buy again and that's it! We send you the vouchers by mail and you can start enjoying your trip.
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard1() {
  return (
    <Box sx={{ minWidth: 275, marginLeft:'1rem', marginRight:'1rem' }}>
      <Card variant="outlined">{homeCard}</Card>
    </Box>
  );
}  
