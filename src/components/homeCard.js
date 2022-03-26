import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const homeCard = (
  <div className='wrapper'>
  <React.Fragment>
    <CardContent responsive={responsive}className='cardContent'>
      <Typography sx={{ fontSize: '1.5rem' }} color="text.secondary" gutterBottom>
      Why choose Mytinerary for your trip?
      </Typography>
      <Typography variant="body2">
      Mytinerary is one of the most experienced travel agencies in America, recognized and recommended by thousands of travelers from all over the continent. Take advantage of our travel offers and promotions and travel the world. Buy your trip on Mytinerary from the web, the app or by phone Mytinerary: 0810 810 9994. Do you have questions or need help? You can call us at any time at the Mytinerary customer service center and travel with the confidence of knowing that we are with you.
      </Typography>
    </CardContent>
  </React.Fragment>
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
  </div>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275, marginLeft:'1rem', marginRight:'1rem' }}>
      <Card variant="outlined">{homeCard}</Card>
    </Box>
  );
}  
