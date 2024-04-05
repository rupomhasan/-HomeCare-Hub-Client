import GoogleMapReact from "google-map-react";
import { MdLocationOn } from "react-icons/md";

const AnyReactComponent = ({ text }) => (
  <div>
    <MdLocationOn className="text-2xl text-red-600" />
  </div>
);

const ProviderMaps = ({ props }) => {

  const { latitude, longitude, name } = props;

  const defaultLocation = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 15,
  };
  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultLocation.center}
        defaultZoom={defaultLocation.zoom}
      >
        <AnyReactComponent
          lat={latitude}
          lng={longitude}
          text="Our Company Location"
        />
      </GoogleMapReact>
    </div>
  );
};

export default ProviderMaps;
