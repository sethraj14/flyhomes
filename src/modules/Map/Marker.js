import React ,  { Component } from 'react';
import PropTypes from 'prop-types';
import MapStyles, {getMarkerStyle,getMarkerHolderStyle,calcMarkerMarkerStyle} from '../../assets/MapStyles.jsx';

const K_SCALE_NORMAL = 1;

class Marker extends Component {
  static defaultProps = {
    scale: K_SCALE_NORMAL,
    size: {width: 50, height: 16},
    origin: {x: 15 / 62, y: 1},
  };


  constructor(props) {
    super(props);
    this.alive = true;
    this.state={
      color: "#378DF4",
      hoverState: false,
      showBallonState: false
    }
  }

  _onShowBallonStateChange = (...args) => {
    if (!this.alive) return;
    this.setState({showBallonState: args});
  }

  _onMouseEnterContent = (/*e*/) => {
    this.setState({color:'#37f4e7'});
  }

  _onMouseLeaveContent = (/*e*/) => {
    this.setState({color:'#378DF4'});
  }

  _onCloseClick = () => {
    if (this.props.onCloseClick) {
      this.props.onCloseClick();
    }
  }

  componentWillUnmount() {
    this.alive = false;
  }

  render() {
    const scale = this.props.scale;
    const markerHolderStyle = getMarkerHolderStyle(this.props.size, this.props.origin);
    const markerStyle = getMarkerStyle(this.props.size, this.props.origin);
    const zIndexStyle = {
      zIndex: -1
    };
    const styleMarkerMarker = calcMarkerMarkerStyle(scale, zIndexStyle, markerStyle);
    return (
      <React.Fragment>
      <div 
        style={markerHolderStyle}
        onMouseEnter={this._onMouseEnterContent}
        onMouseLeave={this._onMouseLeaveContent}
      >
        <div style={styleMarkerMarker}>
          <div >
            <div style={MapStyles.markerMain}>1M</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="16" viewBox="0 0 60 16"><g fill="none" fillRule="evenodd">
                  <path fill={this.state.color} d="M6.988 0H58a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7.012a2 2 0 0 1-1.611-.815L.889 9.047a2 2 0 0 1 .023-2.4L5.4.784A2 2 0 0 1 6.988 0z">
                  </path>
                  <circle cx="6.5" cy="8" r="1.5" fill="#FFF"></circle></g>
              </svg>
            </div>
          </div>
        </div>
        {this.props.showBallon && <div
          style={MapStyles.popUpMain}
          >
          <span
            style={MapStyles.closeIcon}
            onClick={this._onCloseClick}
            >x
          </span>
          <div>
            <div style={MapStyles.address}>
              <strong>{this.props.marker.address}</strong>
              <br/>
              <strong>{"$1 Million"}</strong>
              <br/>
              <div style={MapStyles.subs}>
                <strong >{"6 beds - 4.5 baths - 3342ft2"}</strong>
              </div>
            </div>
          </div>
        </div>}
      </React.Fragment>
    );
  }

}

export default Marker;
