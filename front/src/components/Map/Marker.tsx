import { MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import { Restaurant } from "../../types/restaurant";
import { useState } from "react";
interface Markerprops {
  location: Restaurant;
}

function Marker({ location }: Markerprops) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MapMarker
        onClick={() => setIsOpen(!isOpen)}
        position={{ lat: location.y, lng: location.x }}
        image={{
          src: "./assets/image/marker.png",
          size: {
            width: 24,
            height: 35,
          },
        }}
        title={location.name}
      />
      {isOpen && (
        <CustomOverlayMap position={{ lat: location.y, lng: location.x }}>
          <div className="wrap">
            <div className="info">
              <div className="title">{location.name}</div>
              <div className="body">
                <div className="desc">
                  <div className="ellipsis">{location.location}</div>
                </div>
              </div>
            </div>
          </div>
        </CustomOverlayMap>
      )}
    </>
  );
}

export default Marker;
