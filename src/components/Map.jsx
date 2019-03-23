import React from 'react';
import classnames from 'classnames';
import { Map as LeafletMap, TileLayer, Marker, Tooltip } from 'react-leaflet';

const initialState = {
  active: null,
  lat: 48.720384,
  lng: 21.2538303,
  zoom: 13,
};

export class Map extends React.Component {
  state = initialState;

  setActivePoint = node =>
    this.setState(({ active }) =>
      active === node.name
        ? initialState
        : {
            active: active === node.name ? null : node.name,
            lat: node.lat,
            lng: node.lng,
          }
    );

  render() {
    const { active, lat, lng, zoom } = this.state;

    if (typeof window === 'undefined') {
      return null;
    }

    return (
      <div className="mb-8 md:flex">
        <LeafletMap
          ref={map => {
            this.map = map;
          }}
          maxBounds={[[48.7765455, 21.188796], [48.6888545, 21.323346]]}
          center={[lat, lng]}
          zoom={zoom}
          className="mb-4 md:w-2/3"
          style={{ height: '400px' }}
          onZoom={zoom =>
            this.setState({ zoom: this.map.leafletElement.getZoom() })
          }
        >
          <TileLayer
            attribution={`Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>`}
            id="mapbox.streets"
            url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY3JheiIsImEiOiJjam13OXNhbWwwODl2M3dwam52bTg2cHY5In0.YoR8F0Sp-CelPM2VulKkcQ"
          />

          {this.props.data.map(place => (
            <Marker
              key={place.name}
              position={[place.lat, place.lng]}
              onclick={() => this.setActivePoint(place)}
            >
              <Tooltip direction="top">{place.name}</Tooltip>
            </Marker>
          ))}
        </LeafletMap>
        <div className="md:w-1/3 md:ml-4">
          {this.props.data.map(place => (
            <div
              key={place.name}
              className={classnames('p-2 border-b border-grey-light', {
                'bg-grey-lightest shadow-inner': active === place.name,
              })}
            >
              <a
                href="#0"
                className="block"
                onClick={e => {
                  e.preventDefault();
                  this.setActivePoint(place);
                }}
              >
                {active === place.name && <span className="mr-1">►</span>}
                {place.name}
              </a>
              {active === place.name && (
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
  }
}
