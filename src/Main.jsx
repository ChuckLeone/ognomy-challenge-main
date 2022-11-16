import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";

const Main = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setItems(result);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  return (
    <>
      <Container>
        <Grid container>
          <Grid
            item
            sm={12}
            style={{
              textAlign: "center",
              backgroundColor: "#f1f1f1",
              padding: "16px",
            }}
          >
            <Typography component="h1" variant="h3" style={{ color: "orange" }}>
              World Countries Data
            </Typography>
            <Typography component="h2" variant="h6" style={{ fontWeight: 600 }}>
              Currently we have, {items.length} countries
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
            }}
          >
            <FormControl variant="outlined" sx={{ width: 550 }}>
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
                  "aria-label": "Search countries by name, city and language",
                }}
              />
            </FormControl>
          </Grid>
          <Grid
            item
            sm={12}
            style={{ backgroundColor: "#f1f1f1", padding: "16px" }}
          >
            <Grid
              container
              spacing={2}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {!isLoaded ? (
                <Box sx={{ display: "flex", padding: "48px" }}>
                  <CircularProgress />
                  <Typography variant="body1"> Loading...</Typography>
                </Box>
              ) : (
                <>
                  {items.map((item) => (
                    <Grid key={item.name} item>
                      <Card>
                        <CardContent>
                          <div style={{ textAlign: "center" }}>
                            <img
                              src={item.flags.png}
                              width="167"
                              height="100"
                            />
                          </div>
                          <Typography
                            component="h3"
                            variant="h6"
                            style={{
                              color: "orange",
                              textTransform: "uppercase",
                              textAlign: "center",
                              width: "250px",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {item.name}
                          </Typography>
                          <Typography variant="body1">
                            <span style={{ fontWeight: "600" }}>Capital: </span>
                            {item.capital}
                          </Typography>
                          <Typography>
                            <span style={{ fontWeight: "600" }}>
                              Language:{" "}
                            </span>
                            {item.language}
                          </Typography>
                          <Typography>
                            <span style={{ fontWeight: "600" }}>
                              Population:{" "}
                            </span>
                            {item.population}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Main;
