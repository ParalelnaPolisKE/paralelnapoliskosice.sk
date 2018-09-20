import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { StaticQuery, graphql } from 'gatsby';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (
      <div
        style={{
          position: 'relative',
          height: 'calc(100vh - 20px)',
        }}
      >
        <Map
          style={{}}
          google={this.props.google}
          zoom={14}
          initialCenter={{
            lat: 48.720384,
            lng: 21.2538303,
          }}
        >
          <StaticQuery
            query={graphql`
              {
                allBusinessesJson {
                  edges {
                    node {
                      id
                      name
                      description
                      crypto
                      coordinates {
                        lat
                        lng
                      }
                    }
                  }
                }
              }
            `}
          >
            {data =>
              data.allBusinessesJson.edges.map(({ node: business }) => (
                <Marker
                  key={business.name}
                  onClick={this.onMarkerClick}
                  name={business.name}
                  position={business.coordinates}
                />
              ))
            }
          </StaticQuery>
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export const CryptoMap = GoogleApiWrapper(({ apiKey }) => ({
  apiKey,
  v: '3.30',
}))(MapContainer);
