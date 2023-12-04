import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  height: '400px',
  width: '100%',
};

const center = {
  lat: 6.5244,
  lng: 3.3792,
};

const App = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" style={{ margin: '20px 0' }}>
        Gym Locator
      </Typography>
      <LoadScript googleMapsApiKey="AIzaSyD_t72hDaYxMztvrW3udG2UjlO5Ya62gBE">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
        />
      </LoadScript>
    </Container>
  );
};

export default App;
