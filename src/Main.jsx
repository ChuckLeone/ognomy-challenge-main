import {
  CardMedia,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputAdornment,
  OutlinedInput,
  Paper,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const Main = () => {
  const country = [{}, {}, {}];
  return (
    <>
      <Grid container>
        <Grid item sm={12} style={{ textAlign: 'center' }}>
          <Typography component="h1" variant="h2" style={{ color: 'orange' }}>
            World Countries Data
          </Typography>
          <Typography component="h2" variant="h5">
            Currently we have, 250 countries
          </Typography>
        </Grid>
        <Grid
          item
          sm={12}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <FormControl variant="outlined" fullWidth>
            <OutlinedInput
              id="country-search"
              //onChange={handleChange('search')}
              placeholder="Search countries by name, city and language"
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'Search countries by name, city and language',
              }}
            />
          </FormControl>
        </Grid>
        <Grid item sm={12}>
          <Grid container spacing={2}>
            {country.map((value) => (
              <Grid key={value} item>
                <Card>
                  <CardMedia
                    component="img"
                    height="250"
                    image=""
                    alt="country flag"
                  />
                  <CardContent>
                    <Typography variant="h3">Name</Typography>
                    <Typography variant="body1">Capital: string</Typography>
                    <Typography> Language : string</Typography>
                    <Typography>Population: number</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
