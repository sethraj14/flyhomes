import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from 'google-map-react';
import controllable from 'react-controllables';
import Marker from './Marker.js';

class MapWrapper extends Component {


  constructor(props) {
    super(props);
    this.state = {
      center: [47.660275, -122.345951],
      zoom:11,
      hoverKey: null,
      clickKey: 0,
      ballonIndex: -1
    }
    this.activeBallon = false;
  }

  _onBoundsChange = (center, zoom /* , bounds, marginBounds */) => {

  	//On Every Bound Change, an ajax call will be there to get the latest listings for the current area
  	// getListingsDate();
    this.setState({center:center,zoom:zoom,ballonIndex:-1});
  }

  _onChildClick = (key, childProps) => {
    this.setState({ballonIndex:key}, () =>{
  		this.activeBallon = true;
    });
  }

  _onBalloonCloseClick = () => {
  	this.setState({ballonIndex:-1}, () =>{
  		this.activeBallon = false;
  	});
  }

  onClickHandler = () => {
  	if(this.activeBallon){
  		this.setState({ballonIndex:-1});
  		this.activeBallon = false;
  	}
  }


  render() {
  	const Markers = this.props.listings && 
  	this.props.listings.map((marker, index) => (
  	  <Marker
  	    key={index}
  	    lat={marker.lat}
  	    lng={marker.lng}
  	    showBallon={index==this.state.ballonIndex}
  	    onCloseClick={this._onBalloonCloseClick}
  	    marker={marker} 
  	    />
  	));
    return (
      <div style={{ height: '100vh', width: '70%' }}>
		  <GoogleMap
       	   bootstrapURLKeys={{ key: 'AIzaSyDXUeY04Lg6LO-bcsT5a5Jak95LmcZKc3Q' }}
		   center={this.state.center}
		   zoom={this.state.zoom}
		   hoverDistance={30}
		   onClick={this.onClickHandler}
		   margin={[30, 30, 30, 30]}
		   onBoundsChange={this._onBoundsChange}
		   onChildClick={this._onChildClick}
		   >
        {Markers}
      </GoogleMap>
    </div>
    );
  }
}

export default (MapWrapper);