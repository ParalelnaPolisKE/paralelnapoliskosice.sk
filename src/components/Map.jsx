import React, { useState } from 'react';
import classnames from 'classnames';
import { Map as LeafletMap, TileLayer, Marker, Tooltip } from 'react-leaflet';

const mapCenter = [48.720384, 21.2538303];
const mapBounds = [[48.7765455, 21.188796], [48.6888545, 21.323346]];
const initialZoom = 13;

const getCoordinates = place => [place.lat, place.lng];

export const Map = ({ places }) => {
  const [activePlace, setActivePlace] = useState(null);
  const [zoom, setZoom] = useState(initialZoom);

  const changePlace = place => {
    if (place === activePlace) {
      setZoom(initialZoom);
      setActivePlace(null);
    } else {
      setActivePlace(place);
    }
  };

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className="mb-8 md:flex">
      <LeafletMap
        maxBounds={mapBounds}
        center={
          activePlace
            ? getCoordinates(places.find(({ name }) => name === activePlace))
            : mapCenter
        }
        zoom={zoom}
        className="mb-4 md:w-2/3"
        style={{ height: '400px' }}
        onZoom={e => setZoom(e.target.getZoom())}
      >
        <TileLayer
          attribution={`Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>`}
          id="mapbox.streets"
          url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY3JheiIsImEiOiJjam13OXNhbWwwODl2M3dwam52bTg2cHY5In0.YoR8F0Sp-CelPM2VulKkcQ"
        />

        {places.map(place => (
          <Marker
            key={place.name}
            position={getCoordinates(place)}
            onclick={() => setActivePlace(place.name)}
          >
            <Tooltip direction="top">{place.name}</Tooltip>
          </Marker>
        ))}
      </LeafletMap>
      <div className="md:w-1/3 md:ml-4">
        {places.map(place => (
          <div
            key={place.name}
            className={classnames('p-2 border-b border-grey-light', {
              'bg-grey-lightest shadow-inner': place.name === activePlace,
            })}
          >
            <a
              href="#0"
              className="block"
              onClick={e => {
                e.preventDefault();
                changePlace(place.name);
              }}
            >
              {place.name === activePlace && <span className="mr-1">►</span>}
              {place.name}
            </a>
            {place.name === activePlace && (
              <>
                <div className="text-sm text-grey-darker my-2">
                  {place.description}
                </div>
                <ul className="list-reset text-xxs text-white uppercase m-0 tracking-tight">
                  {place.crypto.map(crypto => (
                    <li key={crypto} className="inline-block mr-1 mb-1">
                      <span className="bg-grey px-1 rounded shadow inline-block">
                        {crypto}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
