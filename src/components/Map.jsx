import React, { useState, useEffect } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import classnames from 'classnames';
import L from 'leaflet';
import { Map as LeafletMap, TileLayer, Marker, Tooltip } from 'react-leaflet';
import { openStreetMapDataRequest } from '../../config/map';

import css from './Map.module.css';

const icon = type =>
  new L.divIcon({
    className: classnames(css.marker, { [css[`marker${type}`]]: type }),
    iconSize: [24, 24],
    iconAnchor: [12, 36],
    tooltipAnchor: [0, -30],
  });

const Amenity = ({ children }) => (
  <div className="bg-grey px-1 rounded shadow inline-block text-xxs text-white uppercase tracking-tight ml-2">
    {children}
  </div>
);

const Place = ({ place }) => {
  const {
    name,
    operator,
    description,
    amenity,
    website,
    'addr:street': addr_street,
    'addr:housenumber': addr_housenumber,
    'addr:streetnumber': addr_streetnumber,
  } = place.tags;

  return (
    <>
      <h2 className="flex items-center">
        {name || operator} {amenity && <Amenity>{amenity}</Amenity>}
      </h2>
      {addr_street && (
        <p className="text-xs -mt-4">
          {addr_street} {addr_housenumber || addr_streetnumber}
        </p>
      )}
      {description && <p>{description}</p>}
      {website && (
        <p>
          <a href={website} className="text-sm">
            {website}
          </a>
        </p>
      )}
    </>
  );
};

export const Map = ({ center, zoom: initialZoom = 13, bounds = null }) => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allMap {
  //       nodes {
  //         id: alternative_id
  //         tags {
  //           website
  //           operator
  //           addr_housenumber
  //           addr_streetnumber
  //           addr_street
  //           amenity
  //           description
  //           name
  //         }
  //         lat
  //         lng: lon
  //       }
  //     }
  //   }
  // `);

  const [places, setPlaces] = useState([]);
  const [activePlaceId, setActivePlaceId] = useState();
  const [zoom, setZoom] = useState(initialZoom);

  // const places = data.allMap.nodes.filter(place => !!place.id);

  // TODO: temporary until transformer-json bug is resolved
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://overpass-api.de/api/interpreter?data=${openStreetMapDataRequest}`
      );
      const places = await response.json();

      setPlaces(places.elements);
    }

    fetchData();
  }, []);

  if (typeof window === 'undefined') {
    return null;
  }

  const changePlace = id => {
    if (id === activePlaceId) {
      setZoom(initialZoom);
      setActivePlaceId(null);
    } else {
      setActivePlaceId(id);
    }
  };

  // const getCoordinates = place => [place.lat, place.lng];
  const getCoordinates = place => [place.lat, place.lon];

  const getName = place => place.tags.name || place.tags.operator;

  const getPlaceById = activePlaceId =>
    places.find(({ id }) => id === activePlaceId);

  return (
    <div className="mb-8">
      <div className="md:flex">
        <LeafletMap
          maxBounds={bounds}
          center={
            activePlaceId ? getCoordinates(getPlaceById(activePlaceId)) : center
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
              key={place.id}
              position={getCoordinates(place)}
              onclick={() => changePlace(place.id)}
              icon={icon(place.tags.amenity)}
            >
              <Tooltip
                key={`${activePlaceId}${place.id}`}
                permanent={place.id === activePlaceId}
                direction="top"
              >
                {getName(place)}
              </Tooltip>
            </Marker>
          ))}
        </LeafletMap>
        <div className="mb-4 md:w-1/3 md:ml-4">
          <div className="bg-grey-lightest p-4">
            {activePlaceId ? (
              <Place place={getPlaceById(activePlaceId)} />
            ) : (
              <p>Vyber miesto na mape alebo zo zoznamu nižšie.</p>
            )}
          </div>
        </div>
      </div>
      <div>
        {places.map(({ id, tags: { amenity, name, operator } }) => (
          <button
            key={id}
            className={classnames('p-2 mr-1 mb-1', {
              'bg-grey-lighter hover:bg-grey-light': id !== activePlaceId,
              'bg-grey-darker hover:bg-grey-dark text-white':
                id === activePlaceId,
            })}
            onClick={() => changePlace(id)}
          >
            <span className="flex items-center ">
              {name || operator} {amenity && <Amenity>{amenity}</Amenity>}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
