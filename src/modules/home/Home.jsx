import React, {Component} from "react";
import { translate } from "react-i18next";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { listingSelector } from "./HomeSelectors";
import * as homeActions from "./HomeActions";
import MapWrapper from "../Map/MapWrapper";

const styles = {
  header: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden"
  },
  titleContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#fff",
    color: "#253a5e",
    boxShadow: "0 2px 2px 0 rgba(155,155,155,0.11)",
    minHeight: "30px",
    padding: "7px",
    fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
    fontSize: "13px",
    fontWeight: "600"
  },
  title: {
    margin: 0
  },
  content: {
    height: "100%",
    width: "100%"
  },
  container: {
    height: "100%",
    width: "100%"
  },
};

class Home extends Component{
  
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.fetchInitialData();
  }

  fetchInitialData(){
    this.props.actions.mapAction("params");
  }

  render(){
    const {listings} = this.props;
    return (
    <div>
      <div style={styles.header}>
        <div style={styles.titleContainer}>
          <h2 style={styles.title}>{"FLYHOMES MAP SEARCH"}</h2>
        </div>
      </div>
      <div style={styles.content}>
        <div style={styles.container}>
          <MapWrapper listings={listings ? listings : null}/>
        </div>
      </div>
    </div>
  )

  }
}

Home.propTypes = {};

const mapStateToProps = state => ({
  listings: listingSelector(state),
});

const mapDispatchToProps = dispatch => {
  return {
   actions: bindActionCreators({ ...homeActions }, dispatch)
  }
}

export default compose(
  translate(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Home);
