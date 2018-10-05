import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export class Map extends React.Component {
  state = {
    active: null,
    position: {
      lat: 48.720384,
      lng: 21.2538303,
    },
    zoom: 13,
  };

  map;

  setActivePoint = node =>
    this.setState({
      active: node.name,
      position: node.coordinates,
    });

  render() {
    const { active, position, zoom } = this.state;

    return (
      <div className="mb-8 md:flex">
        <LeafletMap
          ref={map => {
            this.map = map;
          }}
          center={position}
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

          {this.props.data.map(({ node: business }) => (
            <Marker
              key={business.name}
              position={business.coordinates}
              onclick={() => this.setActivePoint(business)}
            >
              <Tooltip direction="top">{business.name}</Tooltip>
            </Marker>
          ))}
        </LeafletMap>
        <div className="md:w-1/3 md:ml-4">
          {this.props.data.map(({ node: business }) => (
            <div
              key={business.name}
              onClick={() => this.setActivePoint(business)}
              className="mb-2 pb-2 border-b"
            >
              <span className={active === business.name ? 'font-bold' : ''}>
                {business.name}
              </span>
              <br />
              {business.description}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
