import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Background from "./components/Background";

function App() {
  // const mapRef = useRef();
  // const mapContainerRef = useRef();

  // useEffect(() => {
  //   mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
  //   mapRef.current = new mapboxgl.Map({
  //     container: mapContainerRef.current,
  //     style: "mapbox://styles/mapbox/streets-v11", // You can change the style here
  //     center: [-73.985664, 40.748817], // Starting position [lng, lat]
  //     zoom: 12, // Initial zoom level
  //   });

  //   return () => {
  //     mapRef.current.remove();
  //   };
  // }, []);

  return (
    <>
      < Background />
      {/* <div id="map-container" ref={mapContainerRef} /> */}
    </>
  );
}

export default App;
