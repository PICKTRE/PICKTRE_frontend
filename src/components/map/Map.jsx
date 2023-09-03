import Header from "../common/Header";
import Footer from "../common/Footer";
import { useGeoLocation } from "./GeoLocation";
import { GoogleMap, LoadScriptNext, MarkerF } from "@react-google-maps/api";
import styled from "styled-components";
import myPosition from "../../assets/myPosition.png";
import { GOOGLE_API_KEY } from "../../constants/OAuth";
import classes from "./Map.module.css";
import { motion } from "framer-motion";
import Trash from "../../assets/Trash.png";
// import PropTypes from 'prop-types';

const Wrapper = styled.div`
  .map-container {
    width: 390px;
    height: 668.5px;
  }
`;

const contentVariants = {
  hidden: {
    opacity: 0.3,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.3 },
  },
};

const MapWithMarker = ({ location }) => {
//   MapWithMarker.propTypes = {
//     location: PropTypes.shape({
//       latitude: PropTypes.number.isRequired,
//       longitude: PropTypes.number.isRequired,
//     }).isRequired,
//   };
  const center = { lat: location.latitude, lng: location.longitude };
  const trashMarkers = [
    {
      lat: location.latitude + 0.001,
      lng: location.longitude + 0.001,
    },
    {
      lat: location.latitude + 0.003,
      lng: location.longitude + 0.003,
    },
    {
      lat: location.latitude + 0.002,
      lng: location.longitude + 0.003,
    },
    {
      lat: location.latitude + 0.002,
      lng: location.longitude - 0.002,
    },
    {
      lat: location.latitude + 0.004,
      lng: location.longitude - 0.004,
    },
    {
      lat: location.latitude + 0.004,
      lng: location.longitude + 0.001,
    },
    {
      lat: location.latitude - 0.001,
      lng: location.longitude - 0.002,
    },
    {
      lat: location.latitude - 0.002,
      lng: location.longitude - 0.001,
    },
  ];

  return (
    <GoogleMap zoom={17} center={center} mapContainerClassName="map-container">
      <MarkerF
        position={center}
        icon={{
          url: myPosition,
          scaledSize: new window.google.maps.Size(32, 32),
        }}
      />
      {trashMarkers.map((marker, index) => (
        <MarkerF
          key={index}
          position={marker}
          icon={{
            url: Trash,
            scaledSize: new window.google.maps.Size(19, 21),
          }}
        />
      ))}
    </GoogleMap>
  );
};

const Map = () => {
  const { location } = useGeoLocation();

  return (
    <div>
      <Header />
      <motion.section
        className={classes.container}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <Wrapper>
          <LoadScriptNext googleMapsApiKey={GOOGLE_API_KEY}>
            {location && <MapWithMarker location={location} />}
          </LoadScriptNext>
        </Wrapper>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Map;
