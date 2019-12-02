const MapStyles = {
	markerWrapper: {
	    position: "absolute",
	    left: "20px",
	    zIndex: "6"
	},
	markerInner:{
		position: "relative",
		width: "40px"
	},
	markerMain:{
		position: "absolute",
	    left: "5px",
	    textAlign: "center",
	    fontWeight: "300",
	    color: "white",
	    width: "100%",
	    margin: "1px 0px 0px 2px",
	    cursor: "pointer",
	    transition: "-webkit-transform 0.25s cubic-bezier(0.485, 1.65, 0.545, 0.835) 0s",
	    transformOrigin: "15px 60px",
	},
	popUpMain:{
		width: "250px",
		minHeight:"100px",
	    left: "-6.5px",
	    marginLeft: "0px",
	    zIndex: "999980",
	    top: "100%",
	    "WebkitTransition": "background-color 1s ease",
	    transition: "background-color 1s ease",
	    transform: "translateY(8px)",
	    cursor: "pointer",
	    boxShadow: "2px 2px 12px rgba(0,0,0,.5)",
	    opacity: 1,
	    visibility: "visible",
	    color:"#253a5e",
	    background: "rgb(33,30,64)",
	    background: "linear-gradient(180deg, rgba(33,30,64,1) 0%, rgba(94,192,251,1) 0%, rgba(255,255,255,1) 100%)",
	    borderRadius: "10px",
	    padding: "5px"
	},
	closeIcon:{
		right: "10px",
	    position: "absolute",
	    top: "0px"
	},
	address:{
		width:"80%",
		position: "absolute",
		left: "7px",
		fontWeight:"600",
		fontSize: "14px"
	},
	subs:{
		fontSize: "10px",
		fontWeight: "500",
		marginTop: "25px",
		bottom: "0px"
	}
};
export default MapStyles;

const K_SCALE_NORMAL = 0.65;
const K_MIN_CONTRAST = 0.4;

export function getMarkerHolderStyle(size, origin) {
  const left = -size.width * origin.x;
  const top = -size.height * origin.y;
  return {
    position: 'absolute',
    width: size.width,
    height: size.height,
    left: left,
    top: top,
    cursor: 'pointer'
  };
}

export function getMarkerStyle(size, origin) {
  const sizeOriginX = size.width * origin.x;
  const sizeOriginY = size.height * origin.y;

  return {
    position: 'absolute',
    width: size.width,
    height: size.height,
    left: 0,
    top: 0,
    willChange: 'transform', 
    backgroundSize: `${size.width}px ${size.height}px`,
    backgroundRepeat: 'no-repeat',
    transition: 'transform 0.25s cubic-bezier(0.485, 1.650, 0.545, 0.835)',
    WebkitTransition: '-webkit-transform 0.25s cubic-bezier(0.485, 1.650, 0.545, 0.835)',
    transformOrigin: `${sizeOriginX}px ${sizeOriginY}px`,
    WebkitTransformOrigin: `${sizeOriginX}px ${sizeOriginY}px`
  };
}

export function calcMarkerMarkerStyle(scale, zIndexStyle, markerStyle) {
  const contrast = K_MIN_CONTRAST + (1 - K_MIN_CONTRAST) * Math.min(scale / K_SCALE_NORMAL, 1);

  return {
    transform: `scale(${scale} , ${scale})`,
    WebkitTransform: `scale(${scale} , ${scale})`,
    filter: `contrast(${contrast})`,
    WebkitFilter: `contrast(${contrast})`,
    ...markerStyle,
    ...zIndexStyle
  };
}