import React from 'react';
import { Map } from 'components/Map';

export class MapWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: false,
    };
  }

  componentDidMount() {
    this.setState({ ready: true });
  }

  render() {
    if (!this.state.ready) {
      return null;
    }

    return <Map {...this.props} />;
  }
}
